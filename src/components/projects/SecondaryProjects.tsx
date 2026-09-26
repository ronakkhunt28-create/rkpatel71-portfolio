import React from "react";
import Link from "next/link";
import { secondaryProjects, projects } from "@/data/projects";
import { ArrowUpRight, CheckCircle2, ChevronRight, Package, Table, BarChart2, Shield } from "lucide-react";

export const SecondaryProjects: React.FC = () => {
  const bizHunter = projects.find((p) => p.id === "bizhunter-mis");

  return (
    <section className="py-20 md:py-24 border-b border-surface-border/60 bg-surface-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Systems &amp; Operational Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Other Practical Engineering Work
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Standalone desktop MIS software, enterprise Excel/VBA reporting systems, and execution engines engineered for real operational environments.
            </p>
          </div>

          {/* Featured Spotlight: BizHunter Desktop MIS */}
          {bizHunter && (
            <div className="rounded-3xl bg-surface-100/60 border border-surface-border p-6 sm:p-8 lg:p-10 shadow-card space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border/60 pb-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-surface-200 border border-surface-border text-xs font-mono text-accent">
                      Standalone Desktop Application
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Windows 11 Packaged EXE
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-text-primary mt-2">
                    {bizHunter.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 max-w-2xl">
                    {bizHunter.subtitle}
                  </p>
                </div>

                <Link
                  href={`/projects/${bizHunter.slug}`}
                  className="inline-flex items-center space-x-2 bg-surface-200 border border-surface-border text-text-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl hover:border-accent/40 transition-colors shrink-0"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-text-secondary">
                  <p className="leading-relaxed">{bizHunter.description}</p>
                  <p className="leading-relaxed">
                    Designed for warehouse and retail environments with zero cloud dependencies. Manages product masters, stock IN/OUT/RETURN/ADJUST operations, general ledgers, and Monthly MIS reporting with automated SQLite snapshots.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {bizHunter.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-surface-200 border border-surface-border text-[11px] font-mono text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  {bizHunter.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-surface-200/80 border border-surface-border rounded-xl p-3"
                    >
                      <div className="text-[10px] font-mono text-text-tertiary uppercase truncate">
                        {m.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold font-mono text-text-primary mt-0.5">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-text-tertiary truncate">{m.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-surface-100/50 border border-surface-border p-6 hover:border-accent/30 transition-all flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-accent bg-surface-200 border border-surface-border px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <span className="text-[11px] font-mono text-text-tertiary">
                      {p.status}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-text-primary">
                    {p.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {p.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-surface-border/60">
                    {p.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-surface-200 border border-surface-border text-[11px] font-mono text-text-tertiary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
