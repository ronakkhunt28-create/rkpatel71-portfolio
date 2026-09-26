import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { ProcessFlow } from "@/components/process/ProcessFlow";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { SecondaryProjects } from "@/components/projects/SecondaryProjects";
import { Experience } from "@/components/experience/Experience";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Capabilities />
        <FeaturedProjects />
        <ProcessFlow />
        <SkillsMatrix />
        <SecondaryProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
