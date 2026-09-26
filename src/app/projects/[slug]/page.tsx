import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Github,
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Database,
  Workflow,
  CheckCircle2,
  Lock,
  Layers,
  ChevronRight,
  FileDown,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} Case Study | ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} - ${project.subtitle}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.screenshots.length > 0 ? [{ url: project.screenshots[0].src }] : [],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs font-mono text-text-tertiary">
            <Link href="/" className="hover:text-text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-text-primary transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-accent truncate">{project.title}</span>
          </nav>

          {/* Project Hero Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-md bg-surface-100 border border-surface-border text-xs font-mono text-accent">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {project.verifiedEvidence.testCount}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-text-secondary leading-relaxed">
              {project.subtitle}
            </p>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.description}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-accent text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-accent-hover transition-colors shadow-glow"
              >
                <Github className="w-4 h-4" />
                <span>Inspect GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download="Ronak_Patel_AI_Automation_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-surface-100 border border-surface-border text-text-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-surface-50 transition-colors"
              >
                <FileDown className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Key Verified Evidence KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-surface-100/60 border border-surface-border p-5 shadow-card space-y-1"
              >
                <span className="text-xs font-mono text-text-tertiary uppercase truncate block">
                  {m.label}
                </span>
                <span className="text-2xl font-bold font-mono text-text-primary block">
                  {m.value}
                </span>
                <span className="text-xs text-text-secondary block leading-snug">{m.detail}</span>
              </div>
            ))}
          </div>

          {/* Problem vs Solution Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-surface-100/40 border border-surface-border p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 block">
                The Operational Problem
              </span>
              <h3 className="text-xl font-bold text-text-primary">
                Why Standard Solutions Fail
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-2xl bg-surface-100/40 border border-accent/30 p-6 sm:p-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent block">
                The Engineering Solution
              </span>
              <h3 className="text-xl font-bold text-text-primary">
                Deterministic Guardrails &amp; Orchestration
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots.length > 0 && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-accent block">
                  Application Tour &amp; Telemetry
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                  Operational Views &amp; UI
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((s, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl overflow-hidden border border-surface-border bg-surface-100/50 shadow-card flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] w-full bg-surface-200">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-4 bg-surface-100/90 border-t border-surface-border/60">
                      <h4 className="text-sm font-semibold text-text-primary">{s.alt}</h4>
                      <p className="text-xs text-text-tertiary mt-0.5">{s.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Pipeline Breakdown */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-accent block">
                Deterministic Execution Topology
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                System Architecture Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.architectureSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl bg-surface-100/60 border border-surface-border p-5 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-bold text-accent">
                        Stage {step.step}
                      </span>
                      <span className="text-[10px] font-mono text-text-tertiary bg-surface-200 border border-surface-border px-2 py-0.5 rounded">
                        {step.technology}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-text-primary">{step.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Dive: Engineering Decisions */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-accent block">
                Trade-offs &amp; Rationale
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                Key Engineering Decisions
              </h2>
            </div>

            <div className="space-y-4">
              {project.deepDive.engineeringDecisions.map((d, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-surface-100/50 border border-surface-border p-6 space-y-3"
                >
                  <h4 className="text-base sm:text-lg font-bold text-text-primary flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{d.decision}</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] text-text-tertiary uppercase block">
                        Rationale &amp; Problem
                      </span>
                      <p className="text-text-secondary leading-relaxed">{d.rationale}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] text-accent uppercase block">
                        Operational Impact
                      </span>
                      <p className="text-text-secondary leading-relaxed">{d.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security & Governance */}
          <div className="rounded-3xl bg-surface-100/60 border border-surface-border p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-text-primary">
                Security, Prompt Defense &amp; Governance
              </h3>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-text-secondary">
              {project.deepDive.securityAndGovernance.map((sec, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface-200/50 border border-surface-border/60 rounded-xl p-3.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{sec}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-surface-border/60">
              <span className="text-[11px] font-mono text-text-tertiary uppercase block mb-1">
                Engineering Takeaway
              </span>
              <p className="text-xs sm:text-sm text-text-primary italic">
                &ldquo;{project.deepDive.lessonsLearned}&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom Next Project Link */}
          <div className="pt-10 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xs font-mono text-text-secondary hover:text-text-primary flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio</span>
            </Link>

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center space-x-2 text-accent text-sm font-semibold hover:underline"
              >
                <span>Next Case Study: {nextProject.title}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
