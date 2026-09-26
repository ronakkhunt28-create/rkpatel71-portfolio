"use client";

import React from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { ArrowRight, FileDown, Github, Linkedin, ShieldCheck, Cpu, Database, Check } from "lucide-react";

// Dynamically load the 3D scene to prevent SSR blocking and optimize initial render
const WorkflowNetwork3D = dynamic(
  () => import("@/components/three/WorkflowNetwork3D").then((mod) => mod.WorkflowNetwork3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-accent border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export const Hero: React.FC = () => {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-surface-border/60"
    >
      {/* Background Radial Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-subtleAccent/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technical Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100/90 border border-surface-border shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-text-secondary tracking-wide">
                {siteConfig.availability.badge}
              </span>
            </div>

            {/* Name & Primary Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary">
                Ronak Patel
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gradient-accent tracking-tight">
                {siteConfig.role}
              </p>
            </div>

            {/* Value Proposition Statement */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal">
              I design and build reliable AI automation systems combining Python, FastAPI, n8n, grounded RAG, and multi-provider LLMs with deterministic business logic, strict validation, and human-in-the-loop review gates.
            </p>

            {/* Core Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 bg-accent text-slate-950 font-bold text-sm px-6 py-3 rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-glow"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Ronak_Patel_AI_Automation_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-surface-100 border border-surface-border text-text-primary font-semibold text-sm px-5 py-3 rounded-xl hover:bg-surface-50 hover:border-surface-borderHover transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>

              {/* Social Link Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-100 border border-surface-border rounded-xl text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface-100 border border-surface-border rounded-xl text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Verified Proof Badges */}
            <div className="pt-6 border-t border-surface-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-surface-100/60 border border-surface-border/80 rounded-xl p-3">
                <div className="flex items-center gap-2 text-accent text-xs font-mono font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>SupportPilot AI</span>
                </div>
                <div className="text-sm font-semibold text-text-primary font-mono">79/79 Passed</div>
                <div className="text-xs text-text-tertiary">85.92% Code Coverage</div>
              </div>

              <div className="bg-surface-100/60 border border-surface-border/80 rounded-xl p-3">
                <div className="flex items-center gap-2 text-accent text-xs font-mono font-bold mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Lead Agent</span>
                </div>
                <div className="text-sm font-semibold text-text-primary font-mono">68/68 Passed</div>
                <div className="text-xs text-text-tertiary">7-Factor Math Scoring</div>
              </div>

              <div className="bg-surface-100/60 border border-surface-border/80 rounded-xl p-3">
                <div className="flex items-center gap-2 text-accent text-xs font-mono font-bold mb-1">
                  <Database className="w-4 h-4" />
                  <span>OpsForge AI</span>
                </div>
                <div className="text-sm font-semibold text-text-primary font-mono">32/32 Passed</div>
                <div className="text-xs text-text-tertiary">5-Agent Swarm + Audit</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D AI Workflow Network */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full rounded-2xl bg-surface-200/40 border border-surface-border/70 p-2 shadow-2xl relative">
              <WorkflowNetwork3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
