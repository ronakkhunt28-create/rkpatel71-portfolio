"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(#top)"));
    const animations = new Set<Animation>();
    const stopAnimations = () => { if (reducedMotion.matches) animations.forEach(animation => animation.cancel()); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate only entering content. Mutating every offscreen section at
          // hydration starts opacity transitions and defeats rendering containment.
          if (!reducedMotion.matches) {
            const animation = entry.target.animate([
              { opacity: 0, transform: "translateY(28px)" },
              { opacity: 1, transform: "none" },
            ], { duration: 700, easing: "cubic-bezier(.2,.8,.2,1)" });
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
            animation.oncancel = () => animations.delete(animation);
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    sections.forEach(section => observer.observe(section));
    reducedMotion.addEventListener("change", stopAnimations);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", stopAnimations);
      animations.forEach(animation => animation.cancel());
    };
  }, []);
  return null;
}
