"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, ProjectItem } from "@/data/projects";
import {
  Github,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  ChevronRight,
  Workflow,
  ExternalLink,
  Code2,
} from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  const featured = projects.filter((p) => p.featured);
  const [activeScreenshot, setActiveScreenshot] = useState<{ [key: string]: number }>({
    "supportpilot-ai": 0,
    "ai-lead-management-agent": 0,
    "opsforge-ai": 0,
  });

  const handleScreenshotChange = (projectId: string, index: number) => {
    setActiveScreenshot((prev) => ({ ...prev, [projectId]: index }));
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Verified Flagship Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Featured AI &amp; Agentic Projects
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Real, public, open-source repositories backed by automated Pytest regression suites, verified coverage benchmarks, and deterministic operational guardrails.
            </p>
          </div>

          {/* Featured Projects Stack */}
          <div className="space-y-20">
            {featured.map((project, projectIdx) => {
              const currentImgIdx = activeScreenshot[project.id] || 0;
              const currentScreenshot = project.screenshots[currentImgIdx] || project.screenshots[0];

              return (
                <div
                  key={project.id}
                  className="rounded-3xl bg-surface-100/50 border border-surface-border p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Metadata & Narrative */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-accent bg-surface-200 border border-surface-border px-2.5 py-1 rounded-md">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-text-tertiary">
                            0{projectIdx + 1} / 0{featured.length}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-text-secondary">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Problem & Solution Accordion-style layout */}
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="bg-surface-200/60 border border-surface-border rounded-xl p-4 space-y-1">
                          <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block font-bold">
                            Operational Bottleneck
                          </span>
                          <p className="text-text-secondary leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="bg-surface-200/60 border border-accent/30 rounded-xl p-4 space-y-1">
                          <span className="text-[11px] font-mono text-accent uppercase tracking-wider block font-bold">
                            Engineering Solution
                          </span>
                          <p className="text-text-secondary leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Verified Evidence Badges */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {project.metrics.map((m, idx) => (
                          <div
                            key={idx}
                            className="bg-surface-200/80 border border-surface-border rounded-xl p-3"
                          >
                            <div className="text-[11px] font-mono text-text-tertiary uppercase truncate">
                              {m.label}
                            </div>
                            <div className="text-base sm:text-lg font-bold font-mono text-text-primary mt-0.5">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-text-tertiary truncate">{m.detail}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block">
                          Verified Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-surface-200 border border-surface-border text-xs font-mono text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions: Case Study & Repo */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center space-x-2 bg-accent text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-accent-hover transition-colors shadow-glow"
                        >
                          <span>Explore Technical Case Study</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-surface-200 border border-surface-border text-text-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl hover:border-accent/40 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>Inspect GitHub Repo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Screenshot Showcase & Architecture Steps */}
                    <div className="lg:col-span-6 space-y-6">
                      {/* Active Screenshot Display */}
                      {currentScreenshot && (
                        <div className="space-y-2">
                          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-surface-border bg-surface-200 shadow-2xl group">
                            <Image
                              src={currentScreenshot.src}
                              alt={currentScreenshot.alt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 50vw"
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                            <div className="absolute bottom-3 left-3 right-3 bg-surface-200/90 backdrop-blur-md border border-surface-border px-3 py-2 rounded-xl text-xs text-text-secondary">
                              <span className="font-semibold text-text-primary block truncate">
                                {currentScreenshot.alt}
                              </span>
                              <span className="text-[11px] text-text-tertiary block truncate">
                                {currentScreenshot.caption}
                              </span>
                            </div>
                          </div>

                          {/* Screenshot Selector Thumbnails */}
                          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                            {project.screenshots.map((s, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleScreenshotChange(project.id, idx)}
                                className={`relative w-16 h-11 rounded-lg overflow-hidden shrink-0 border transition-all ${
                                  currentImgIdx === idx
                                    ? "border-accent ring-2 ring-accent/30"
                                    : "border-surface-border opacity-60 hover:opacity-100"
                                }`}
                                aria-label={`View screenshot ${idx + 1}`}
                              >
                                <Image
                                  src={s.src}
                                  alt={s.alt}
                                  fill
                                  sizes="64px"
                                  className="object-cover object-top"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technical Architecture Pipeline */}
                      <div className="bg-surface-200/60 border border-surface-border rounded-2xl p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider flex items-center gap-1.5">
                            <Workflow className="w-4 h-4 text-accent" />
                            System Execution Pipeline
                          </span>
                          <span className="text-[10px] font-mono text-text-tertiary">
                            Deterministic Flow
                          </span>
                        </div>

                        <div className="space-y-2">
                          {project.architectureSteps.slice(0, 4).map((step) => (
                            <div
                              key={step.step}
                              className="flex items-start gap-3 text-xs bg-surface-100/60 border border-surface-border/60 rounded-xl p-2.5"
                            >
                              <span className="font-mono font-bold text-accent shrink-0 pt-0.5">
                                {step.step}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-text-primary flex items-center justify-between">
                                  <span>{step.title}</span>
                                  <span className="font-mono text-[10px] text-text-tertiary">
                                    {step.technology}
                                  </span>
                                </div>
                                <p className="text-text-tertiary text-[11px] leading-relaxed truncate">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-1 text-center">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1"
                          >
                            <span>Inspect full {project.architectureSteps.length}-step execution flow in Case Study</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
