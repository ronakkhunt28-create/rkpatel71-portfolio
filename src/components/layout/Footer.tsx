import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-border bg-surface-300/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surface-border/60">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-surface-100 border border-surface-border text-accent font-mono font-bold text-sm">
                {siteConfig.monogram}
              </div>
              <span className="font-bold text-base tracking-tight text-text-primary">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-md leading-relaxed">
              AI Automation &amp; Agentic Systems Developer. Designing practical, reliable workflow platforms combining LLMs with deterministic business logic, APIs, RAG, and human oversight.
            </p>
            <div className="text-xs text-text-tertiary font-mono pt-1">
              Production Target: <span className="text-accent">{siteConfig.url}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary">Navigation</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-accent transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Proof */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-text-tertiary">Verified Links</h4>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-2 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.resumeUrl}
                  download="Ronak_Patel_AI_Automation_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:underline transition-colors font-medium"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-tertiary">
          <p>© {new Date().getFullYear()} Ronak Patel. All rights reserved. Built with Next.js &amp; TypeScript.</p>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All Automated Test Suites Passing
            </span>
            <a
              href="#top"
              className="hover:text-text-primary transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
