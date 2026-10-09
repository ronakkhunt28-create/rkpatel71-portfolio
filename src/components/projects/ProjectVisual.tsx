"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { ProjectItem } from "@/data/projects";
import { navigateTabs } from "@/lib/tab-navigation";

export function ProjectVisual({ title, screenshots }: { title: string; screenshots: ProjectItem["screenshots"] }) {
  const [index, setIndex] = useState(0);
  const galleryId = useId();
  const image = screenshots[index];
  if (!image) return null;
  return <div><div className="window-frame group"><div className="window-bar"><i className="window-dot"/><i className="window-dot"/><i className="window-dot"/><span className="ml-auto mono text-[8px] uppercase tracking-[.12em] text-slate-600">Authentic product capture</span></div><div id={galleryId} role="tabpanel" aria-label={image.alt} className="relative aspect-[16/10] overflow-hidden"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1280px) 724px, (min-width: 1024px) 58vw, calc(100vw - 20px)" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.018]"/><div className="absolute inset-0 bg-gradient-to-t from-[#080b10]/45 to-transparent opacity-0 transition group-hover:opacity-100"/></div></div><div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={`${title} screenshot gallery`}>{screenshots.map((shot,i)=><button key={shot.src} role="tab" aria-controls={galleryId} tabIndex={i===index ? 0 : -1} aria-selected={i===index} aria-label={`${String(i+1).padStart(2,"0")} · View screenshot ${i+1}: ${shot.alt}`} onClick={()=>setIndex(i)} onKeyDown={event => navigateTabs(event, i, screenshots.length, setIndex)} className={`min-h-11 shrink-0 rounded-full px-3 py-2 mono text-[9px] transition ${i===index?"bg-[#63d9ff] text-[#061117]":"border hairline text-slate-500 hover:text-white"}`}>{String(i+1).padStart(2,"0")}</button>)}</div><p className="mt-3 text-xs leading-5 text-slate-500">{image.caption}</p></div>;
}
