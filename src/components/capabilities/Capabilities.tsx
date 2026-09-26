import React from "react";
import { capabilities } from "@/data/capabilities";
import { Bot, Workflow, Database, ShieldCheck, UserCheck, Lock, CheckCircle2 } from "lucide-react";

export const Capabilities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-5 h-5 text-accent" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-accent" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-accent" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-accent" />;
      case "Lock":
        return <Lock className="w-5 h-5 text-accent" />;
      default:
        return <Workflow className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-surface-border/60 bg-surface-300/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Core Competencies &amp; System Archetypes
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              What I Build
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Production-grade architectural capabilities engineered for business process automation, operational resilience, and non-hallucinatory AI execution.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-surface-100/70 border border-surface-border p-6 hover:border-accent/40 hover:bg-surface-100 transition-all duration-300 flex flex-col justify-between shadow-card"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-surface-200 border border-surface-border group-hover:border-accent/40 transition-colors">
                      {getIcon(item.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-tertiary font-mono">{item.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Signals */}
                  <div className="space-y-1.5 pt-2 border-t border-surface-border/60">
                    <span className="text-[11px] font-mono text-text-tertiary uppercase tracking-wider block">
                      Verification Signals
                    </span>
                    {item.keySignals.map((signal, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{signal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Badges */}
                <div className="pt-5 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-surface-200 border border-surface-border/80 text-[11px] font-mono text-text-secondary group-hover:text-text-primary transition-colors"
                    >
                      {tech}
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
