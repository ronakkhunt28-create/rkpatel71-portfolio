export interface SiteConfig {
  name: string;
  shortName: string;
  monogram: string;
  title: string;
  role: string;
  tagline: string;
  description: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  url: string;
  resumeUrl: string;
  availability: {
    status: string;
    badge: string;
    details: string;
  };
  navigation: Array<{ name: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Ronak Patel",
  shortName: "Ronak",
  monogram: "RP",
  title: "Ronak Patel | AI Automation & Agentic Systems Developer",
  role: "AI Automation & Agentic Systems Developer",
  tagline: "Building reliable AI automation and agentic systems combining LLMs with deterministic business logic, APIs, workflows, and human oversight.",
  description:
    "AI Automation & Agentic Systems Developer specializing in Python, FastAPI, n8n, RAG pipelines, deterministic qualification engines, and human-in-the-loop operational workflows.",
  location: "Surat, Gujarat, India",
  email: "khuntronak5@gmail.com",
  github: "https://github.com/ronakkhunt28-create",
  linkedin: "https://www.linkedin.com/in/ronak-patel-72039b3ba",
  url: "https://rkpatel71-portfolio.vercel.app",
  resumeUrl: "/resume/Ronak_Patel_AI_Automation_Resume.pdf",
  availability: {
    status: "Available",
    badge: "Open to AI Automation & Agentic Systems Roles",
    details: "Available for full-time, contract, and high-impact automation engineering opportunities.",
  },
  navigation: [
    { name: "Work", href: "#projects" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Method", href: "#workflow" },
    { name: "About", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
};
