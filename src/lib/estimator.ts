import { estimatorConfig as CONFIG } from "./estimator-config";
import type {
  EstimatorAnswers,
  EstimatorField,
  EstimatorOption,
} from "./estimator-types";
import { createWebsiteScope } from "./website-scope";

export function initializeEstimator(
  root: HTMLElement,
  onStartConversation: (summary: string) => void,
) {
  const { $, listen, cleanup } = createWebsiteScope(root);
  const S = CONFIG.settings;
  const TEXT = CONFIG.text;
  const MSG = CONFIG.messages;
  const STEPS = CONFIG.steps;
  const QUESTIONS = CONFIG.questions;
  const WEEKS_PER_MONTH = 4.345;
  const WEEKS_PER_YEAR = 52.18;

  // ---------------------------------------------------------------- helpers

  function esc(text) {
    return String(text).replace(
      /[&<>"']/g,
      (ch) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[ch],
    );
  }

  // Plain-text template: "First {kg} kg" + { kg: 2 }.
  function fillText(template, values) {
    return String(template).replace(/\{(\w+)\}/g, (match, key) =>
      key in values ? values[key] : match,
    );
  }

  // HTML template: the wording is escaped, the values are inserted as given.
  function fill(template, values) {
    return fillText(esc(template), values);
  }

  function toNumber(value: unknown) {
    const n = typeof value === "number" ? value : parseFloat(String(value));
    return Number.isFinite(n) ? n : NaN;
  }

  function formatKg(kg) {
    return String(Math.round(kg * 10) / 10);
  }

  function roundHalf(n) {
    return Math.round(n * 2) / 2;
  }

  function weeksText(weeks) {
    return weeks === 1 ? "1 week" : `${weeks} weeks`;
  }

  function listText(items) {
    return items.length < 2
      ? items.join("")
      : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
  }

  function addWeeks(date, weeks) {
    const result = new Date(date.getTime());
    result.setDate(result.getDate() + Math.round(weeks * 7));
    return result;
  }

  function monthYear(date) {
    return date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
  }

  function shortDate(date, now) {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    if (date.getFullYear() !== now.getFullYear()) {
      options.year = "numeric";
    }
    return date.toLocaleDateString("en-IN", options);
  }

  function formatRange(lowWeeks, highWeeks) {
    if (lowWeeks === null) {
      return `more than ${Math.round(S.maxSimWeeks / WEEKS_PER_YEAR)} years`;
    }
    const high = highWeeks === null ? S.maxSimWeeks : highWeeks;
    if (high <= 10) {
      const a = Math.max(1, Math.round(lowWeeks));
      return `${a}–${Math.max(a + 1, Math.round(high))} weeks`;
    }
    const a = Math.max(1, Math.round(lowWeeks / WEEKS_PER_MONTH));
    const b = Math.max(a + 1, Math.round(high / WEEKS_PER_MONTH));
    if (b <= 24) {
      return `${a}–${b} months`;
    }
    const ya = Math.max(1, roundHalf(lowWeeks / WEEKS_PER_YEAR));
    const yb = Math.max(ya + 0.5, roundHalf(high / WEEKS_PER_YEAR));
    return `${ya}–${yb} years`;
  }

  // Splits "10–13 months" into the number part and the unit for the big headline.
  function splitDuration(text) {
    const cut = text.lastIndexOf(" ");
    return { value: text.slice(0, cut), unit: text.slice(cut + 1) };
  }

  // ----------------------------------------------------------------- engine

  function heightCm(answers) {
    const feet = toNumber(answers.heightFt);
    const inches = toNumber(answers.heightIn);
    return feet * 30.48 + (Number.isFinite(inches) ? inches : 0) * 2.54;
  }

  function lookup(rows, key, value) {
    return rows.find((row) => value >= row[key]) || rows[rows.length - 1];
  }

  function isVisible(question, answers) {
    return (
      !question.showIf ||
      Object.keys(question.showIf).every(
        (key) => answers[key] === question.showIf[key],
      )
    );
  }

  function fits(option, answers) {
    return !option.sex || option.sex === answers.sex;
  }

  function visibleQuestions(answers) {
    return QUESTIONS.filter((question) => isVisible(question, answers));
  }

  function questionWithField(name) {
    return QUESTIONS.find((question) =>
      (question.fields || []).some((field) => field.name === name),
    );
  }

  function fieldProblem(field, answers) {
    const value = toNumber(answers[field.name]);
    if (
      (field.optional && !Number.isFinite(value)) ||
      (value >= field.min && value <= field.max)
    ) {
      return null;
    }
    const label = (field.label || field.group || field.name).toLowerCase();
    return {
      field: field.name,
      message:
        field.error ||
        fillText(TEXT.fieldError, {
          label,
          min: field.min,
          max: field.max,
          unit: field.unit,
        }),
    };
  }

  // What's missing or wrong in one question's answer, or null.
  function questionProblem(question, answers) {
    if (question.type === "numbers") {
      for (const field of question.fields) {
        const problem = fieldProblem(field, answers);
        if (problem) {
          return problem;
        }
        if (
          field.name === "targetKg" &&
          toNumber(answers.targetKg) >= toNumber(answers.currentKg)
        ) {
          return { field: "targetKg", message: TEXT.goalAboveCurrent };
        }
      }
      return null;
    }
    const answer = answers[question.id];
    const answered =
      question.type === "multi"
        ? Array.isArray(answer)
        : answer !== undefined && answer !== null && answer !== "";
    return answered
      ? null
      : { field: question.id, message: question.error || "" };
  }

  // The calculation needs the number questions and sex; other unanswered questions just don't count.
  function validate(answers) {
    for (const question of QUESTIONS) {
      if (question.type === "numbers" || question.id === "sex") {
        const problem = questionProblem(question, answers);
        if (problem) {
          return Object.assign({ question: question.id }, problem);
        }
      }
    }
    return null;
  }

  function selectedEffects(answers) {
    const effects: (EstimatorOption & {
      question: string;
      lifestyle: boolean;
    })[] = [];
    visibleQuestions(answers).forEach((question) => {
      if (!question.options) {
        return;
      }
      const picked =
        question.type === "multi"
          ? answers[question.id] || []
          : [answers[question.id]];
      picked.forEach((value) => {
        const option = question.options.find((o) => o.value === value);
        if (option && fits(option, answers)) {
          effects.push(
            Object.assign(
              { question: question.id, lifestyle: Boolean(question.lifestyle) },
              option,
            ),
          );
        }
      });
    });
    return effects;
  }

  // Works with a partly answered quiz, so the gate shows as soon as it applies.
  function gateReasons(answers) {
    const reasons = [];
    const ageQuestion = questionWithField("age");
    const age = toNumber(answers.age);
    if (ageQuestion && age >= 10 && age < S.minAge) {
      reasons.push({ id: "age", question: ageQuestion.id });
    }
    const bodyQuestions = ["currentKg", "targetKg", "heightFt"].map(
      questionWithField,
    );
    if (
      bodyQuestions.every(
        (question) => question && !questionProblem(question, answers),
      )
    ) {
      const m2 = (heightCm(answers) / 100) ** 2;
      if (toNumber(answers.currentKg) / m2 < S.minBmi) {
        reasons.push({ id: "bmi", question: bodyQuestions[0].id });
      }
      if (toNumber(answers.targetKg) / m2 < S.minBmi) {
        reasons.push({ id: "goal_bmi", question: bodyQuestions[1].id });
      }
    }
    selectedEffects(answers).forEach((effect) => {
      if (effect.gate) {
        reasons.push({ id: effect.value, question: effect.question });
      }
    });
    return reasons;
  }

  function simulate(p, pace) {
    const path = [p.start];
    let weight = p.start;
    while (weight > p.target && path.length <= S.maxSimWeeks) {
      const week = path.length - 1;
      let rate =
        lookup(S.baseRateByBmi, "minBmi", weight / p.m2).rate *
        p.multiplier *
        lookup(S.slowdownByShareLost, "minShare", (p.start - weight) / p.start)
          .factor *
        pace;
      rate = Math.min(rate, S.maxWeeklyRate);
      if (week < p.prepWeeks) {
        rate *= S.resetPace;
      }
      weight -= Math.min(weight * rate, p.maxKgPerWeek);
      path.push(weight);
    }
    return path;
  }

  // Fractional week when the path first reaches `weight`, or null if it never does.
  function weeksUntil(path, weight) {
    for (let i = 1; i < path.length; i += 1) {
      if (path[i] <= weight) {
        return i - 1 + (path[i - 1] - weight) / (path[i - 1] - path[i]);
      }
    }
    return null;
  }

  function project(answers) {
    const start = toNumber(answers.currentKg);
    const target = toNumber(answers.targetKg);
    const effects = selectedEffects(answers);
    let profile = lookup(S.ageFactors, "minAge", toNumber(answers.age)).factor;
    let lifestyle = 1;
    effects.forEach((effect) => {
      if (!effect.factor) {
        return;
      }
      if (effect.lifestyle) {
        lifestyle *= effect.factor;
      } else {
        profile *= effect.factor;
      }
    });
    profile = Math.min(Math.max(profile, S.profileMin), S.multiplierMax);
    const multiplier = Math.min(
      Math.max(profile * lifestyle, S.multiplierMin),
      S.multiplierMax,
    );
    const prepItems = effects
      .filter((effect) => effect.prepWeeks)
      .map((effect) => ({ label: effect.prepLabel, weeks: effect.prepWeeks }));
    const prepWeeks = prepItems.reduce(
      (longest, item) => Math.max(longest, item.weeks),
      0,
    );
    const caps = effects
      .filter((effect) => effect.maxKgPerWeek)
      .map((effect) => effect.maxKgPerWeek);
    const params = {
      start,
      target,
      m2: (heightCm(answers) / 100) ** 2,
      multiplier,
      prepWeeks,
      maxKgPerWeek: caps.length ? Math.min(...caps) : Infinity,
    };
    const steady = simulate(params, 1);
    const relaxed = simulate(params, S.relaxedPace);
    return {
      start,
      target,
      effects,
      multiplier,
      prepItems,
      prepWeeks,
      steady,
      relaxed,
      steadyWeeks: weeksUntil(steady, target),
      relaxedWeeks: weeksUntil(relaxed, target),
    };
  }

  // What the coach helps with: each lifestyle answer that has a better habit, as { focus, text, to }.
  function partnerHabits(answers) {
    const habits: (NonNullable<EstimatorOption["better"]> & {
      question: string;
    })[] = [];
    visibleQuestions(answers).forEach((question) => {
      if (!question.lifestyle) {
        return;
      }
      const option = (question.options || []).find(
        (o) => o.value === answers[question.id],
      );
      if (option && option.better) {
        habits.push(Object.assign({ question: question.id }, option.better));
      }
    });
    return habits;
  }

  function estimate(answers: EstimatorAnswers, today?: string | Date) {
    const now = today ? new Date(today) : new Date();
    const problem = validate(answers);
    if (problem) {
      return Object.assign({ status: "invalid" as const }, problem);
    }
    const reasons = gateReasons(answers);
    if (reasons.length) {
      return { status: "gate" as const, reasons, message: TEXT.gateTitle };
    }

    // The timeline assumes the habits the coach helps with (settings.includePartnerHabits).
    const habits = partnerHabits(answers);
    const withPartner = Object.assign({}, answers);
    if (S.includePartnerHabits) {
      habits.forEach((habit) => {
        withPartner[habit.question] = habit.to;
      });
    }
    const base = project(withPartner);
    const asAnswered = S.includePartnerHabits ? project(answers) : base;
    const { start, target } = base;
    const loseKg = start - target;
    const goalDuration = formatRange(base.steadyWeeks, base.relaxedWeeks);

    let headline;
    const firstTenthKg = start * 0.9;
    if (
      (base.steadyWeeks === null || base.steadyWeeks > S.longGoalWeeks) &&
      firstTenthKg > target + 0.5
    ) {
      const steadyWeeks = weeksUntil(base.steady, firstTenthKg);
      headline = {
        type: "milestone",
        loseKg: roundHalf(start - firstTenthKg),
        duration: formatRange(
          steadyWeeks,
          weeksUntil(base.relaxed, firstTenthKg),
        ),
        date: addWeeks(now, steadyWeeks),
      };
    } else {
      headline = {
        type: "goal",
        kg: target,
        duration: goalDuration,
        date: addWeeks(now, base.steadyWeeks),
      };
    }

    const milestones = [];
    const addMilestone = (key, label, kg) => {
      const weeks = weeksUntil(base.steady, kg);
      if (weeks !== null) {
        milestones.push({ key, label, kg, weeks, date: addWeeks(now, weeks) });
      }
    };
    if (loseKg > S.firstWinKg + 1) {
      addMilestone(
        "first",
        fillText(TEXT.milestoneFirst, { kg: S.firstWinKg }),
        start - S.firstWinKg,
      );
    }
    const healthKg = start * (1 - S.healthMilestoneShare);
    if (healthKg > target + 0.5 && start - healthKg > S.firstWinKg + 0.5) {
      addMilestone(
        "health",
        fillText(TEXT.milestoneHealth, {
          pct: Math.round(S.healthMilestoneShare * 100),
        }),
        healthKg,
      );
    }
    if (loseKg >= 6) {
      addMilestone("half", TEXT.milestoneHalf, start - loseKg / 2);
    }
    addMilestone(
      "goal",
      fillText(TEXT.milestoneGoal, { kg: formatKg(target) }),
      target,
    );
    milestones.sort((a, b) => a.weeks - b.weeks);

    const weightAt = (path, week) =>
      Math.max(path[Math.min(week, path.length - 1)], target);
    const program = {
      weeks: S.programWeeks,
      lowKg: roundHalf(start - weightAt(base.relaxed, S.programWeeks)),
      highKg: roundHalf(start - weightAt(base.steady, S.programWeeks)),
      reachesGoal:
        base.steadyWeeks !== null && base.steadyWeeks <= S.programWeeks,
    };

    const paceWeek = Math.min(base.prepWeeks, base.steady.length - 2);
    const startPaceKg = Math.max(
      0.1,
      Math.round((base.steady[paceWeek] - base.steady[paceWeek + 1]) * 10) / 10,
    );

    return {
      status: "ok" as const,
      now,
      startKg: start,
      targetKg: target,
      loseKg,
      multiplier: base.multiplier,
      prep: { weeks: base.prepWeeks, items: base.prepItems },
      weeks: { steady: base.steadyWeeks, relaxed: base.relaxedWeeks },
      asAnsweredWeeks: {
        steady: asAnswered.steadyWeeks,
        relaxed: asAnswered.relaxedWeeks,
      },
      goalDuration,
      headline,
      startPaceKg,
      program,
      milestones,
      habits: habits.map((habit) => ({ focus: habit.focus, text: habit.text })),
      tags: base.effects
        .filter((effect) => effect.tag)
        .map((effect) => effect.tag),
      notes: base.effects
        .filter((effect) => effect.note)
        .map((effect) => effect.note),
      paths: { steady: base.steady, relaxed: base.relaxed },
    };
  }

  // -------------------------------------------------- encouraging messages

  function goalMessage(answers) {
    const current = toNumber(answers.currentKg);
    const target = toNumber(answers.targetKg);
    if (
      !(current >= 30 && current <= 300 && target >= 30 && target < current)
    ) {
      return null;
    }
    const lose = current - target;
    const pct = Math.max(1, Math.round((lose / current) * 100));
    const rule =
      MSG.goal.find((r) => pct < r.under) || MSG.goal[MSG.goal.length - 1];
    return {
      icon: rule.icon,
      html: fill(rule.text, {
        weight: `<strong>${formatKg(lose)} kg</strong>`,
        pct,
      }),
    };
  }

  function lifestyleMessage(answers) {
    const focus = [
      ...new Set(partnerHabits(answers).map((habit) => habit.focus)),
    ];
    if (!focus.length) {
      return {
        icon: MSG.lifestyleStrong.icon,
        html: fill(MSG.lifestyleStrong.text, {}),
      };
    }
    const habits = listText(
      focus.map((item) => `<strong>${esc(item)}</strong>`),
    );
    return {
      icon: MSG.lifestylePartner.icon,
      html: fill(MSG.lifestylePartner.text, { habits }),
    };
  }

  function healthMessage(answers) {
    const result = estimate(answers);
    if (result.status !== "ok") {
      return null;
    }
    if (result.prep.items.length) {
      const reset = result.prep.items
        .map((item) => `<strong>${esc(item.label)}</strong>`)
        .join(", ");
      return {
        icon: MSG.healthReset.icon,
        html: fill(MSG.healthReset.text, { reset }),
      };
    }
    if (result.tags.length) {
      const items = listText(
        result.tags.map((tag) => `<strong>${esc(tag)}</strong>`),
      );
      return {
        icon: MSG.healthPlanned.icon,
        html: fill(MSG.healthPlanned.text, { items }),
      };
    }
    return { icon: MSG.healthClear.icon, html: fill(MSG.healthClear.text, {}) };
  }

  // Keyed by step id in the config.
  const NUDGES = {
    goal: goalMessage,
    lifestyle: lifestyleMessage,
    health: healthMessage,
  };

  // ------------------------------------------------------------------ chart

  function chartSvg(r, width) {
    const W = Math.round(width);
    const H = W < 420 ? 170 : 200;
    const L = 40;
    const R = 10;
    const T = 22;
    const B = 22;
    const end = Math.max(
      S.programWeeks,
      Math.ceil(
        r.weeks.relaxed === null ? r.paths.relaxed.length - 1 : r.weeks.relaxed,
      ),
    );
    const span = r.startKg - r.targetKg;
    const top = r.startKg + span * 0.04;
    const bottom = r.targetKg - span * 0.12;
    const x = (week) => L + (Math.min(week, end) / end) * (W - L - R);
    const y = (kg) =>
      T + ((top - Math.max(kg, r.targetKg)) / (top - bottom)) * (H - T - B);
    const points = (path) =>
      path.map((kg, i) => [x(i), y(kg)]).concat([[x(end), y(r.targetKg)]]);
    const toAttr = (list) =>
      list.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
    const steady = points(r.paths.steady);
    const relaxed = points(r.paths.relaxed);

    const months = end / WEEKS_PER_MONTH;
    const step =
      [1, 2, 3, 6, 12, 24].find((s) => months / s <= (W < 420 ? 3 : 5)) || 24;
    let ticks = "";
    for (let m = step; m <= months + 0.01; m += step) {
      const tx = x(m * WEEKS_PER_MONTH).toFixed(1);
      ticks += `<line class="est-chart-grid" x1="${tx}" x2="${tx}" y1="${T}" y2="${H - B}"/>`;
      ticks += `<text class="est-chart-tick" x="${tx}" y="${H - 6}" text-anchor="middle">${m % 12 === 0 ? `${m / 12} yr` : `${m} mo`}</text>`;
    }

    const goalY = y(r.targetKg);
    const dots = r.milestones
      .map(
        (m) =>
          `<circle class="est-chart-dot${m.key === "goal" ? " goal" : ""}" cx="${x(m.weeks).toFixed(1)}" cy="${y(m.kg).toFixed(1)}" r="${m.key === "goal" ? 6 : 4.5}"><title>${esc(m.label)}: ${shortDate(m.date, r.now)}</title></circle>`,
      )
      .join("");
    const label = `Projected weight from ${formatKg(r.startKg)} kg to ${formatKg(r.targetKg)} kg over ${r.goalDuration}`;
    return `
    <svg class="est-chart" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(label)}">
      <rect class="est-chart-program" x="${L}" y="${T}" width="${(x(S.programWeeks) - L).toFixed(1)}" height="${H - T - B}" rx="6"/>
      <text class="est-chart-program-label" x="${L + 6}" y="${T - 8}">${esc(fillText(TEXT.chartBand, { weeks: S.programWeeks, months: Math.round(S.programWeeks / WEEKS_PER_MONTH) }))}</text>
      ${ticks}
      <text class="est-chart-tick" x="${L}" y="${H - 6}">${esc(TEXT.chartNow)}</text>
      <line class="est-chart-goal" x1="${L}" x2="${W - R}" y1="${goalY.toFixed(1)}" y2="${goalY.toFixed(1)}"/>
      <text class="est-chart-axis" x="${L - 7}" y="${T - 8}" text-anchor="end">kg</text>
      <text class="est-chart-axis" x="${L - 7}" y="${(y(r.startKg) + 4).toFixed(1)}" text-anchor="end">${formatKg(r.startKg)}</text>
      <text class="est-chart-axis goal" x="${L - 7}" y="${(goalY + 4).toFixed(1)}" text-anchor="end">${formatKg(r.targetKg)}</text>
      <polygon class="est-chart-range" points="${toAttr(steady)} ${toAttr(relaxed.slice().reverse())}"/>
      <polyline class="est-chart-line" points="${toAttr(steady)}"/>
      ${dots}
    </svg>`;
  }

  // ---------------------------------------------------------- quiz markup

  function numberBox(field) {
    const label = field.group
      ? ` aria-label="${esc(field.label || field.group)}"`
      : "";
    return `<span class="est-input-wrap"><input type="number" id="est-f-${esc(field.name)}" name="${esc(field.name)}" class="est-input" inputmode="${field.decimal ? "decimal" : "numeric"}" min="${field.min}" max="${field.max}" step="${field.decimal ? "0.1" : "1"}" placeholder="${esc(field.placeholder || "")}"${label}><em>${esc(field.unit)}</em></span>`;
  }

  function numbersMarkup(question) {
    const blocks: { group?: string; fields: EstimatorField[] }[] = [];
    question.fields.forEach((field) => {
      const last = blocks[blocks.length - 1];
      if (field.group && last && last.group === field.group) {
        last.fields.push(field);
      } else {
        blocks.push({ group: field.group, fields: [field] });
      }
    });
    const html = blocks
      .map((block) => {
        if (!block.group) {
          const field = block.fields[0];
          return `<label class="est-field"><span class="est-label">${esc(field.label)}</span>${numberBox(field)}</label>`;
        }
        const id = `est-g-${esc(block.fields[0].name)}`;
        return `<div class="est-field est-field-group"><span class="est-label" id="${id}">${esc(block.group)}</span><div class="est-group-boxes" role="group" aria-labelledby="${id}">${block.fields.map(numberBox).join("")}</div></div>`;
      })
      .join("");
    return `<div class="est-fields">${html}</div>`;
  }

  function rowLabel(question) {
    return `<span class="est-label" id="est-q-${esc(question.id)}">${esc(question.label || "")}${question.sub ? ` <small>${esc(question.sub)}</small>` : ""}</span>`;
  }

  function choiceMarkup(question) {
    const pills = question.options
      .map(
        (option) =>
          `<label class="est-pill"${option.sex ? ` data-sex="${esc(option.sex)}"` : ""}><input type="radio" name="${esc(question.id)}" value="${esc(option.value)}"${option.value === question.default ? " checked" : ""}${option.hint ? ` data-hint="${esc(option.hint)}"` : ""}><span>${esc(option.label)}</span></label>`,
      )
      .join("");
    const hinted = question.options.some((option) => option.hint);
    return `
    <div class="est-row${question.showIf ? " hidden" : ""}" data-question="${esc(question.id)}">
      ${rowLabel(question)}
      <div class="est-pills${question.fill ? " fill" : ""}" role="radiogroup" aria-labelledby="est-q-${esc(question.id)}">${pills}</div>
      ${hinted ? `<p class="est-hint" data-hint-for="${esc(question.id)}"></p>` : ""}
      ${question.note ? `<p class="est-hint">${esc(question.note)}</p>` : ""}
    </div>`;
  }

  function multiMarkup(question) {
    const pills = question.options
      .map(
        (option) =>
          `<label class="est-pill check"${option.sex ? ` data-sex="${esc(option.sex)}"` : ""}><input type="checkbox" name="${esc(question.id)}" value="${esc(option.value)}"><span>${esc(option.label)}</span></label>`,
      )
      .join("");
    const notes = question.options
      .filter((option) => option.hint)
      .map((option) => `<b>${esc(option.label)}:</b> ${esc(option.hint)}.`)
      .join(" ");
    return `
    <div class="est-row${question.box === "safety" ? " est-safety" : ""}${question.showIf ? " hidden" : ""}" data-question="${esc(question.id)}">
      ${rowLabel(question)}
      <div class="est-pills" role="group" aria-labelledby="est-q-${esc(question.id)}">${pills}</div>
      ${notes ? `<p class="est-hint">${notes}</p>` : ""}
      ${question.note ? `<p class="est-hint">${esc(question.note)}</p>` : ""}
    </div>`;
  }

  function stepMarkup(step, index) {
    const body = QUESTIONS.filter((question) => question.step === step.id)
      .map((question) =>
        question.type === "numbers"
          ? numbersMarkup(question)
          : question.type === "choice"
            ? choiceMarkup(question)
            : multiMarkup(question),
      )
      .join("");
    return `
    <fieldset class="est-step${index === 0 ? " active" : ""}" data-est-step="${index + 1}">
      <legend class="est-step-title" tabindex="-1">${esc(step.title)}</legend>
      ${body}
      <div class="est-nudge hidden" data-nudge="${esc(step.id)}" aria-live="polite"><span class="est-nudge-icon" aria-hidden="true"></span><p></p></div>
    </fieldset>`;
  }

  function panelMarkup() {
    return `
    <ol id="est-stepper" class="est-stepper" aria-label="Progress">
      ${STEPS.map((step, i) => `<li data-est-for="${i + 1}"><span>${i + 1}</span>${esc(step.label)}</li>`).join("")}
    </ol>
    <form id="estimator-form" class="estimator-form" novalidate>
      ${STEPS.map(stepMarkup).join("")}
      <p id="est-error" class="est-error hidden" role="alert"></p>
      <div class="est-nav">
        <button type="button" id="est-back" class="est-back hidden">&larr; ${esc(TEXT.back)}</button>
        <button type="submit" id="est-next" class="btn-ocean-lg">${esc(TEXT.next)} &rarr;</button>
      </div>
    </form>
    <div id="est-result" class="est-result hidden" tabindex="-1" aria-live="polite"></div>`;
  }

  // --------------------------------------------------------- result markup

  function gateHtml() {
    return `
    <div class="est-gate">
      <div class="est-gate-icon" aria-hidden="true">&#9877;</div>
      <h3>${esc(TEXT.gateTitle)}</h3>
      <p>${esc(TEXT.gateBody)}</p>
      <button type="button" class="est-back" data-est-action="edit">&larr; ${esc(TEXT.gateEdit)}</button>
    </div>`;
  }

  function resultHtml(r) {
    const h = r.headline;
    const time = splitDuration(h.duration);
    const lead = fill(h.type === "goal" ? TEXT.goalLead : TEXT.milestoneLead, {
      weight: `<strong>${formatKg(h.type === "goal" ? h.kg : h.loseKg)} kg</strong>`,
    });
    const sub = fill(h.type === "goal" ? TEXT.goalSub : TEXT.milestoneSub, {
      date: `<strong>${esc(monthYear(h.date))}</strong>`,
      kg: formatKg(r.targetKg),
      duration: esc(r.goalDuration),
    });

    const p = r.program;
    const programValue = p.reachesGoal
      ? esc(TEXT.programGoal)
      : p.lowKg === p.highKg
        ? `&minus;${formatKg(p.highKg)} kg`
        : `&minus;${formatKg(p.lowKg)} to &minus;${formatKg(p.highKg)} kg`;

    const phases = [];
    if (r.prep.weeks) {
      const items = r.prep.items.map((item) => esc(item.label)).join(", ");
      phases.push([
        fill(TEXT.resetPhase, { weeks: weeksText(r.prep.weeks) }),
        fill(TEXT.resetPhaseText, { items }),
      ]);
    }
    phases.push([
      esc(TEXT.lossPhase),
      fill(TEXT.lossPhaseText, { pace: formatKg(r.startPaceKg) }),
    ]);
    phases.push([esc(TEXT.lockPhase), esc(TEXT.lockPhaseText)]);

    const focusItems = r.habits.map((habit) => ({
      title: habit.focus.charAt(0).toUpperCase() + habit.focus.slice(1),
      text: habit.text,
    }));
    const supportItems = focusItems.concat(CONFIG.support || []);
    const support = `
    <p class="est-support-intro">${esc(focusItems.length ? TEXT.supportIntro : TEXT.supportIntroStrong)}</p>
    <ul class="est-support">${supportItems.map((item) => `<li><b>${esc(item.title)}</b><span>${esc(item.text)}</span></li>`).join("")}</ul>`;

    const strip = r.milestones
      .map(
        (m) =>
          `<li class="${m.key}"><time>${esc(shortDate(m.date, r.now))}</time><span>${esc(m.label)}</span></li>`,
      )
      .join("");
    const accounted = r.tags.length
      ? `<p class="est-accounts"><span class="est-accounts-title">${esc(TEXT.plannedAround)}</span>${r.tags.map((tag) => `<span>${esc(tag)}</span>`).join("")}</p>`
      : "";
    const notes = r.notes
      .map((note) => `<p class="est-brand-note">${esc(note)}</p>`)
      .join("");

    return `
    <div class="est-result-top">
      <div class="est-hero">
        <span class="est-kicker">${esc(TEXT.resultKicker)}</span>
        <p class="est-hero-lead">${lead}</p>
        <p class="est-hero-time"><span>${esc(time.value)}</span> ${esc(time.unit)}</p>
        <p class="est-hero-sub">${sub}</p>
        <div class="est-hero-stats">
          <div><strong>${programValue}</strong><span>${fill(p.reachesGoal ? TEXT.programGoalStat : TEXT.programStat, { weeks: p.weeks, months: Math.round(p.weeks / WEEKS_PER_MONTH) })}</span></div>
          <div><strong>~${formatKg(r.startPaceKg)} kg</strong><span>${esc(TEXT.paceStat)}</span></div>
        </div>
        <button type="button" class="est-cta" data-est-action="cta">${esc(TEXT.cta)} &rarr;</button>
        <button type="button" class="est-link" data-est-action="edit">${esc(TEXT.edit)}</button>
      </div>
      <div class="est-chart-panel">
        <h4 class="est-card-title">${esc(TEXT.chartTitle)}</h4>
        <div class="est-chart-host" data-est-chart></div>
        <ol class="est-ms-strip">${strip}</ol>
      </div>
    </div>
    <div class="est-result-bottom">
      <div class="est-card">
        <h4 class="est-card-title">${esc(TEXT.roadmapTitle)}</h4>
        <ol class="est-phases">${phases.map(([title, text]) => `<li><b>${title}</b><span>${text}</span></li>`).join("")}</ol>
        ${accounted}
      </div>
      <div class="est-card">
        <h4 class="est-card-title">${esc(TEXT.supportTitle)}</h4>
        ${support}
      </div>
    </div>
    <div class="est-foot">
      ${notes}
      <p class="est-disclaimer">${esc(TEXT.disclaimer)}</p>
    </div>`;
  }

  function startConversation(r) {
    const summary = `${formatKg(r.startKg)} kg to ${formatKg(r.targetKg)} kg, estimated ${r.goalDuration}`;
    if (S.whatsappNumber) {
      const text = fillText(TEXT.whatsappMessage, { summary });
      window.open(
        `https://wa.me/${S.whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener",
      );
      return;
    }
    onStartConversation(summary);
  }

  // --------------------------------------------------------------------- UI

  function initUI(panel: HTMLElement) {
    panel.innerHTML = panelMarkup();
    const shell = panel.closest(".est-shell") || panel;
    const form = panel.querySelector<HTMLFormElement>("#estimator-form");
    const stepper = panel.querySelector("#est-stepper");
    const stepperItems = Array.from(
      stepper.querySelectorAll<HTMLElement>("[data-est-for]"),
    );
    const steps = Array.from(form.querySelectorAll<HTMLElement>(".est-step"));
    const nextBtn = panel.querySelector<HTMLButtonElement>("#est-next");
    const backBtn = panel.querySelector<HTMLButtonElement>("#est-back");
    const errorEl = panel.querySelector("#est-error");
    const resultEl = panel.querySelector<HTMLElement>("#est-result");
    let current = 1;
    let lastResult = null;
    let gateStep = 1;

    function readAnswers() {
      const data = new FormData(form);
      const answers: EstimatorAnswers = {};
      QUESTIONS.forEach((question) => {
        if (question.type === "numbers") {
          question.fields.forEach((field) => {
            answers[field.name] = String(data.get(field.name) ?? "");
          });
        } else if (question.type === "multi") {
          answers[question.id] = data.getAll(question.id).map(String);
        } else {
          answers[question.id] = String(data.get(question.id) || "");
        }
      });
      return answers;
    }

    // Step number (1-based) that holds a form field or question.
    function stepOf(name) {
      const control = form.querySelector<HTMLElement>(`[name="${name}"]`);
      const step = control && control.closest(".est-step");
      return step ? Number(step.getAttribute("data-est-step")) : 1;
    }

    function stepOfQuestion(id) {
      const question = QUESTIONS.find((q) => q.id === id);
      const index = question
        ? STEPS.findIndex((step) => step.id === question.step)
        : -1;
      return index === -1 ? 1 : index + 1;
    }

    function bringIntoView(el) {
      if (el.getBoundingClientRect().top < 0) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    function hideError() {
      errorEl.textContent = "";
      errorEl.classList.add("hidden");
    }

    function showError(problem) {
      errorEl.textContent = problem.message || "Please answer every question.";
      errorEl.classList.remove("hidden");
      const field = form.querySelector<HTMLElement>(
        `[name="${problem.field}"]`,
      );
      if (field) {
        field.focus();
      }
    }

    function updateNudges() {
      const answers = readAnswers();
      form.querySelectorAll<HTMLElement>("[data-nudge]").forEach((box) => {
        const make = NUDGES[box.getAttribute("data-nudge")];
        const message = make ? make(answers) : null;
        const text = box.querySelector("p");
        if (!message) {
          box.classList.add("hidden");
          box.removeAttribute("data-html");
          text.innerHTML = "";
          return;
        }
        const changed = box.getAttribute("data-html") !== message.html;
        box.querySelector(".est-nudge-icon").textContent = message.icon || "";
        text.innerHTML = message.html;
        box.setAttribute("data-html", message.html);
        box.classList.remove("hidden");
        if (changed) {
          box.classList.remove("est-pop");
          void box.offsetWidth;
          box.classList.add("est-pop");
        }
      });
    }

    function showStep(n, moveFocus) {
      current = n;
      steps.forEach((step) =>
        step.classList.toggle(
          "active",
          Number(step.getAttribute("data-est-step")) === n,
        ),
      );
      stepperItems.forEach((item) => {
        const i = Number(item.getAttribute("data-est-for"));
        item.classList.toggle("active", i === n);
        item.classList.toggle("done", i < n);
        if (i === n) {
          item.setAttribute("aria-current", "step");
        } else {
          item.removeAttribute("aria-current");
        }
      });
      backBtn.classList.toggle("hidden", n === 1);
      nextBtn.innerHTML = `${esc(n === steps.length ? TEXT.seeResult : TEXT.next)} &rarr;`;
      hideError();
      updateNudges();
      if (moveFocus) {
        steps[n - 1].querySelector("legend").focus({ preventScroll: true });
        bringIntoView(panel);
      }
    }

    function showResult(result) {
      lastResult = result;
      form.classList.add("hidden");
      stepper.classList.add("hidden");
      shell.classList.toggle("is-result", result.status === "ok");
      resultEl.innerHTML =
        result.status === "ok" ? resultHtml(result) : gateHtml();
      resultEl.classList.remove("hidden");
      const chartHost = resultEl.querySelector<HTMLElement>("[data-est-chart]");
      if (chartHost) {
        chartHost.innerHTML = chartSvg(
          result,
          Math.max(280, Math.min(720, chartHost.clientWidth || 560)),
        );
      }
      resultEl.focus({ preventScroll: true });
      if (result.status === "ok") {
        shell.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        bringIntoView(panel);
      }
    }

    // After a gate, reopen the step that triggered it so a mis-tap is easy to fix.
    function editAnswers() {
      const wasGate = lastResult && lastResult.status !== "ok";
      shell.classList.remove("is-result");
      resultEl.classList.add("hidden");
      resultEl.innerHTML = "";
      form.classList.remove("hidden");
      stepper.classList.remove("hidden");
      showStep(wasGate ? gateStep : 1, true);
    }

    function syncVisibility() {
      const answers = readAnswers();
      QUESTIONS.forEach((question) => {
        const row = form.querySelector<HTMLElement>(
          `[data-question="${question.id}"]`,
        );
        if (row && question.showIf) {
          row.classList.toggle("hidden", !isVisible(question, answers));
        }
      });
      form.querySelectorAll<HTMLElement>("[data-sex]").forEach((el) => {
        el.classList.toggle(
          "hidden",
          Boolean(answers.sex) && el.getAttribute("data-sex") !== answers.sex,
        );
      });
    }

    // Questions whose options have a hint show the picked option's hint underneath.
    function syncHints() {
      form.querySelectorAll<HTMLElement>("[data-hint-for]").forEach((hint) => {
        const checked = form.querySelector<HTMLElement>(
          `input[name="${hint.getAttribute("data-hint-for")}"]:checked`,
        );
        hint.textContent =
          checked && checked.getAttribute("data-hint")
            ? checked.getAttribute("data-hint")
            : "";
      });
    }

    listen(form, "submit", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      event.preventDefault();
      const answers = readAnswers();
      const problem = visibleQuestions(answers)
        .map((question) => questionProblem(question, answers))
        .find((p) => p && stepOf(p.field) <= current);
      if (problem) {
        showError(problem);
        return;
      }
      // Only answers already given can gate, so later steps stay reachable.
      const gateSteps = gateReasons(answers)
        .map((reason) => stepOfQuestion(reason.question))
        .filter((step) => step <= current);
      if (gateSteps.length) {
        gateStep = Math.min(...gateSteps);
        showResult({ status: "gate" as const });
        return;
      }
      if (current < steps.length) {
        showStep(current + 1, true);
        return;
      }
      const result = estimate(answers);
      if (result.status === "ok") {
        showResult(result);
      } else {
        showError(result);
      }
    });

    listen(backBtn, "click", () => showStep(Math.max(1, current - 1), true));
    listen(form, "input", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      hideError();
      if (
        event.target instanceof HTMLInputElement &&
        event.target.type === "number"
      ) {
        updateNudges();
      }
    });
    listen(form, "change", () => {
      hideError();
      syncVisibility();
      syncHints();
      updateNudges();
    });

    listen(resultEl, "click", (event) => {
      if (!(event.target instanceof HTMLElement)) return;
      const action = event.target.closest("[data-est-action]");
      if (!action) {
        return;
      }
      if (action.getAttribute("data-est-action") === "edit") {
        editAnswers();
      } else if (lastResult && lastResult.status === "ok") {
        startConversation(lastResult);
      }
    });

    syncVisibility();
    syncHints();
    showStep(1, false);
  }

  const panel = $("#certain-estimator");
  if (panel) initUI(panel);
  return () => {
    cleanup();
    if (panel) panel.replaceChildren();
  };
}
