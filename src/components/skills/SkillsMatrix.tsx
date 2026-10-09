"use client";

import { useState } from "react";
import { navigateTabs } from "@/lib/tab-navigation";

const groups = [
  { name: "AI & Agentic Systems", summary: "Bounded agents, model routing, and human-controlled execution.", items: ["Multi-provider LLM routing", "Specialized agent DAGs", "Prompt-injection defense", "Human approval state machines"] },
  { name: "Python & Backend", summary: "Typed services and deterministic business logic.", items: ["Python 3.12", "FastAPI", "Pydantic v2", "SQLAlchemy / SQLModel"] },
  { name: "Automation & n8n", summary: "Event-driven intake and reliable external dispatch.", items: ["n8n workflows", "REST + webhooks", "Idempotency keys", "HMAC-signed payloads"] },
  { name: "RAG & Data Systems", summary: "Retrieval with provenance, thresholds, and relational integrity.", items: ["SQLite FTS5 / BM25", "PostgreSQL + pgvector", "Chunk provenance", "SHA-256 audit chains"] },
  { name: "Frontend & Integrations", summary: "Operational interfaces for complex system state.", items: ["Next.js App Router", "React + TypeScript", "SSE telemetry", "Accessible interaction design"] },
  { name: "Testing, Safety & Reliability", summary: "Verification designed around failure, not demos.", items: ["Pytest + coverage", "Playwright E2E", "Circuit breakers", "Adversarial test matrices"] },
];

export function SkillsMatrix() {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <section id="skills" className="section-space border-b hairline bg-white/[.012]">
      <div className="page-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Capability explorer</span>
          <h2 className="section-title mt-5">A focused technical stack.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div role="tablist" aria-label="Engineering capability categories" className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {groups.map((item, index) => (
              <button
                key={item.name}
                id={`skill-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                aria-controls="skill-panel"
                onClick={() => setActive(index)}
                onKeyDown={event => navigateTabs(event, index, groups.length, setActive)}
                className={`min-h-16 rounded-xl border px-4 text-left text-xs transition ${active === index ? "border-cyan-300/50 bg-cyan-300/[.07] text-white" : "hairline text-slate-500 hover:text-slate-300"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${active}`} className="surface flex min-h-[340px] flex-col justify-between rounded-3xl p-7 sm:p-10">
            <div>
              <span className="mono text-[10px] uppercase tracking-[.15em] text-[#63d9ff]">Demonstrated capability</span>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-.04em]">{group.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{group.summary}</p>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border hairline bg-[var(--line)]">
              {group.items.map((item) => <li key={item} className="bg-[#0a0f17] p-4 text-xs text-slate-300">{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
