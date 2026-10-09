"use client";

import { useState } from "react";

const nodes = [
  { id: "input", label: "Input", tech: "Webhook", x: 42, y: 116, detail: "Typed intake from forms, APIs and n8n webhooks." },
  { id: "api", label: "FastAPI", tech: "Validate", x: 144, y: 58, detail: "Pydantic contracts normalize and reject unsafe payloads." },
  { id: "ai", label: "Orchestrate", tech: "LLM router", x: 267, y: 116, detail: "Providers extract meaning behind controlled interfaces." },
  { id: "rag", label: "Validate / RAG", tech: "FTS5 · pgvector", x: 390, y: 58, detail: "Retrieved evidence and deterministic rules ground decisions." },
  { id: "human", label: "Human review", tech: "Approval gate", x: 492, y: 116, detail: "Sensitive actions pause for an authorized operator." },
  { id: "output", label: "Verified output", tech: "Audit log", x: 390, y: 194, detail: "Approved results dispatch with traceable evidence." },
];

export function ArchitectureVisual() {
  const [active, setActive] = useState(nodes[2]);
  return <div className="surface relative overflow-hidden rounded-[1.35rem] p-4 sm:p-6" aria-label="Conceptual AI automation architecture">
    <div className="absolute inset-0 grid-bg opacity-35" />
    <div className="relative flex items-center justify-between border-b hairline pb-4 mono text-[9px] uppercase tracking-[.16em] text-slate-500"><span>Conceptual architecture</span><span className="text-emerald-400">Reliable by design</span></div>
    <div className="relative mt-3 hidden aspect-[2/1] sm:block">
      <svg viewBox="0 0 550 250" className="h-full w-full" role="group" aria-label="Input through validation, orchestration, review and verified output">
        <defs><linearGradient id="route" x1="0" x2="1"><stop stopColor="#63d9ff"/><stop offset="1" stopColor="#9b8cff"/></linearGradient></defs>
        <path d="M62 116 L124 67 L247 112 L370 67 L472 112 L412 188 L286 127" fill="none" stroke="rgba(130,160,190,.25)" strokeWidth="1.4"/>
        <path className="flow-path" d="M62 116 L124 67 L247 112 L370 67 L472 112 L412 188" fill="none" stroke="url(#route)" strokeWidth="1.8"/>
        {nodes.map(n => <g key={n.id} tabIndex={0} role="button" aria-label={`${n.label}: ${n.tech}`} aria-pressed={active.id === n.id} onMouseEnter={() => setActive(n)} onFocus={() => setActive(n)} onClick={() => setActive(n)} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActive(n); } }} className="cursor-pointer">
          <circle cx={n.x} cy={n.y} r={active.id === n.id ? 19 : 14} fill={active.id === n.id ? "rgba(99,217,255,.18)" : "#111925"} stroke={active.id === n.id ? "#63d9ff" : "#334155"} strokeWidth="1.4" className="transition-all"/>
          <circle cx={n.x} cy={n.y} r="4" fill={active.id === n.id ? "#63d9ff" : "#64748b"}/>
          <text x={n.x} y={n.y + 32} textAnchor="middle" fill={active.id === n.id ? "#f4f7fb" : "#8190a3"} fontSize="10" fontWeight="600">{n.label}</text>
          <text x={n.x} y={n.y + 44} textAnchor="middle" fill="#94a3b8" fontSize="9">{n.tech}</text>
        </g>)}
      </svg>
    </div>
    <div className="relative mt-4 grid grid-cols-3 gap-2 sm:hidden">{nodes.map(n => <button key={n.id} aria-pressed={active.id === n.id} onClick={() => setActive(n)} className={`min-h-14 rounded-lg border p-2 text-left mono text-[9px] ${active.id === n.id ? "border-cyan-300/60 bg-cyan-300/10 text-white" : "hairline bg-white/[.02] text-slate-400"}`}>{n.label}<span className="mt-1 block text-[8px] text-slate-600">{n.tech}</span></button>)}</div>
    <div aria-live="polite" className="relative mt-3 flex min-h-[68px] items-start gap-3 rounded-xl border hairline bg-black/25 p-3"><span className="mt-1 size-2 shrink-0 rounded-full bg-[#63d9ff] pulse-node"/><div><p className="text-xs font-semibold text-white">{active.label} <span className="mono ml-2 text-[9px] font-normal uppercase text-[#63d9ff]">{active.tech}</span></p><p className="mt-1 text-xs leading-relaxed text-slate-400">{active.detail}</p></div></div>
  </div>;
}
