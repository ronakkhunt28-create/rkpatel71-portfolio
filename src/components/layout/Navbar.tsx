"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Menu, X, ArrowUpRight, FileDown, CheckCircle2 } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="/"
            className="group flex items-center space-x-3 text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-surface-100 border border-surface-border group-hover:border-accent transition-colors shadow-inner">
              <span className="font-mono font-bold text-accent tracking-wider text-sm">
                {siteConfig.monogram}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-background"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-text-primary group-hover:text-accent transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-xs text-text-tertiary hidden sm:inline-block font-mono">
                AI Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-surface-100/70 border border-surface-border/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1 text-xs lg:text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-50/50 rounded-full transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleCopyEmail}
              className="text-xs font-mono text-text-tertiary hover:text-text-secondary transition-colors px-2 py-1 flex items-center gap-1.5"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-sans">Copied!</span>
                </>
              ) : (
                <span>{siteConfig.email}</span>
              )}
            </button>

            <a
              href={siteConfig.resumeUrl}
              download="Ronak_Patel_AI_Automation_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-accent text-slate-950 font-semibold text-xs px-4 py-2 rounded-lg hover:bg-accent-hover transition-colors shadow-glow"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href={siteConfig.resumeUrl}
              download="Ronak_Patel_AI_Automation_Resume.pdf"
              className="p-2 text-accent bg-surface-100 border border-surface-border rounded-lg text-xs"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-secondary hover:text-text-primary bg-surface-100 border border-surface-border rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-background/95 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-100 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{item.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-surface-border flex flex-col space-y-2">
            <a
              href={siteConfig.resumeUrl}
              download="Ronak_Patel_AI_Automation_Resume.pdf"
              className="w-full flex items-center justify-center space-x-2 bg-accent text-slate-950 font-semibold text-sm py-2.5 rounded-lg hover:bg-accent-hover transition-colors shadow-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileDown className="w-4 h-4" />
              <span>Download Verified Resume (PDF)</span>
            </a>

            <button
              onClick={() => {
                handleCopyEmail();
                setTimeout(() => setMobileMenuOpen(false), 1200);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-surface-100 border border-surface-border text-text-secondary text-xs py-2 rounded-lg"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Email Copied to Clipboard</span>
                </>
              ) : (
                <span>Copy Email: {siteConfig.email}</span>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
