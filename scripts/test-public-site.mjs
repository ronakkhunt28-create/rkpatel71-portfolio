import assert from "node:assert/strict";

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const canonical = "https://rkpatel71-portfolio.vercel.app";
const slugs = ["supportpilot-ai", "ai-lead-management-agent", "opsforge-ai", "bizhunter-mis"];
let checks = 0;
for (const path of ["/", ...slugs.map(slug => `/projects/${slug}`)]) {
  const response = await fetch(base + path, { redirect: "manual" });
  assert.equal(response.status, 200, `${path} must load without redirect`);
  const html = await response.text();
  const expected = canonical + (path === "/" ? "" : path);
  assert.ok(html.includes(`<link rel="canonical" href="${expected}"`), `${path} canonical`);
  assert.ok(html.includes(`property="og:url" content="${expected}"`), `${path} Open Graph URL`);
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), `${path} Twitter card`);
  assert.ok(!html.includes("rkpatel71.com"), `${path} has no obsolete custom domain`);
  checks += 5;
}
for (const path of ["/sitemap.xml", "/robots.txt"]) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes(canonical));
  assert.ok(!text.includes("rkpatel71.com"));
  checks += 3;
}
const home = await (await fetch(base)).text();
assert.ok(home.includes(`"url":"${canonical}"`), "Person structured data URL");
assert.ok(home.includes('href="mailto:khuntronak5@gmail.com"'), "Direct email action");
assert.ok(home.includes("Copy Email Address"), "Copy email interaction");
assert.ok(!home.includes("<form"), "Unavailable email form hidden");
assert.ok(home.includes('href="https://github.com/ronakkhunt28-create"'), "GitHub profile link");
checks += 5;
const pdf = await fetch(base + "/resume/Ronak_Patel_AI_Automation_Resume.pdf");
assert.equal(pdf.status, 200);
assert.ok(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).toString() === "%PDF-");
checks += 2;
const contact = await fetch(base + "/api/contact", {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Portfolio QA", email: "qa@example.com", message: "Provider-free launch verification. Do not send email." }),
});
assert.equal(contact.status, 503, "Unconfigured provider fails honestly");
assert.equal((await contact.json()).success, false);
checks += 2;
console.log(`Public site: ${checks}/${checks} checks passed at ${base}; no email sent.`);
