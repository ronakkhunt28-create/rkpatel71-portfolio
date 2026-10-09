import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { ProcessFlow } from "@/components/process/ProcessFlow";
import { SkillsMatrix } from "@/components/skills/SkillsMatrix";
import { SecondaryProjects } from "@/components/projects/SecondaryProjects";
import { Experience } from "@/components/experience/Experience";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/layout/Footer";
import { ProofStrip } from "@/components/proof/ProofStrip";
import { WorkflowExplorer } from "@/components/workflow/WorkflowExplorer";
import { MotionController } from "@/components/motion/MotionController";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MotionController />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <FeaturedProjects />
        <Capabilities />
        <WorkflowExplorer />
        <SkillsMatrix />
        <ProcessFlow />
        <SecondaryProjects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
