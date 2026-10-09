import { ArrowDown, ArrowRight, FileDown, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ArchitectureVisual } from "./ArchitectureVisual";

// Static identity and CTAs render on the server; only the diagram hydrates.
export function Hero() {
  return <section id="top" className="relative min-h-screen overflow-hidden border-b hairline pt-28">
    <div className="pointer-events-none absolute inset-0 grid-bg opacity-35" />
    <div className="page-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_.95fr]">
      <div className="max-w-3xl">
        <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border hairline bg-white/[.025] px-3 py-2 mono text-[10px] uppercase tracking-[.12em] text-slate-400"><span className="size-1.5 rounded-full bg-emerald-400" />{siteConfig.availability.badge}</div>
        <p className="reveal reveal-delay-1 mb-4 text-lg font-medium text-[#63d9ff]">Ronak Patel · AI Automation &amp; Agentic Systems Developer</p>
        <h1 className="display-title reveal-title text-balance">Engineering reliable<br/><span className="text-slate-500">AI systems.</span></h1>
        <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">I connect LLMs, APIs, n8n, Python backends, retrieval systems, and human approval workflows to solve real operational problems—without surrendering control to the model.</p>
        <div className="reveal reveal-delay-2 mt-8 flex flex-wrap gap-3"><a href="#projects" className="button-primary">Explore my work <ArrowRight className="size-4"/></a><a href={siteConfig.resumeUrl} download className="button-secondary"><FileDown className="size-4 text-[#63d9ff]"/>Download resume</a><a href={siteConfig.github} target="_blank" rel="noreferrer" className="grid size-12 place-items-center rounded-xl border hairline text-slate-400 transition hover:border-cyan-300/50 hover:text-white" aria-label="GitHub"><Github className="size-4"/></a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="grid size-12 place-items-center rounded-xl border hairline text-slate-400 transition hover:border-cyan-300/50 hover:text-white" aria-label="LinkedIn"><Linkedin className="size-4"/></a></div>
        <a href="#proof" className="mt-12 inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[.15em] text-slate-600 transition hover:text-slate-300">Scroll to evidence <ArrowDown className="size-3.5"/></a>
      </div>
      <div className="reveal reveal-delay-2"><ArchitectureVisual /></div>
    </div>
  </section>;
}
