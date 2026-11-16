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

test("one planning timeframe replaces comparison charts without restoring the starting-rate stat", () => {
  const unchanged = estimate(base);
  const changed = estimate({ ...base, activity: "sedentary", sleep: "under6", stress: "high" });
  assert.equal(changed.habits.length, 3);
  assert.deepEqual(changed.path, unchanged.path);
  for (const result of [unchanged, changed]) {
    const html = resultHtml(result);
    assert.equal((html.match(/class="est-hero-time"/g) || []).length, 1);
    assert.match(html, /class="est-hero-time"><span>About 4 weeks<\/span>/);
    assert.doesNotMatch(html, /data-est-chart|est-comparison|est-scenario|<svg|a week to start|Habits as entered/);
    assert.match(html, /isn’t medical advice or a guaranteed deadline/);
    startConversation(result);
    assert.match(conversationSummary, /100 kg to 96 kg; estimated timeline About 4 weeks/);
    assert.match(conversationSummary, /not guaranteed/);
  }
});

test("the reported 100-to-70 kg, 5-foot-10, age-34 example plans 30 weeks, about 7 months", () => {
  const r = estimate({ ...base, age: 34, targetKg: 70 });
  assert.equal(r.weeks, 30);
  assert.equal(r.goalDuration, "About 7 months");
  assert.equal(r.planningAdjusted, false);
  assert.equal(r.program.lossKg, 13);
  assert.equal(r.milestones.at(-1).weeks, r.weeks);
  for (let week = 1; week < r.path.length; week++) {
    assert.equal(r.path[week - 1] - r.path[week], 1);
  }
  assert.match(resultHtml(r), /Based on a steady 1 kg\/week planning target/);
  startConversation(r);
  assert.match(conversationSummary, /estimated timeline About 7 months/);
  const lighter = estimate({ ...base, currentKg: 80, targetKg: 70 });
  assert.equal(lighter.weeks, 10);
  const active = estimate({ ...base, targetKg: 70, activity: "very" });
  for (let week = 1; week < active.path.length; week++) {
    assert.ok(active.path[week - 1] - active.path[week] <= 1);
  }
});

test("the planning target retains health gates, preparation and health-specific rate caps", () => {
  assert.equal(estimate({ ...base, age: 17 }).status, "gate");
  assert.equal(estimate({ ...base, currentKg: 50, targetKg: 45 }).status, "gate");
  assert.equal(estimate({ ...base, sex: "female", lifeStage: "pregnant" }).status, "gate");
  const r = estimate({ ...base, sex: "female", lifeStage: "postpartum", activity: "sedentary" });
  assert.ok(r.prep.weeks >= 6);
  assert.equal(r.planningAdjusted, true);
  assert.match(resultHtml(r), /Planning target adjusted/);
  for (let i = 1; i < r.path.length; i++) {
    const loss = r.path[i - 1] - r.path[i];
    assert.ok(loss > 0 && loss <= 0.5 + 1e-8);
    if (i <= r.prep.weeks) assert.ok(loss <= 0.25 + 1e-8);
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
    assert.ok(html.includes(`<span>${result.goalDuration}</span>`));
    assert.doesNotMatch(html, /NaN|Infinity/);
  }
  assert.doesNotMatch(resultHtml(r), /est-milestones-panel/, "Do not show an empty milestones section");
  const small = estimate({ ...base, targetKg: 99.9 });
  assert.ok(small.weeks > 0 && small.weeks < 1);
  assert.equal(small.goalDuration, "About 1 week");
  assert.doesNotMatch(resultHtml(small), /NaN|Infinity/);
});
