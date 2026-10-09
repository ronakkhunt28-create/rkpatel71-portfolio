# Ronak Patel — Personal Web Portfolio

> Production portfolio website for **Ronak Patel**, AI Automation & Agentic Systems Developer.  
> Target Production Domain: **[https://rkpatel71-portfolio.vercel.app](https://rkpatel71-portfolio.vercel.app)**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.27%20App%20Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Verification Suite](https://img.shields.io/badge/Tests-Passing%20(13%2F13)-emerald?style=flat-square)](./scripts/test-verification.mjs)

---

## Overview

This website serves as the primary technical portfolio and case study presentation for recruiters, engineering managers, and founders evaluating Ronak Patel for AI Automation, Agentic Systems, and Backend Automation roles.

It communicates Ronak's core engineering thesis:
> *"I design and build reliable AI automation systems combining Python, FastAPI, n8n, grounded RAG, and multi-provider LLMs with deterministic business logic, strict validation, and human-in-the-loop review gates."*

---

## Key Highlights & Features

- **Interactive SVG workflow**: Lightweight conceptual topology with keyboard/touch node selection, CSS motion, and a simplified mobile layout. The legacy Three.js component is not imported by active pages.
- **Deep Technical Case Studies**:
  - **SupportPilot AI**: Customer support operations platform with SQLite FTS5 lexical RAG, deterministic P1–P4 SLA prioritization, cascading failover, and a live 6-node n8n webhook. Historical build report records **79/79 tests (85.92% coverage)** and **26 browser checks**; no customer production-deployment claim.
  - **AI Lead Management Agent**: Multi-channel lead intake and qualification platform with deterministic 7-factor scoring (0–100), commercial evidence gating, prompt-injection defense, and automated outbound alerts. Current README records **68/68 tests (81% coverage)**. Structured budget fields are submitted evidence, not independently verified funds.
  - **OpsForge AI**: Autonomous multi-agent business operations platform featuring a 5-agent swarm (Planner, Researcher, Analyst, Drafter, QA), human approval diff editor, and a tamper-evident SHA-256 cryptographic audit chain. Historical reports record **32/32 tests** and **18 acceptance criteria**. The lifecycle used SimulatedAdapter; live LLM inference remains unverified.
  - **BizHunter Inventory MIS**: Standalone Windows desktop MIS application built with Python, PySide6, and SQLite/SQLAlchemy. Release candidate; customer production deployment is not verified.
- **Controlled Development Lifecycle**: Detailed 10-stage breakdown explaining how Ronak uses AI coding agents (ChatGPT, Codex) to accelerate implementation while owning architecture, constraints, debugging, and verification. The process describes intended gates, not a claim that every project has passed production acceptance.
- **Resume Download**: One-page resume with historical evidence scope and explicit pending validation (`/resume/Ronak_Patel_AI_Automation_Resume.pdf`).
- **Interactive Contact Workflow**: Direct email copy, social channels, and an anti-spam validated contact form with pluggable API routing (`/api/contact`).
- **Comprehensive SEO & Performance**: Semantic HTML5, JSON-LD Person schema, canonical URLs, OpenGraph social sharing card, dynamic sitemap (`/sitemap.xml`), and robots directive (`/robots.txt`).

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15.5.27 / React 19.1.1 (App Router, Server Components) |
| **Language** | TypeScript 5.6 (Strict Mode) |
| **Styling & Design System** | Tailwind CSS 3.4, PostCSS, Custom Dark Foundation |
| **Motion** | Lightweight CSS/SVG; reduced-motion support |
| **Icons & Micro-Interactions** | Lucide React |
| **Testing & Verification** | Node.js Test Suite (`scripts/test-verification.mjs`) |
| **Deployment Target** | Existing Vercel project; Node.js contact route |

---

## Project Structure

```text
rkpatel71-portfolio/
├── public/
│   ├── favicon.svg               # Geometric RP modern monogram
│   ├── favicon.ico               # Standard browser icon
│   ├── apple-touch-icon.png      # iOS / Safari icon
│   ├── og/
│   │   ├── og-image.png          # High-resolution social share banner (1200x630)
│   │   └── og-image.svg          # Master vector social card
│   ├── resume/
│   │   ├── Ronak_Patel_AI_Automation_Resume.pdf  # Verified downloadable PDF resume
│   │   └── Ronak_Patel_Resume_Preview.png       # High-res preview image
│   └── images/projects/
│       ├── supportpilot-ai/      # Verified screenshots (dashboard, RAG, settings, etc.)
│       ├── ai-lead-management-agent/ # Verified screenshots (KPIs, scoring, n8n, etc.)
│       └── opsforge-ai/          # Verified screenshots (DAG, diff editor, audit, etc.)
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout, JSON-LD Person schema, meta tags
│   │   ├── page.tsx              # Portfolio landing page
│   │   ├── not-found.tsx         # Custom 404 page
│   │   ├── sitemap.ts            # Dynamic XML sitemap generator
│   │   ├── robots.ts             # Dynamic robots.txt
│   │   ├── manifest.ts           # Web app manifest
│   │   ├── api/contact/route.ts  # Validated contact form endpoint
│   │   └── projects/[slug]/page.tsx # Detailed case study pages
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky blur navigation + mobile menu + resume CTA
│   │   │   └── Footer.tsx        # Footer with canonical links & copyright
│   │   ├── hero/
│   │   │   └── Hero.tsx          # Hero section + value proposition + CTAs
│   │   ├── three/
│   │   │   └── WorkflowNetwork3D.tsx # Three.js interactive 3D AI Workflow Network
│   │   ├── about/
│   │   │   └── About.tsx         # Commercial grounding & AI coding methodology
│   │   ├── capabilities/
│   │   │   └── Capabilities.tsx  # 6 core system capabilities
│   │   ├── projects/
│   │   │   ├── FeaturedProjects.tsx # Flagship case studies + architecture steps
│   │   │   └── SecondaryProjects.tsx # BizHunter MIS & operational tooling
│   │   ├── process/
│   │   │   └── ProcessFlow.tsx   # 10-step controlled engineering lifecycle
│   │   ├── skills/
│   │   │   └── SkillsMatrix.tsx  # Categorized technical stack with evidence citations
│   │   ├── experience/
│   │   │   └── Experience.tsx    # Maheshwari Silk Mills history & B.Com education
│   │   └── contact/
│   │       └── Contact.tsx       # Contact form + direct communication channels
│   ├── data/
│   │   ├── site.ts               # Site configuration, canonical domain, links
│   │   ├── projects.ts           # Project data, pinned sources and validation limits
│   │   ├── skills.ts             # Verified technical competencies
│   │   ├── capabilities.ts       # Core capability archetypes
│   │   ├── experience.ts         # Self-reported work history
│   │   ├── education.ts          # Self-reported academic background
│   │   └── process.ts            # 10-step engineering process
│   └── styles/
│       └── globals.css           # Custom dark theme variables & utility classes
├── scripts/
│   ├── generate-brand-assets.mjs # Vector generator for RP monogram & OG card
│   └── test-verification.mjs     # Automated portfolio verification suite
├── next.config.mjs               # Next.js production configuration
├── tailwind.config.ts            # Tailwind dark palette & animations
├── tsconfig.json                 # TypeScript strict compiler config
└── package.json                  # Dependencies & build scripts
```

---

## Local Development & Setup

### Prerequisites
- Node.js >=18.18 (Next.js minimum); production configured for Node.js 24
- npm 9.x or newer

### Installation
```bash
# Clone the repository
git clone https://github.com/ronakkhunt28-create/rkpatel71-portfolio.git
cd rkpatel71-portfolio

# Install dependencies
npm install

# Run the automated verification suite
npm test

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Build & Verification

```bash
# Execute static type-checking and Next.js production compilation
npm run build

# Start the production server locally to verify performance
npm run start
```

---

## Deployment to the existing Vercel project

Permanent public URL: **https://rkpatel71-portfolio.vercel.app**

Use the existing `ronak-patel/rkpatel71-portfolio` project connected to
`ronakkhunt28-create/rkpatel71-portfolio`. Do not create another project.
Production follows `main`; back up the previous production commit before integration.
The repository root is the application root; Next.js default install/build settings apply.
No custom domain, paid service, or environment variables are required for this launch.

Run `npm run lint`, `npx tsc --noEmit`, `npm run build`, and
`npm audit --omit=dev`. Start `npm start` before `npm test`.
Run `scripts/browser_qa.py` for browser regression checks and
`node scripts/test-public-site.mjs` for canonical, asset, and contact-mode checks.
Both accept the live base URL as their first argument.

## Optional future email provider

Contact Me opens `mailto:khuntronak5@gmail.com`; Copy Email Address writes the address
to the clipboard with accessible confirmation and a manual fallback.
The submission form is hidden when server-side provider settings are absent.
The API returns HTTP 503 instead of a false success.

Resend remains optional: configure server-only `RESEND_API_KEY`,
`CONTACT_EMAIL_FROM` (a verified non-development sender), and `CONTACT_EMAIL_TO`.
Never place actual keys in source, chat, commits, logs, or a NEXT_PUBLIC variable.
Redeploy after environment changes so the server-rendered form availability updates.
Provider acceptance is not proof of inbox delivery; test real delivery before enabling
the form for visitors. The canonical URL is centralized in `src/data/site.ts`.

---

## Verified Contact Links

- **Email**: [khuntronak5@gmail.com](mailto:khuntronak5@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/ronak-patel-72039b3ba](https://www.linkedin.com/in/ronak-patel-72039b3ba)
- **GitHub**: [https://github.com/ronakkhunt28-create](https://github.com/ronakkhunt28-create)
- **Domain**: [https://rkpatel71-portfolio.vercel.app](https://rkpatel71-portfolio.vercel.app)

## V2.1 refinement workflow

Refinements were reviewed on `refinement/portfolio-v2-1`; production integration requires explicit approval, final checks, and a recoverable previous-production reference.
Run lint, TypeScript, production build and `npm audit --omit=dev`, start the production server, then run `npm test` and `scripts/browser_qa.py`.
Use three cold-navigation Lighthouse runs per mode with the same Chrome/Lighthouse version and simulated throttling; compare medians, not the best score. Local results are not deployed production scores.

The hero and flagship copy render as Server Components. Only interactive diagrams/galleries hydrate; screenshots below the hero are lazy-loaded with layout-aware sizes. The LCP title retains transform motion without opacity-zero delay.

Public project metrics are historical records linked to immutable Git commit URLs; source-code inspection is not a fresh run of those project suites. Employment and education are self-reported and have not been independently authenticated.
The downloadable resume is generated by `scripts/generate-resume.py` with optional document tooling (ReportLab and Arial fonts on Windows), not an application dependency. Always check its single-page PDF rendering after regeneration.
