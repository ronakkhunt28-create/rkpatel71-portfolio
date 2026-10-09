"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(#top)"));
    sections.forEach(section => section.classList.add("scroll-pending"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return null;
}
