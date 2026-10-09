import React, { Suspense } from "react";
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
        {/* Keep server-rendered content intact while isolating hydration work. */}
        <Suspense fallback={null}><Capabilities /></Suspense>
        <Suspense fallback={null}><WorkflowExplorer /></Suspense>
        <Suspense fallback={null}><SkillsMatrix /></Suspense>
        <Suspense fallback={null}><ProcessFlow /></Suspense>
        <SecondaryProjects />
        <Experience />
        <Suspense fallback={null}><Contact emailDeliveryAvailable={Boolean(
          process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL_FROM &&
          !/@resend\.dev\b/i.test(process.env.CONTACT_EMAIL_FROM)
        )} /></Suspense>
      </main>
      <Footer />
    </>
  );
}
