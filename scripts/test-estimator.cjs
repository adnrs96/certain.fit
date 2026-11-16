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

test("one estimated timeline replaces comparison charts without restoring the weekly-rate stat", () => {
  const unchanged = estimate(base);
  const changed = estimate({ ...base, activity: "sedentary", sleep: "under6", stress: "high" });
  assert.equal(changed.habits.length, 3);
  assert.deepEqual(changed.paths, unchanged.paths);
  for (const result of [unchanged, changed]) {
    const html = resultHtml(result);
    assert.equal((html.match(/class="est-hero-time"/g) || []).length, 1);
    assert.match(html, /class="est-hero-time"><span>4–8 weeks<\/span>/);
    assert.doesNotMatch(html, /data-est-chart|est-comparison|est-scenario|<svg|a week to start|Habits as entered/);
    assert.match(html, /isn’t medical advice or a guaranteed deadline/);
    startConversation(result);
    assert.match(conversationSummary, /100 kg to 96 kg; estimated timeline 4–8 weeks/);
    assert.match(conversationSummary, /not guaranteed/);
  }
});

test("the estimated timeline retains health gates, preparation and rate caps", () => {
  assert.equal(estimate({ ...base, age: 17 }).status, "gate");
  assert.equal(estimate({ ...base, currentKg: 50, targetKg: 45 }).status, "gate");
  assert.equal(estimate({ ...base, sex: "female", lifeStage: "pregnant" }).status, "gate");
  const r = estimate({ ...base, sex: "female", lifeStage: "postpartum", activity: "sedentary" });
  assert.ok(r.prep.weeks >= 6);
  for (const trajectory of Object.values(r.paths)) {
    for (let i = 1; i < trajectory.length; i++) {
      const loss = trajectory[i - 1] - trajectory[i];
      assert.ok(loss > 0 && loss <= 0.5 + 1e-8);
      assert.ok(loss <= trajectory[i - 1] * 0.01 + 1e-8);
    }
  }
  assert.equal(estimate(base).goalDuration, "4–8 weeks");
});

test("unfinished projections remain open-ended and small goals have a valid duration", () => {
  const settings = config.estimatorConfig.settings;
  const originalHorizon = settings.maxSimWeeks;
  let r;
  let partial;
  try {
    settings.maxSimWeeks = 1;
    r = estimate({ ...base, targetKg: 90 });
    settings.maxSimWeeks = 15;
    partial = estimate({ ...base, targetKg: 90 });
  } finally {
    settings.maxSimWeeks = originalHorizon;
  }
  assert.equal(r.weeks.steady, null);
  assert.notEqual(partial.weeks.steady, null);
  assert.equal(partial.weeks.relaxed, null);
  assert.match(partial.goalDuration, /\+ /, "An unfinished upper pace must not look like a bounded deadline");
  for (const result of [r, partial]) {
    const html = resultHtml(result);
    assert.ok(html.includes(`<span>${result.goalDuration}</span>`));
    assert.doesNotMatch(html, /NaN|Infinity/);
  }
  assert.doesNotMatch(resultHtml(r), /est-milestones-panel/, "Do not show an empty milestones section");
  const small = estimate({ ...base, targetKg: 99.9 });
  assert.ok(small.weeks.steady > 0 && small.weeks.steady < 1);
  assert.doesNotMatch(resultHtml(small), /NaN|Infinity/);
});
