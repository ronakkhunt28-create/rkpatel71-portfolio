import fs from "node:fs";
import assert from "node:assert/strict";

const median = values => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const comparison = {};
const afterPhase = process.argv[2] || "after";
for (const mode of ["mobile", "desktop"]) {
  const sets = {};
  for (const phase of ["before", "after"]) {
    const runs = [1, 2, 3].map(i => JSON.parse(fs.readFileSync(`reports/v21-${phase === "after" ? afterPhase : phase}-${mode}-${i}.json`, "utf8")));
    for (const run of runs) {
      assert.ok(!run.runtimeError, "Lighthouse completed without a runtime error");
      assert.equal(run.requestedUrl, "http://localhost:3000/");
      assert.deepEqual(run.configSettings, runs[0].configSettings, "Identical settings within each series");
      assert.equal(run.lighthouseVersion, runs[0].lighthouseVersion);
      assert.equal(run.environment.hostUserAgent, runs[0].environment.hostUserAgent);
    }
    sets[phase] = {
      runs: runs.map(run => ({
        performance: run.categories.performance.score * 100,
        lcpMs: run.audits["largest-contentful-paint"].numericValue,
        tbtMs: run.audits["total-blocking-time"].numericValue,
        cls: run.audits["cumulative-layout-shift"].numericValue,
      })),
      medians: Object.fromEntries(["performance", "accessibility", "best-practices", "seo"].map(key => [key, median(runs.map(r => 100 * r.categories[key].score))])),
      lcpMs: median(runs.map(r => r.audits["largest-contentful-paint"].numericValue)),
      tbtMs: median(runs.map(r => r.audits["total-blocking-time"].numericValue)),
      cls: median(runs.map(r => r.audits["cumulative-layout-shift"].numericValue)),
      jsTransferBytes: median(runs.map(r => r.audits["network-requests"].details.items.filter(item => item.resourceType === "Script").reduce((sum, item) => sum + item.transferSize, 0))),
      styleLayoutMs: median(runs.map(r => r.audits["mainthread-work-breakdown"].details.items.find(item => item.group === "styleLayout").duration)),
      scriptEvaluationMs: median(runs.map(r => r.audits["mainthread-work-breakdown"].details.items.find(item => item.group === "scriptEvaluation").duration)),
      benchmarkIndices: runs.map(r => r.environment.benchmarkIndex),
      lighthouseVersion: runs[0].lighthouseVersion,
      hostUserAgent: runs[0].environment.hostUserAgent,
      settings: runs[0].configSettings,
    };
  }
  assert.deepEqual(sets.before.settings, sets.after.settings, "Before/after settings match");
  assert.equal(sets.before.lighthouseVersion, sets.after.lighthouseVersion);
  assert.equal(sets.before.hostUserAgent, sets.after.hostUserAgent);
  comparison[mode] = sets;
}
console.log(JSON.stringify(comparison, null, 2));
