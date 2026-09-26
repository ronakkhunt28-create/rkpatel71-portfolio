"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Role Opportunity",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message. Please email directly.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "Role Opportunity",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please use direct email.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 5 Columns: Direct Reach-out & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Direct Communication
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Let&apos;s Build Reliable Automation
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Whether you have an automation problem worth solving, want to discuss an AI automation role, or wish to review my architecture decisions, I welcome direct inquiries.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="rounded-2xl bg-surface-100/60 border border-surface-border p-4 sm:p-5 space-y-3 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-surface-200 border border-surface-border text-accent">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block">
                        Primary Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-surface-200 hover:bg-surface-50 border border-surface-border text-text-secondary hover:text-text-primary transition-colors text-xs flex items-center gap-1.5"
                    title="Copy email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] text-emerald-400 font-mono">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-mono">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn & GitHub Grid */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-surface-100/60 border border-surface-border p-4 hover:border-accent/40 transition-colors flex items-center space-x-3 group"
                >
                  <div className="p-2 rounded-xl bg-surface-200 border border-surface-border text-text-secondary group-hover:text-accent transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase block">Network</span>
                    <span className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                      LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-surface-100/60 border border-surface-border p-4 hover:border-accent/40 transition-colors flex items-center space-x-3 group"
                >
                  <div className="p-2 rounded-xl bg-surface-200 border border-surface-border text-text-secondary group-hover:text-accent transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-text-tertiary uppercase block">Source</span>
                    <span className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                      GitHub
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-200/50 border border-surface-border text-xs text-text-tertiary font-mono space-y-1">
              <div>Domain: <span className="text-accent">{siteConfig.url}</span></div>
              <div>Response Time: <span className="text-emerald-400">Within 24 Hours</span></div>
            </div>
          </div>

          {/* Right 7 Columns: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface-100/70 border border-surface-border p-6 sm:p-8 lg:p-10 shadow-card">
              <h3 className="text-xl font-bold text-text-primary mb-2">Send Direct Message</h3>
              <p className="text-xs sm:text-sm text-text-secondary mb-6">
                All inquiries go directly to my inbox. No account creation required.
              </p>

              {status === "success" ? (
                <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-text-primary">Message Sent Successfully</h4>
                  <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
                    Thank you for reaching out. I have received your message and will review it and follow up promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-mono text-accent hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Anti-spam honeypot (hidden from human view) */}
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    autoComplete="off"
                  />

                  {status === "error" && (
                    <div className="bg-rose-950/30 border border-rose-500/40 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-rose-200">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-text-secondary">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-200 border border-surface-border focus:border-accent text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-text-secondary">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sjenkins@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-200 border border-surface-border focus:border-accent text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization */}
                    <div className="space-y-1.5">
                      <label htmlFor="organization" className="text-xs font-mono text-text-secondary">
                        Company / Organization (Optional)
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Acme Corp / Startup"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-200 border border-surface-border focus:border-accent text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="inquiryType" className="text-xs font-mono text-text-secondary">
                        Reason for Contact
                      </label>
                      <select
                        id="inquiryType"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-200 border border-surface-border focus:border-accent text-sm text-text-primary focus:outline-none transition-colors"
                      >
                        <option value="Role Opportunity">Full-Time / Engineering Role</option>
                        <option value="Contract Project">Automation Project / Consulting</option>
                        <option value="Technical Discussion">Architecture / Technical Inquiry</option>
                        <option value="Other">General Message</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-text-secondary">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, role, or automation problem..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-200 border border-surface-border focus:border-accent text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-accent text-slate-950 font-bold text-sm py-3 rounded-xl hover:bg-accent-hover disabled:opacity-50 transition-colors shadow-glow"
                  >
                    {status === "submitting" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
