import React from "react";
import { siteConfig } from "@/data/site";
import { educationData } from "@/data/education";
import { Brain, Layers, CheckSquare, Terminal, Eye, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-surface-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Engineering Philosophy &amp; Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Deterministic Logic Meets Generative AI
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Why business process automation demands engineering discipline rather than unconstrained prompt engineering.
            </p>
          </div>

          {/* Core Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: The Narrative */}
            <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed">
              <div className="bg-surface-100/60 border border-surface-border/80 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-accent" />
                  <span>Who I Am &amp; What I Do</span>
                </h3>
                <p>
                  I am an AI Automation &amp; Agentic Systems Developer based in Surat, Gujarat, India. With an academic background in Commerce (<span className="text-text-primary font-medium">{educationData.degree}</span>), I bring a practical perspective to software engineering: software exists to solve tangible commercial bottlenecks, eliminate operational friction, and protect business data.
                </p>
                <p>
                  Rather than viewing LLMs as self-sufficient decision-makers, I treat them as non-deterministic reasoning engines that must be bounded by deterministic software architectures. High-value business decisions—such as lead qualification thresholds, SLA priority escalation, refund authorizations, and inventory adjustments—cannot be left to generative prompt drift.
                </p>
                <p>
                  Every system I build pairs LLM semantic extraction with Python backend logic, schema validation (Pydantic v2), local or vector search (SQLite FTS5, pgvector), stateful circuit breakers, and mandatory human-in-the-loop review gates.
                </p>
              </div>

              {/* The "AI Coding Agents" Philosophy Box */}
              <div className="bg-surface-100/40 border border-accent/20 rounded-2xl p-6 sm:p-8 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none" />
                <h3 className="text-lg font-bold text-text-primary flex items-center gap-2.5">
                  <Terminal className="w-5 h-5 text-accent" />
                  <span>How I Build With AI Coding Agents</span>
                </h3>
                <p className="text-sm">
                  I actively utilize state-of-the-art AI coding tools (ChatGPT, Codex) as productivity accelerators during implementation. However, there is a fundamental difference between uncontrolled &ldquo;vibe coding&rdquo; and disciplined engineering:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-surface-200/80 border border-surface-border rounded-xl p-3.5 space-y-1.5">
                    <span className="font-mono font-bold text-accent block uppercase tracking-wider">Human Ownership</span>
                    <ul className="space-y-1 text-text-tertiary">
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <CheckSquare className="w-3.5 h-3.5 text-accent shrink-0" />
                        System architecture &amp; schemas
                      </li>
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <CheckSquare className="w-3.5 h-3.5 text-accent shrink-0" />
                        Acceptance criteria &amp; constraints
                      </li>
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <CheckSquare className="w-3.5 h-3.5 text-accent shrink-0" />
                        Root-cause debugging &amp; isolation
                      </li>
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <CheckSquare className="w-3.5 h-3.5 text-accent shrink-0" />
                        Automated test suite design
                      </li>
                    </ul>
                  </div>

                  <div className="bg-surface-200/80 border border-surface-border rounded-xl p-3.5 space-y-1.5">
                    <span className="font-mono font-bold text-subtleAccent block uppercase tracking-wider">AI Acceleration</span>
                    <ul className="space-y-1 text-text-tertiary">
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <Sparkles className="w-3.5 h-3.5 text-subtleAccent shrink-0" />
                        Rapid scaffolding &amp; boilerplate
                      </li>
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <Sparkles className="w-3.5 h-3.5 text-subtleAccent shrink-0" />
                        Alternative hypothesis testing
                      </li>
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <Sparkles className="w-3.5 h-3.5 text-subtleAccent shrink-0" />
                        Parameterized test matrix generation
                      </li>
                      <li className="flex items-center gap-1.5 text-text-secondary">
                        <Sparkles className="w-3.5 h-3.5 text-subtleAccent shrink-0" />
                        OpenAPI &amp; schema translation
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-xs text-text-tertiary font-mono pt-1">
                  &ldquo;AI writes code rapidly; the engineer guarantees correctness, security, and operational resilience.&rdquo;
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Operating Principles Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-surface-100/60 border border-surface-border rounded-2xl p-6 sm:p-7 space-y-5">
                <h3 className="text-base font-bold text-text-primary uppercase tracking-wider font-mono text-xs text-accent">
                  Core Engineering Principles
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="space-y-1">
                    <div className="font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Deterministic Business Math
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      Lead qualification and SLAs are computed via deterministic mathematical formulas. Models extract signals; code calculates scores.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Hard Human-in-the-Loop Gates
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      High-impact actions (financial transactions, refunds, proposals &gt; $25k) suspend execution until an authorized human reviews and signs off.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Tri-Provider Failover &amp; Circuit Breakers
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      Workflows cascade across Gemini, Groq, and OpenRouter with automatic circuit opening on consecutive failures to eliminate latency spikes.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Tamper-Evident Audit Trails
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      Every prompt, model output, human edit, and state change is recorded with immutable timestamps and cryptographic hashes.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-semibold text-text-primary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Comprehensive Automated Testing
                    </div>
                    <p className="text-xs text-text-tertiary leading-relaxed">
                      All projects include 100% passing Pytest suites, high code coverage (&gt;80%), and headless Playwright browser E2E verifications.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-text-tertiary font-mono">
                  <span>Location</span>
                  <span className="text-text-secondary">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
