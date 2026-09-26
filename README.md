# Ronak Patel — Personal Web Portfolio

> Production portfolio website for **Ronak Patel**, AI Automation & Agentic Systems Developer.  
> Target Production Domain: **[https://www.rkpatel71.com](https://www.rkpatel71.com)**

[![Next.js](https://img.shields.io/badge/Next.js-14.2%20App%20Router-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.169-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Verification Suite](https://img.shields.io/badge/Tests-Passing%20(13%2F13)-emerald?style=flat-square)](./scripts/test-verification.mjs)

---

## Overview

This website serves as the primary technical portfolio and case study presentation for recruiters, engineering managers, and founders evaluating Ronak Patel for AI Automation, Agentic Systems, and Backend Automation roles.

It communicates Ronak's core engineering thesis:
> *"I design and build reliable AI automation systems combining Python, FastAPI, n8n, grounded RAG, and multi-provider LLMs with deterministic business logic, strict validation, and human-in-the-loop review gates."*

---

## Key Highlights & Features

- **Interactive 3D AI Workflow Network**: Custom Three.js visualization illustrating central orchestration, orbiting functional nodes (LLM Gateway, FastAPI, n8n, RAG, Deterministic Logic, Human Gate, Tamper-evident Audit), and flowing data particles with smooth mouse interaction, intersection observer pausing, and an accessible fallback.
- **Deep Technical Case Studies**:
  - **SupportPilot AI**: Customer support operations platform with SQLite FTS5 lexical RAG, deterministic P1–P4 SLA prioritization, cascading failover, and a live 6-node n8n webhook. Verified by **79/79 Pytest tests (85.92% coverage)** and **26 Playwright browser checks**.
  - **AI Lead Management Agent**: Multi-channel lead intake and qualification platform with deterministic 7-factor scoring (0–100), commercial evidence gating, prompt-injection defense, and automated outbound alerts. Verified by **68/68 Pytest tests (81% coverage)**.
  - **OpsForge AI**: Autonomous multi-agent business operations platform featuring a 5-agent swarm (Planner, Researcher, Analyst, Drafter, QA), human approval diff editor, and a tamper-evident SHA-256 cryptographic audit chain. Verified by **32/32 automated tests** and **18 verified acceptance criteria**.
  - **BizHunter Inventory MIS**: Standalone Windows desktop MIS application built with Python 3.12, PySide6, and SQLite/SQLAlchemy.
- **Controlled Development Lifecycle**: Detailed 10-stage breakdown explaining how Ronak uses AI coding agents (ChatGPT, Codex) to accelerate implementation while retaining 100% human ownership of architecture, constraints, acceptance criteria, debugging, testing, and independent audit.
- **Verified Resume Download**: Prominent, one-click download of the latest verified PDF resume (`/resume/Ronak_Patel_AI_Automation_Resume.pdf`).
- **Interactive Contact Workflow**: Direct email copy, social channels, and an anti-spam validated contact form with pluggable API routing (`/api/contact`).
- **Comprehensive SEO & Performance**: Semantic HTML5, JSON-LD Person schema, canonical URLs, OpenGraph social sharing card, dynamic sitemap (`/sitemap.xml`), and robots directive (`/robots.txt`).

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14.2 (App Router, Server Components) |
| **Language** | TypeScript 5.6 (Strict Mode) |
| **Styling & Design System** | Tailwind CSS 3.4, PostCSS, Custom Dark Foundation |
| **3D Graphics** | Three.js 0.169 (Custom Optimized Canvas) |
| **Icons & Micro-Interactions** | Lucide React |
| **Testing & Verification** | Node.js Test Suite (`scripts/test-verification.mjs`) |
| **Deployment Target** | Vercel Serverless Edge |

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
│   │   ├── projects.ts           # Centralized verified project data models
│   │   ├── skills.ts             # Verified technical competencies
│   │   ├── capabilities.ts       # Core capability archetypes
│   │   ├── experience.ts         # Verified work history
│   │   ├── education.ts          # Verified academic background
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
- Node.js 18.x or newer (Tested on v24.18.0)
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

## Deployment to Vercel & Custom Domain (`rkpatel71.com`)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial production portfolio for Ronak Patel"
git branch -M main
git remote add origin https://github.com/ronakkhunt28-create/rkpatel71-portfolio.git
git push -u origin main
```

### 2. Connect Repository in Vercel
1. Log in to [Vercel Dashboard](https://vercel.com).
2. Click **Add New** &rarr; **Project**.
3. Import `rkpatel71-portfolio`.
4. Framework Preset: **Next.js** (automatically detected).
5. Click **Deploy**.

### 3. Connect Custom Domain (`rkpatel71.com`)
1. In Vercel Project Settings, navigate to **Domains**.
2. Add `www.rkpatel71.com` as the primary production domain.
3. Add `rkpatel71.com` configured to automatically redirect to `https://www.rkpatel71.com`.
4. Update your DNS registrar records with the values provided by Vercel:
   - **Type A**: `@` &rarr; `76.76.21.21`
   - **Type CNAME**: `www` &rarr; `cname.vercel-dns.com`
5. Once DNS propagates (typically within 5–30 minutes), Vercel automatically issues an SSL certificate for HTTPS.

---

## Environment Variables (Optional)

Create a `.env.local` file for custom form handlers if desired:
```env
NEXT_PUBLIC_SITE_URL=https://www.rkpatel71.com
# RESEND_API_KEY=re_...
# CONTACT_EMAIL_TO=khuntronak5@gmail.com
```

---

## Verified Contact Links

- **Email**: [khuntronak5@gmail.com](mailto:khuntronak5@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/ronak-patel-72039b3ba](https://www.linkedin.com/in/ronak-patel-72039b3ba)
- **GitHub**: [https://github.com/ronakkhunt28-create](https://github.com/ronakkhunt28-create)
- **Domain**: [https://www.rkpatel71.com](https://www.rkpatel71.com)
