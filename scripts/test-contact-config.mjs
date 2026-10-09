import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";
import ts from "typescript";

const require = createRequire(import.meta.url);
const source = await readFile(new URL("../src/app/api/contact/route.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText.replace('"next/server"', JSON.stringify(pathToFileURL(require.resolve("next/server.js")).href));
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);
const names = ["VERCEL_ENV", "RESEND_API_KEY", "CONTACT_EMAIL_FROM", "CONTACT_EMAIL_TO"];
const original = Object.fromEntries(names.map(name => [name, process.env[name]]));
const originalFetch = globalThis.fetch;
const originalError = console.error;
const originalLog = console.log;
const payload = { name: "Portfolio QA", email: "qa@example.com", message: "Contact configuration verification only." };
const request = (body = payload) => new Request("http://localhost/api/contact", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
});
let count = 0;
try {
  process.env.VERCEL_ENV = "production";
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_EMAIL_FROM;
  console.error = () => {};
  console.log = () => {};
  globalThis.fetch = async () => { throw new Error("Unexpected network request"); };
  assert.equal((await POST(request())).status, 503); count++;
  process.env.VERCEL_ENV = "development";
  assert.equal((await POST(request())).status, 503); count++;
  process.env.VERCEL_ENV = "production";
  process.env.RESEND_API_KEY = "test-only-placeholder";
  assert.equal((await POST(request())).status, 503); count++;
  process.env.CONTACT_EMAIL_FROM = "Portfolio <onboarding@resend.dev>";
  assert.equal((await POST(request())).status, 503); count++;
  process.env.CONTACT_EMAIL_FROM = "Portfolio <contact@verified.example>";
  process.env.CONTACT_EMAIL_TO = "owner@example.com";
  globalThis.fetch = async () => new Response("Rejected", { status: 403 });
  assert.equal((await POST(request())).status, 502); count++;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, "https://api.resend.com/emails");
    const body = JSON.parse(options.body);
    assert.equal(body.from, process.env.CONTACT_EMAIL_FROM);
    assert.equal(body.to, "owner@example.com");
    assert.equal(body.reply_to, "qa@example.com");
    return Response.json({ id: "mock-delivery-only" });
  };
  assert.equal((await POST(request())).status, 200); count++;
  globalThis.fetch = async () => { throw new Error("Unexpected network request"); };
  assert.equal((await POST(request({ ...payload, honeypot: "bot" }))).status, 200); count++;
  assert.equal((await POST(request({ ...payload, email: "invalid" }))).status, 400); count++;
} finally {
  globalThis.fetch = originalFetch;
  console.error = originalError;
  console.log = originalLog;
  for (const name of names) {
    if (original[name] === undefined) delete process.env[name];
    else process.env[name] = original[name];
  }
}
console.log(`Contact configuration: ${count}/${count} passed (mocked Resend; no email sent).`);
