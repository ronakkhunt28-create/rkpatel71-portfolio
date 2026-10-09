import { CheckCircle2 } from "lucide-react";

const proof = [
  ["SupportPilot AI", "79/79", "tests passed · 85.92% coverage"],
  ["Lead Management Agent", "68/68", "tests passed · 7-factor scoring"],
  ["OpsForge AI", "32/32", "tests passed · 18/18 criteria"],
];

export function ProofStrip() {
  return <section id="proof" className="border-b hairline bg-white/[.015]" aria-label="Verified engineering evidence"><div className="page-shell grid md:grid-cols-[.7fr_1fr_1fr_1fr]"><div className="flex min-h-28 items-center border-b hairline py-6 md:border-b-0 md:border-r md:pr-7"><p className="mono text-[10px] uppercase leading-5 tracking-[.15em] text-slate-500">Static evidence<br/><span className="text-slate-300">Recorded test results</span></p></div>{proof.map(([name,value,detail]) => <div key={name} className="flex min-h-28 items-center gap-4 border-b hairline py-6 md:border-b-0 md:border-r md:px-7 last:border-r-0"><CheckCircle2 className="size-4 shrink-0 text-emerald-400"/><div><p className="mono text-2xl font-semibold tracking-tight text-white">{value}</p><p className="mt-1 text-xs font-medium text-slate-300">{name}</p><p className="mt-1 text-[11px] text-slate-600">{detail}</p></div></div>)}</div></section>;
}
