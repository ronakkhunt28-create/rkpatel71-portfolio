import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Evaluate only our local, import-free data module; no external code or credentials.
const source = fs.readFileSync("src/data/projects.ts", "utf8");
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const sandbox = { exports: {} };
vm.runInNewContext(code, sandbox);
const { projects, secondaryProjects } = sandbox.exports;
let checks = 0;
function check(condition, label) { assert.ok(condition, label); checks++; }
const expectedCounts = ["79/79", "68/68", "32/32"];
for (const [index, project] of projects.entries()) {
  check(project.status && project.validationNote, `${project.title}: visible validation scope`);
  if (project.featured) {
    check(project.metrics[0].value === expectedCounts[index], "Preserve recorded test count");
    check(project.evidenceSources.length > 0, "Evidence links supplied");
    check(project.evidenceSources.every(s => /^https:\/\/github\.com\/ronakkhunt28-create\/[^/]+\/blob\/[a-f0-9]{40}\//.test(s.url)), "Evidence pinned to exact source revision");
    check(project.githubUrl.endsWith(`/${project.slug}`), "Link to actual project repository, not account profile");
  }
}
const ops = projects.find(p => p.slug === "opsforge-ai");
check(ops.validationNote.includes("SimulatedAdapter") && ops.validationNote.includes("unverified"), "OpsForge simulated vs live scope");
const biz = projects.find(p => p.slug === "bizhunter-mis");
check(!biz.githubUrl, "No invented public BizHunter repository");
check(biz.status.includes("Release candidate") && biz.status.includes("not verified"), "BizHunter is not represented as production deployed");
const journal = secondaryProjects.find(p => p.title === "Trading Journal Pro X");
check(journal.technologies.includes("Python / FastAPI") && journal.technologies.includes("React / TypeScript"), "Current desktop stack");
check(!journal.technologies.some(t => /VBA|UserForms/.test(t)), "No obsolete Trading Journal stack");
check(journal.description.includes("pending") && journal.status.includes("not production-ready"), "Journal live blockers disclosed");
check(!/100% operational uptime|zero-latency|Eliminated inventory balance discrepancies|enterprise-grade non-repudiation/i.test(source), "Remove unsupported guarantees");
const featuredSource = fs.readFileSync("src/components/projects/FeaturedProjects.tsx", "utf8");
const heroSource = fs.readFileSync("src/components/hero/Hero.tsx", "utf8");
check(!featuredSource.includes('"use client"') && !heroSource.includes('"use client"'), "Static hero/showcase do not hydrate");
check(!fs.readFileSync("src/components/projects/ProjectVisual.tsx", "utf8").includes("priority="), "Below-fold gallery does not compete for priority");

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const home = await (await fetch(base)).text();
check(home.includes(journal.status) && home.includes(biz.status), "Pending status rendered in homepage HTML");
for (const project of projects) {
  const html = await (await fetch(`${base}/projects/${project.slug}`)).text();
  check(html.includes("Evidence scope &amp; validation limits"), "Case study exposes evidence scope");
  check(html.includes(project.validationNote.replaceAll("&", "&amp;").replaceAll("'", "&#x27;")), `${project.title}: full validation note rendered`);
  check(html.includes('property="og:image"') && html.includes('name="twitter:image"'), "Case-study social image, including screenshot-free BizHunter");
  if (!project.githubUrl) check(!html.includes("Inspect repository"), "No misleading repository action");
}
console.log(`V2.1 credibility/performance invariants: ${checks}/${checks} checks passed.`);
