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
    source = source.replace(marker, `return { estimate, chartSvg, resultHtml }; ${marker}`);
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
const { estimate, chartSvg, resultHtml } = initializeEstimator(null, () => {});
const base = { currentKg: 100, targetKg: 96, heightFt: 5, heightIn: 10, age: 30, sex: "male" };

test("comparison changes only selected habit assumptions and handles identical scenarios", () => {
  const unchanged = estimate(base);
  assert.deepEqual(unchanged.asAnsweredPaths, unchanged.paths);
  assert.match(resultHtml(unchanged), /both scenarios are the same/);
  const changed = estimate({ ...base, activity: "sedentary", sleep: "under6", stress: "high" });
  assert.ok(changed.asAnsweredWeeks.steady > changed.weeks.steady);
  assert.equal(changed.habits.length, 3);
  assert.deepEqual(changed.paths, unchanged.paths);
  const html = resultHtml(changed);
  assert.equal((html.match(/data-est-chart=/g) || []).length, 2);
  const durations = [...html.matchAll(/class="est-scenario-duration">([^<]+)</g)].map((match) => match[1]);
  assert.ok(durations.every((duration) => duration.endsWith("weeks")));
  assert.doesNotMatch(html, /a week to start/);
  assert.match(html, /not measured CERTAIN results/);
  const charts = ["current", "supported"].map((scenario) => chartSvg(changed, 400, scenario));
  assert.equal(
    charts[0].match(/shared (\d+)-week chart/)[1],
    charts[1].match(/shared (\d+)-week chart/)[1],
  );
  assert.equal(
    charts[0].match(/<line class="est-chart-goal"[^>]+>/)[0],
    charts[1].match(/<line class="est-chart-goal"[^>]+>/)[0],
  );
});

test("both scenarios retain health gates, preparation and rate caps", () => {
  assert.equal(estimate({ ...base, age: 17 }).status, "gate");
  assert.equal(estimate({ ...base, currentKg: 50, targetKg: 45 }).status, "gate");
  assert.equal(estimate({ ...base, sex: "female", lifeStage: "pregnant" }).status, "gate");
  const r = estimate({ ...base, sex: "female", lifeStage: "postpartum", activity: "sedentary" });
  assert.ok(r.prep.weeks >= 6);
  for (const trajectory of [...Object.values(r.paths), ...Object.values(r.asAnsweredPaths)]) {
    for (let i = 1; i < trajectory.length; i++) {
      const loss = trajectory[i - 1] - trajectory[i];
      assert.ok(loss > 0 && loss <= 0.5 + 1e-8);
      assert.ok(loss <= trajectory[i - 1] * 0.01 + 1e-8);
    }
  }
  assert.equal(estimate(base).goalDuration, "4–8 weeks");
});

test("unfinished projections never draw a fabricated goal endpoint", () => {
  const settings = config.estimatorConfig.settings;
  const originalHorizon = settings.maxSimWeeks;
  let r;
  let partial;
  try {
    settings.maxSimWeeks = 4;
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
  for (const scenario of ["current", "supported"]) {
    const svg = chartSvg(r, 400, scenario);
    const goalY = Number(svg.match(/class="est-chart-goal"[^>]+y1="([^"]+)"/)[1]);
    const points = svg.match(/<polyline class="est-chart-line" points="([^"]+)"/)[1].split(" ");
    const finalY = Number(points.at(-1).split(",")[1]);
    assert.ok(finalY < goalY, "The path must still be above the unachieved goal weight");
    assert.doesNotMatch(svg, /NaN|Infinity/);
  }
  const small = estimate({ ...base, targetKg: 99.9 });
  assert.ok(small.weeks.steady > 0 && small.weeks.steady < 1);
  assert.doesNotMatch(chartSvg(small, 180, "supported"), /NaN|Infinity/);
});
