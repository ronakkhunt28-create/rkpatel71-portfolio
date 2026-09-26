"use client";

import React, { useState } from "react";
import { processSteps } from "@/data/process";
import { CheckCircle2, User, Bot, Shield, ArrowRight } from "lucide-react";

export const ProcessFlow: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 border-b border-surface-border/60 bg-surface-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Controlled Engineering Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              How I Build With AI Coding Agents
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              AI accelerates implementation; human engineering owns architecture, constraints, verification, and acceptance criteria. A 10-stage disciplined lifecycle.
            </p>
          </div>

          {/* Stepper Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {processSteps.map((step, idx) => (
              <button
                key={step.number}
                onClick={() => setSelectedStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedStep === idx
                    ? "bg-surface-100 border-accent text-text-primary shadow-glow"
                    : "bg-surface-200/50 border-surface-border text-text-tertiary hover:border-surface-borderHover hover:text-text-secondary"
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-1">
                  <span className={selectedStep === idx ? "text-accent font-bold" : ""}>
                    {step.number}
                  </span>
                  {selectedStep === idx && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                  )}
                </div>
                <div className="text-xs font-semibold truncate text-text-primary">
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Deep-Dive Showcase */}
          {processSteps[selectedStep] && (
            <div className="rounded-3xl bg-surface-100/70 border border-surface-border p-6 sm:p-8 lg:p-10 shadow-card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider">
                      <span>Stage {processSteps[selectedStep].number} of 10</span>
                      <span>&bull;</span>
                      <span>{processSteps[selectedStep].subtitle}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
                      {processSteps[selectedStep].title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                    {processSteps[selectedStep].description}
                  </p>

                  {/* Verification Artifact / Gate */}
                  <div className="bg-surface-200/70 border border-surface-border rounded-xl p-4 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block font-bold">
                        Verification Gate &amp; Artifact
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-text-primary">
                        {processSteps[selectedStep].verificationSignal}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Division of Responsibilities */}
                <div className="lg:col-span-5 space-y-4">
                  {/* Human Ownership */}
                  <div className="bg-surface-200/80 border border-accent/30 rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
                      <User className="w-4 h-4" />
                      <span>Human Engineering Ownership</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {processSteps[selectedStep].humanRole}
                    </p>
                  </div>

                  {/* AI Agent Role */}
                  <div className="bg-surface-200/50 border border-surface-border rounded-2xl p-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-subtleAccent uppercase tracking-wider">
                      <Bot className="w-4 h-4" />
                      <span>AI Agent Accelerator Role</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {processSteps[selectedStep].aiRole}
                    </p>
                  </div>

                  {/* Step Navigation Controls */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                      disabled={selectedStep === 0}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-200 border border-surface-border text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    >
                      &larr; Previous Stage
                    </button>
                    <button
                      onClick={() => setSelectedStep((prev) => Math.min(processSteps.length - 1, prev + 1))}
                      disabled={selectedStep === processSteps.length - 1}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-accent text-slate-950 font-bold hover:bg-accent-hover disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    >
                      Next Stage &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
