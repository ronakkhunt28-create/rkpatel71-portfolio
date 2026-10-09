"use client";
import { FormEvent, useState } from "react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Copy, Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { siteConfig } from "@/data/site";

const field = "w-full rounded-xl border hairline bg-black/25 px-4 py-3 text-sm text-white placeholder:text-slate-700 transition focus:border-cyan-300/60 focus:outline-none";
const emptyForm = { name: "", email: "", organization: "", inquiryType: "Role Opportunity", message: "", honeypot: "" };

export function Contact({ emailDeliveryAvailable = false }: { emailDeliveryAvailable?: boolean }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault(); setStatus("submitting"); setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || "Message could not be sent.");
      setStatus("success"); setForm(emptyForm);
    } catch (err) {
      setStatus("error"); setError(err instanceof Error ? err.message : "Please email directly.");
    }
  }

  return <section id="contact" className="section-space"><div className="page-shell">
    <div className="relative overflow-hidden rounded-[2rem] border hairline bg-[#0d141e] p-6 sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full bg-cyan-300/[.06] blur-3xl" />
      <div className="relative grid gap-12 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <span className="eyebrow">Start a conversation</span>
          <h2 className="section-title mt-5 text-balance">Have a workflow<br />worth automating?</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">I&apos;m open to relevant AI automation roles, engineering collaborations, and serious operational problems where reliability matters.</p>
          <a href={`mailto:${siteConfig.email}`} className="button-primary mt-9"><Mail className="size-4" />Contact Me<ArrowUpRight className="size-4" /></a>
          <div className="mt-8 flex gap-3">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-11 place-items-center rounded-xl border hairline text-slate-400 hover:text-white"><Github className="size-4" /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-11 place-items-center rounded-xl border hairline text-slate-400 hover:text-white"><Linkedin className="size-4" /></a>
          </div>
        </div>
        <div className="rounded-2xl border hairline bg-black/20 p-5 sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div><h3 className="text-lg font-semibold">{emailDeliveryAvailable ? "Send a direct message" : "A direct line. No middleman."}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{emailDeliveryAvailable ? "Sent securely through the configured email provider." : "Open your email app or copy the address below to start a conversation."}</p>
            </div><ArrowUpRight className="size-4 shrink-0 text-[#63d9ff]" />
          </div>
          <div className="mb-6 rounded-xl border hairline p-4 sm:p-5">
            <span className="eyebrow">Email Ronak</span>
            <a href={`mailto:${siteConfig.email}`} className="mt-3 block break-all text-base font-semibold text-white sm:text-xl">{siteConfig.email}</a>
            <button type="button" onClick={copyEmail} className="button-secondary mt-5 w-full"><Copy className="size-4" />Copy Email Address</button>
            <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-slate-400">{copyStatus === "copied" ? "Email address copied." : copyStatus === "error" ? "Copy unavailable. Select the email address above to copy it manually." : "Your email app handles sending. Nothing is submitted on this page."}</p>
          </div>
          {!emailDeliveryAvailable ? <p className="text-sm leading-7 text-slate-400">Share the workflow, the challenge, or the role you have in mind. Email is the best way to reach me.</p> : status === "success" ?
            <div className="grid min-h-[240px] place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/[.04] p-6 text-center"><div><CheckCircle2 className="mx-auto size-9 text-emerald-400" /><h4 className="mt-4 text-lg font-semibold">Message accepted for delivery</h4><p className="mt-2 text-sm text-slate-400">The email provider accepted your inquiry.</p><button onClick={() => setStatus("idle")} className="mt-5 text-sm font-semibold text-[#63d9ff]">Send another message</button></div></div> :
            <form onSubmit={submit} className="space-y-4">
              <input className="hidden" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={e => setForm({ ...form, honeypot: e.target.value })} />
              {status === "error" && <div role="alert" className="flex gap-2 rounded-xl border border-rose-400/20 bg-rose-400/[.05] p-3 text-sm text-rose-200"><AlertCircle className="size-4 shrink-0" />{error}</div>}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-400">Your Name *<input id="name" required minLength={2} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={`${field} mt-2`} /></label>
                <label className="text-sm text-slate-400">Email Address *<input id="email" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className={`${field} mt-2`} /></label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-400">Organization<input id="organization" value={form.organization} onChange={e => setForm({ ...form, organization: e.target.value })} placeholder="Optional" className={`${field} mt-2`} /></label>
                <label className="text-sm text-slate-400">Reason for Contact<select id="inquiryType" value={form.inquiryType} onChange={e => setForm({ ...form, inquiryType: e.target.value })} className={`${field} mt-2`}><option value="Role Opportunity">Full-Time / Engineering Role</option><option value="Contract Project">Automation Project / Consulting</option><option value="Technical Discussion">Architecture / Technical Inquiry</option><option value="Other">General Message</option></select></label>
              </div>
              <label className="block text-sm text-slate-400">Message *<textarea id="message" required minLength={10} rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the workflow, role, or challenge." className={`${field} mt-2 resize-y`} /></label>
              <button type="submit" disabled={status === "submitting"} className="button-primary w-full disabled:opacity-60">{status === "submitting" ? <><Loader2 className="size-4 animate-spin" />Sending…</> : <><Send className="size-4" />Send Message</>}</button>
            </form>}
        </div>
      </div>
    </div>
  </div></section>;
}
