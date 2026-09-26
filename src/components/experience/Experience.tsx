import React from "react";
import { experiences } from "@/data/experience";
import { educationData } from "@/data/education";
import { Briefcase, GraduationCap, CheckCircle2, Compass, Calendar, MapPin } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Work History &amp; Academic Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Experience &amp; Education
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Demonstrated track record of automating real operational workflows, inventory ledgers, and reporting systems in industrial and commercial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 7 Columns: Work Experience */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider font-bold">
                <Briefcase className="w-4 h-4" />
                <span>Operational Work Experience</span>
              </div>

              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="rounded-2xl bg-surface-100/60 border border-surface-border p-6 sm:p-8 space-y-5 shadow-card"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border/60 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                      <div className="text-sm font-semibold text-accent mt-0.5">{exp.company}</div>
                    </div>
                    <div className="text-left sm:text-right text-xs font-mono text-text-tertiary space-y-0.5">
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                        <span className="text-text-secondary">({exp.type})</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block font-bold">
                      Key Responsibilities &amp; Delivered Workflows
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-surface-border/60 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-surface-200 border border-surface-border text-xs font-mono text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right 5 Columns: Education & Current Direction */}
            <div className="lg:col-span-5 space-y-6">
              {/* Education Card */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Background</span>
                </div>

                <div className="rounded-2xl bg-surface-100/60 border border-surface-border p-6 space-y-4 shadow-card">
                  <div>
                    <span className="text-xs font-mono text-accent bg-surface-200 border border-surface-border px-2 py-0.5 rounded">
                      {educationData.status}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary mt-2">
                      {educationData.degree}
                    </h3>
                    <p className="text-xs text-text-secondary mt-0.5">
                      {educationData.institution}
                    </p>
                    <p className="text-[11px] font-mono text-text-tertiary mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {educationData.location}
                    </p>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {educationData.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-surface-border/60">
                    <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block font-bold">
                      Relevant Focus Areas
                    </span>
                    <ul className="space-y-1 text-xs text-text-secondary">
                      {educationData.focusAreas.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Current Direction / Opportunities */}
              <div className="rounded-2xl bg-surface-100/40 border border-accent/20 p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider">
                  <Compass className="w-4 h-4" />
                  <span>Current Direction &amp; Focus</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Currently seeking opportunities and collaboration on high-impact projects involving:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[
                    "AI Automation Engineering",
                    "Agentic Systems Development",
                    "Python & FastAPI Backend Automation",
                    "n8n Workflow Integration",
                    "Grounded RAG Pipelines",
                    "Deterministic Decision Systems",
                  ].map((role) => (
                    <span
                      key={role}
                      className="px-2.5 py-1 rounded-lg bg-surface-200 border border-surface-border text-xs font-medium text-text-primary"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
