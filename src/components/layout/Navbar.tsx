"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, FileDown, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const ids = siteConfig.navigation.map(item => item.href.slice(1));
    const targets = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { rootMargin: "-30% 0px -60% 0px" });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b hairline bg-[#080b10]/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="page-shell flex h-[74px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 rounded-lg">
          <span className="grid size-9 place-items-center rounded-lg border hairline bg-white/[.035] mono text-xs font-bold text-[#63d9ff] transition group-hover:border-cyan-300/50">RP</span>
          <span className="hidden sm:block text-sm font-semibold tracking-tight">Ronak Patel <span className="block mono text-[9px] font-normal uppercase tracking-[.14em] text-slate-500">AI systems engineer</span></span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 rounded-full border hairline bg-white/[.025] p-1 md:flex">
          {siteConfig.navigation.map((item) => <a key={item.name} href={item.href} aria-current={active===item.href?"location":undefined} className={`rounded-full px-4 py-2 text-xs transition hover:bg-white/[.05] hover:text-white ${active===item.href?"bg-white/[.055] text-white":"text-slate-400"}`}>{item.name}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={siteConfig.resumeUrl} download className="hidden sm:inline-flex button-secondary !min-h-9 !rounded-lg !px-3 !py-2 text-xs"><FileDown className="size-3.5 text-[#63d9ff]" /> Resume</a>
          <a href="#contact" className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#63d9ff]">Let&apos;s talk <ArrowUpRight className="size-3.5" /></a>
          <button aria-label="Toggle Navigation Menu" aria-expanded={open} onClick={() => setOpen(v => !v)} className="grid size-10 place-items-center rounded-lg border hairline bg-white/[.035] md:hidden">{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
      </div>
      {open && <nav className="page-shell flex flex-col gap-1 border-t hairline py-4 md:hidden" aria-label="Mobile navigation">{siteConfig.navigation.map(item => <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between rounded-lg px-3 text-sm text-slate-300 hover:bg-white/[.04]">{item.name}<ArrowUpRight className="size-4 text-slate-600" /></a>)}<a href={siteConfig.resumeUrl} download className="button-primary mt-2"><FileDown className="size-4" /> Download resume</a></nav>}
    </header>
  );
}
