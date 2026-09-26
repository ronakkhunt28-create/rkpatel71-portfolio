import React from "react";
import { skillGroups } from "@/data/skills";
import { CheckCircle2, Terminal, Code2, Server, Database, ShieldCheck, Briefcase } from "lucide-react";

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Technical Stack &amp; Tooling
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Engineering Skills &amp; Stack
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Real technical competencies backed by working codebases, automated tests, and verified repositories. No arbitrary percentage bars.
            </p>
          </div>

          {/* Skill Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl bg-surface-100/50 border border-surface-border p-6 sm:p-7 space-y-5 shadow-card"
              >
                <div>
                  <h3 className="text-lg font-bold text-text-primary tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-text-tertiary font-mono mt-0.5">{group.tagline}</p>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-surface-200/60 border border-surface-border/70 rounded-xl p-3.5 space-y-1 hover:border-accent/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-text-primary">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-accent bg-surface-100 border border-surface-border px-2 py-0.5 rounded">
                          {skill.verifiedContext}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
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
