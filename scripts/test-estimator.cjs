const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const ts = require("typescript");

function load(name, dependencies = {}) {
  let source = fs.readFileSync(path.join(__dirname, "../src/lib", `${name}.ts`), "utf8");
  if (name === "estimator") {
    const marker = 'const panel = $("#certain-estimator");';
    assert.ok(source.includes(marker), "Expose the pure helpers before DOM initialization");
    source = source.replace(marker, `return { estimate, resultHtml, startConversation }; ${marker}`);
  }
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  const module = { exports: {} };
  new Function("require", "module", "exports", code)((dependency) => {
    assert.ok(dependency in dependencies, `Unexpected dependency: ${dependency}`);
    return dependencies[dependency];
  }, module, module.exports);
  return module.exports;
}

const config = load("estimator-config");
const { initializeEstimator } = load("estimator", {
  "./estimator-config": config,
  "./website-scope": { createWebsiteScope: () => ({}) },
});
let conversationSummary;
const { estimate, resultHtml, startConversation } = initializeEstimator(null, (summary) => {
  conversationSummary = summary;
});
const base = { currentKg: 100, targetKg: 96, heightFt: 5, heightIn: 10, age: 30, sex: "male" };

test("short goals lead with their early milestone without inventing a later phase", () => {
  const unchanged = estimate(base);
  const changed = estimate({ ...base, activity: "sedentary", sleep: "under6", stress: "high" });
  assert.equal(changed.habits.length, 3);
  assert.deepEqual(changed.path, unchanged.path);
  for (const result of [unchanged, changed]) {
    const html = resultHtml(result);
    assert.match(html, /class="est-hero-progress"><span>~4 kg<\/span>/);
    assert.equal((html.match(/data-est-phase=/g) || []).length, 1);
    assert.doesNotMatch(html, /data-est-phase="later"/);
    assert.match(html, /Your first 4 weeks/);
    assert.match(html, /<strong>About 4 weeks<\/strong>/);
    assert.doesNotMatch(html, /data-est-chart|est-comparison|est-scenario|<svg|a week to start|Habits as entered/);
    assert.match(html, /isn’t medical advice or a guaranteed deadline/);
    startConversation(result);
    assert.match(conversationSummary, /100 kg to 96 kg; estimated timeline About 4 weeks/);
    assert.match(conversationSummary, /not guaranteed/);
  }
});

test("the 30 kg goal splits into 12 kg in 12 weeks, then 18 kg in 24 weeks", () => {
  const r = estimate({ ...base, age: 34, targetKg: 70 });
  assert.equal(r.weeks, 36);
  assert.equal(r.goalDuration, "About 8 months");
  assert.equal(r.planningAdjusted, false);
  assert.equal(r.program.lossKg, 12);
  assert.equal(r.program.weeks, 12);
  assert.equal(r.quickWin.lossKg, 3);
  assert.equal(r.quickWin.weeks, 3);
  assert.equal(r.later.lossKg, 18);
  assert.equal(r.later.weeks, 24);
  assert.equal(r.program.lossKg + r.later.lossKg, r.loseKg);
  assert.equal(r.milestones.at(-1).weeks, r.weeks);
  for (let week = 1; week < r.path.length; week++) {
    assert.equal(r.path[week - 1] - r.path[week], week <= 12 ? 1 : 0.75);
  }
  const html = resultHtml(r);
  assert.match(html, /class="est-hero-progress"><span>~12 kg<\/span>/);
  assert.match(html, /Your first 12 weeks/);
  assert.match(html, /Early target: up to 1 kg\/week/);
  assert.equal((html.match(/data-est-phase=/g) || []).length, 2);
  assert.match(html, /About 24 weeks/);
  startConversation(r);
  assert.match(conversationSummary, /estimated timeline About 8 months; early phase ~12 kg in 12 weeks/);
  const lighter = estimate({ ...base, currentKg: 80, targetKg: 70 });
  assert.equal(lighter.weeks, 10);
  const active = estimate({ ...base, targetKg: 70, activity: "very" });
  for (let week = 1; week < active.path.length; week++) {
    assert.ok(active.path[week - 1] - active.path[week] <= 1);
  }
});

test("goals at and just beyond the phase boundary do not overstate the first phase", () => {
  const atBoundary = estimate({ ...base, targetKg: 88 });
  assert.equal(atBoundary.weeks, 12);
  assert.equal(atBoundary.later, null);
  const beyond = estimate({ ...base, targetKg: 87.9 });
  assert.ok(beyond.weeks > 12);
  assert.ok(Math.abs(beyond.later.lossKg - 0.1) < 1e-8);
  assert.ok(Math.abs(beyond.program.lossKg + beyond.later.lossKg - beyond.loseKg) < 1e-8);
  assert.match(resultHtml(beyond), /<strong>~0.1 kg<\/strong>/);
});

test("the planning target retains health gates, preparation and health-specific rate caps", () => {
  assert.equal(estimate({ ...base, age: 17 }).status, "gate");
  assert.equal(estimate({ ...base, currentKg: 50, targetKg: 45 }).status, "gate");
  assert.equal(estimate({ ...base, sex: "female", lifeStage: "pregnant" }).status, "gate");
  const r = estimate({ ...base, targetKg: 80, sex: "female", lifeStage: "postpartum", activity: "sedentary" });
  assert.ok(r.prep.weeks >= 6);
  assert.equal(r.planningAdjusted, true);
  assert.match(resultHtml(r), /Planning targets adjusted/);
  assert.ok(r.quickWin.lossKg <= 0.75 + 1e-8);
  for (let i = 1; i < r.path.length; i++) {
    const loss = r.path[i - 1] - r.path[i];
    assert.ok(loss > 0 && loss <= 0.5 + 1e-8);
    if (i <= r.prep.weeks) assert.ok(loss <= 0.25 + 1e-8);
    if (i > 12) assert.ok(loss <= 0.375 + 1e-8);
  }
  assert.equal(estimate(base).goalDuration, "About 4 weeks");
});

test("unfinished plans remain open-ended and small goals have a valid duration", () => {
  const settings = config.estimatorConfig.settings;
  const originalHorizon = settings.maxSimWeeks;
  let r;
  let completed;
  try {
    settings.maxSimWeeks = 1;
    r = estimate({ ...base, targetKg: 90 });
    settings.maxSimWeeks = 15;
    completed = estimate({ ...base, targetKg: 90 });
  } finally {
    settings.maxSimWeeks = originalHorizon;
  }
  assert.equal(r.weeks, null);
  assert.equal(completed.weeks, 10);
  assert.match(r.goalDuration, /More than/, "An unfinished plan must not look like a completed goal");
  for (const result of [r, completed]) {
    const html = resultHtml(result);
    assert.ok(html.includes(`<strong>${result.goalDuration}</strong>`));
    assert.doesNotMatch(html, /NaN|Infinity/);
  }
  assert.doesNotMatch(resultHtml(r), /est-milestones-panel/, "Do not show an empty milestones section");
  const small = estimate({ ...base, targetKg: 99.9 });
  assert.ok(small.weeks > 0 && small.weeks < 1);
  assert.equal(small.goalDuration, "About 1 week");
  assert.match(resultHtml(small), /class="est-hero-progress"><span>~0.1 kg<\/span>/);
  assert.doesNotMatch(resultHtml(small), /NaN|Infinity/);
});
