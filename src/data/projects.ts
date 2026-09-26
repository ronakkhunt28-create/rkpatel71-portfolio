export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectArchitectureStep {
  step: string;
  title: string;
  description: string;
  technology: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Featured AI Project" | "Multi-Agent System" | "Desktop & Operations System" | "Automation System";
  description: string;
  problem: string;
  solution: string;
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  technologies: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  architectureSteps: ProjectArchitectureStep[];
  screenshots: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  verifiedEvidence: {
    testCount: string;
    coverage: string;
    e2eStatus: string;
    automationProof: string;
  };
  deepDive: {
    engineeringDecisions: Array<{
      decision: string;
      rationale: string;
      impact: string;
    }>;
    securityAndGovernance: string[];
    lessonsLearned: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: "supportpilot-ai",
    slug: "supportpilot-ai",
    title: "SupportPilot AI",
    subtitle: "AI-Assisted Customer Support & Operations Platform",
    category: "Featured AI Project",
    featured: true,
    description:
      "Enterprise customer support and knowledge operations platform with deterministic SLA enforcement, multi-provider LLM failover, SQLite FTS5 lexical RAG, human-in-the-loop review gates, and n8n webhook automation.",
    problem:
      "Customer support organizations face mounting ticket volumes, delayed SLA resolution times, and the acute risk of generative LLM hallucinations in sensitive billing, refund, or security inquiries.",
    solution:
      "Combines FastAPI with deterministic P1–P4 SLA countdowns, local SQLite FTS5 lexical chunk retrieval, cascading LLM routing (Gemini 3.7 Flash → Groq → OpenRouter → Mock), and a mandatory human review queue for security, refund, or low-confidence tickets.",
    githubUrl: "https://github.com/ronakkhunt28-create/supportpilot-ai",
    technologies: [
      "Python 3.12",
      "FastAPI",
      "SQLite FTS5",
      "SQLModel",
      "n8n",
      "Google Gemini 3.7 Flash",
      "Groq API",
      "Playwright",
      "Pytest",
      "Pydantic v2",
    ],
    metrics: [
      { label: "Automated Tests", value: "79/79", detail: "100% pass rate in Pytest suite" },
      { label: "Code Coverage", value: "85.92%", detail: "Measured across all application modules" },
      { label: "Browser Checks", value: "26/26", detail: "End-to-end Playwright tests verified" },
      { label: "n8n Webhook", value: "Verified", detail: "Live 6-node intake workflow executed" },
    ],
    highlights: [
      "Deterministic SLA prioritization from P1 (15m response) to P4 with active countdown timers",
      "Fast SQLite FTS5 lexical RAG search with document chunking, overlap, and mandatory citation matching",
      "Multi-provider LLM resilience with automatic circuit breakers (closed/open/half-open)",
      "Mandatory human review gate (NEEDS_HUMAN status) for refund, account security, and low-confidence tickets",
      "Full 6-node n8n webhook automation pipeline for multi-channel intake and payload normalization",
    ],
    architectureSteps: [
      {
        step: "01",
        title: "Inbound Ingestion",
        description: "Tickets received via customer portal, REST API, or n8n webhook with Pydantic v2 validation.",
        technology: "FastAPI / n8n Webhook",
      },
      {
        step: "02",
        title: "Deterministic SLA Engine",
        description: "Categorizes issues (Security, Billing, Bug, Technical) and assigns strict SLA countdowns.",
        technology: "Python Business Logic",
      },
      {
        step: "03",
        title: "Security & Injection Screening",
        description: "Adversarial prompts attempting instruction hijacking are detected and forced to human queue.",
        technology: "Regex & Sanitizers",
      },
      {
        step: "04",
        title: "FTS5 Lexical RAG Retrieval",
        description: "Retrieves verified SOP articles with chunk overlap and BM25 ranking without external vector DBs.",
        technology: "SQLite FTS5",
      },
      {
        step: "05",
        title: "Cascading LLM Router",
        description: "Drafts response using Gemini 3.7 Flash with automatic failover to Groq and OpenRouter.",
        technology: "Gemini / Groq / OpenRouter",
      },
      {
        step: "06",
        title: "Human Review Gate",
        description: "If confidence < threshold or ticket touches refunds/security, holds draft in NEEDS_HUMAN queue.",
        technology: "Operator Review Queue",
      },
      {
        step: "07",
        title: "Persistence & Audit Log",
        description: "Saves ticket, citations, and operator actions into immutable audit trail for full compliance.",
        technology: "SQLModel / SQLite",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/supportpilot-ai/01-dashboard.png",
        alt: "SupportPilot AI Operations Dashboard",
        caption: "Operations Dashboard displaying live P1–P4 SLA countdowns, priority breakdown, and ticket queue.",
      },
      {
        src: "/images/projects/supportpilot-ai/03-ticket-details.png",
        alt: "Ticket Details & Grounded RAG View",
        caption: "Ticket inspection view showing AI classification, retrieved knowledge citations, and grounded draft.",
      },
      {
        src: "/images/projects/supportpilot-ai/04-knowledge-base.png",
        alt: "Knowledge Base Management",
        caption: "Document chunking, search indexer, and verified knowledge base article manager.",
      },
      {
        src: "/images/projects/supportpilot-ai/05-review-queue.png",
        alt: "Human Review Queue",
        caption: "Operator review queue for tickets requiring human authorization before customer dispatch.",
      },
      {
        src: "/images/projects/supportpilot-ai/06-settings.png",
        alt: "AI Telemetry & Settings",
        caption: "Live provider telemetry, circuit breaker statuses, and SLA response threshold configurations.",
      },
    ],
    verifiedEvidence: {
      testCount: "79/79 Passed",
      coverage: "85.92% Coverage",
      e2eStatus: "26/26 Playwright Checks Passed",
      automationProof: "Live n8n Webhook Execution Confirmed (HTTP 200)",
    },
    deepDive: {
      engineeringDecisions: [
        {
          decision: "SQLite FTS5 Lexical Search over External Vector DB",
          rationale:
            "Customer support documentation relies heavily on exact product names, error codes, and SKU identifiers. Lexical BM25 search via SQLite FTS5 executes deterministically in sub-millisecond time with zero cloud infrastructure overhead.",
          impact: "Eliminated vector database cloud costs and latency while boosting exact-match accuracy for SKU/policy lookups.",
        },
        {
          decision: "Hard Human-in-the-Loop Review Gates",
          rationale:
            "LLMs must never autonomously authorize financial refunds or security credential resets. By routing sensitive tickets to a NEEDS_HUMAN queue, business risks are contained.",
          impact: "100% compliance with financial and security boundaries; operators retain sole authorization power.",
        },
        {
          decision: "Tri-Provider LLM Failover with Circuit Breakers",
          rationale:
            "External AI APIs frequently experience rate limits (HTTP 429) or transient outages. A stateful circuit breaker trips after 2 consecutive errors and routes traffic to secondary providers.",
          impact: "Ensured uninterrupted customer triage during upstream Gemini or Groq API disruptions.",
        },
      ],
      securityAndGovernance: [
        "Prompt injection detection flags instruction-hijacking attempts and forces ticket into manual review",
        "SSRF protection on test endpoints blocks requests targeting internal network ranges",
        "Zero persistent hardcoded keys; full 12-factor configuration via validated environment schemas",
        "Permanent recording of all state transitions and operator actions in an immutable audit ledger",
      ],
      lessonsLearned:
        "Building reliable AI workflows requires designing for model failure from day one. Deterministic business rules, lexical grounding, and human checkpoints turn unpredictable LLMs into enterprise-grade operations tooling.",
    },
  },
  {
    id: "ai-lead-management-agent",
    slug: "ai-lead-management-agent",
    title: "AI Lead Management Agent",
    subtitle: "Enterprise Multi-Channel Lead Qualification & Scoring Platform",
    category: "Featured AI Project",
    featured: true,
    description:
      "Automated lead qualification platform with multi-channel ingestion, multi-provider LLM failover, deterministic 7-factor mathematical scoring, prompt-injection defenses, and automated outbound actioning.",
    problem:
      "Enterprise sales teams waste hundreds of hours manually screening unqualified leads, while high-value prospects sit waiting. Generative AI alone is dangerous here because hallucinated scores can misdirect high-value sales reps.",
    solution:
      "Decouples semantic signal extraction from scoring. Multi-provider LLMs parse unstructured inquiries, but a deterministic 7-factor algorithm calculates qualification scores (0–100) with strict commercial evidence gating and prompt injection caps.",
    githubUrl: "https://github.com/ronakkhunt28-create/ai-lead-management-agent",
    technologies: [
      "Python 3.12",
      "FastAPI",
      "SQLAlchemy 2.0",
      "SQLite",
      "Google Gemini 3.7 Flash",
      "Groq API",
      "OpenRouter",
      "n8n",
      "Pytest",
      "Pydantic v2",
    ],
    metrics: [
      { label: "Automated Tests", value: "68/68", detail: "100% pass rate in Pytest suite" },
      { label: "Code Coverage", value: "81%", detail: "Measured across backend services & repositories" },
      { label: "Security Tests", value: "6/6", detail: "Prompt injection mitigation verified" },
      { label: "Scoring Factors", value: "7 Factors", detail: "Deterministic 0–100 mathematical engine" },
    ],
    highlights: [
      "Deterministic 7-factor qualification engine evaluating Budget, Timeline, Intent, Company Size, Service Fit, Authority, and Sentiment",
      "Commercial-evidence gating: LLM text extraction cannot unlock HIGH grade without structured budget verification",
      "Prompt-injection defense: adversarial override directives are sanitized and permanently capped to score <= 35 (LOW)",
      "Tri-provider cascading LLM router (Gemini → Groq → OpenRouter) with circuit breakers",
      "Automated outbound workflows: instant Telegram alerts and tailored personalized email drafts for high-tier prospects",
    ],
    architectureSteps: [
      {
        step: "01",
        title: "Multi-Source Intake",
        description: "Captures leads through client web form, REST API (POST /api/leads), or n8n automation webhook.",
        technology: "FastAPI / n8n",
      },
      {
        step: "02",
        title: "Validation & Sanitization",
        description: "Pydantic v2 models sanitize fields, clean phone formats, and screen for malicious payloads.",
        technology: "Pydantic v2 / Regex",
      },
      {
        step: "03",
        title: "Multi-Provider AI Router",
        description: "Cascading router extracts commercial intent signals using Gemini 3.7 Flash with Groq failover.",
        technology: "Gemini / Groq API",
      },
      {
        step: "04",
        title: "Deterministic 7-Factor Scoring",
        description: "Mathematical formula computes 0–100 score based on 7 weighted operational attributes.",
        technology: "Python Math Engine",
      },
      {
        step: "05",
        title: "Evidence & Injection Gating",
        description: "Enforces trust capping: detected injection attempts are capped to <= 35; unverified budgets capped to MEDIUM.",
        technology: "Security Trust Gating",
      },
      {
        step: "06",
        title: "Outbound Actioning",
        description: "For HIGH tier leads, triggers real-time Telegram alert and generates personalized sales email draft.",
        technology: "Telegram / SMTP Services",
      },
      {
        step: "07",
        title: "Audit Ledger & Dashboard",
        description: "Permanently records intake, signals, score breakdown, and outbound drafts in SQLite audit logs.",
        technology: "SQLAlchemy / SQLite",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/ai-lead-management-agent/01-dashboard.png",
        alt: "Executive Lead Operations Dashboard",
        caption: "Executive Dashboard showing conversion KPIs, qualification breakdown, and lead pipeline table.",
      },
      {
        src: "/images/projects/ai-lead-management-agent/02-new-lead.png",
        alt: "Lead Intake Form",
        caption: "Responsive lead intake portal with client-side and server-side schema validation.",
      },
      {
        src: "/images/projects/ai-lead-management-agent/03-lead-analysis.png",
        alt: "AI Semantic Analysis",
        caption: "Detailed semantic extraction view showing factor-by-factor breakdown and decision-maker confidence.",
      },
      {
        src: "/images/projects/ai-lead-management-agent/04-lead-details.png",
        alt: "Lead Details & Outbound Draft",
        caption: "Lead inspection showing auto-generated personalized email draft and immutable audit events.",
      },
      {
        src: "/images/projects/ai-lead-management-agent/05-settings.png",
        alt: "Operations & Provider Matrix",
        caption: "Live AI provider health matrix, latency monitoring, and qualification threshold tuning.",
      },
      {
        src: "/images/projects/ai-lead-management-agent/06-n8n-workflow.png",
        alt: "n8n Lead Ingestion Topology",
        caption: "Verified n8n workflow diagram routing inbound webhooks into FastAPI validation endpoints.",
      },
    ],
    verifiedEvidence: {
      testCount: "68/68 Passed",
      coverage: "81% Coverage",
      e2eStatus: "6 Dedicated Injection Tests Passing",
      automationProof: "Live n8n Webhook Intake & Telegram Alert Verified",
    },
    deepDive: {
      engineeringDecisions: [
        {
          decision: "Separation of Semantic Extraction from Mathematical Scoring",
          rationale:
            "Letting an LLM output an arbitrary qualification score (e.g. 'This lead is 95/100') is brittle and vulnerable to prompt injection. The LLM only extracts structured categorical facts; deterministic Python code computes the final weighted score.",
          impact: "Guaranteed mathematical consistency and zero score hallucination.",
        },
        {
          decision: "Commercial Evidence Gating Rule",
          rationale:
            "A prospect can write 'We have millions to spend' in the text field. The system caps the score to MEDIUM unless a verified budget selection was submitted in structured form fields.",
          impact: "Prevents conversational bluffing from misallocating executive sales resources.",
        },
        {
          decision: "Zero-Credit Offline Mock Engine",
          rationale:
            "Recruiters and open-source evaluators often clone repositories without API keys. The platform defaults to AI_MODE=mock, enabling full testing and UI verification without token costs.",
          impact: "Seamless developer onboarding and reliable automated CI test runs.",
        },
      ],
      securityAndGovernance: [
        "Prompt injection regex scanner detects 'ignore instructions' patterns and caps score to <= 35",
        "Complete input sanitization via Pydantic v2 prevents XSS and SQL parameter tampering",
        "Permanent audit log records every scoring weight, provider attempt, and outbound notification event",
      ],
      lessonsLearned:
        "AI agents in commercial workflows are only as good as the guardrails around them. Combining LLM extraction with deterministic scoring math creates enterprise-grade reliability.",
    },
  },
  {
    id: "opsforge-ai",
    slug: "opsforge-ai",
    title: "OpsForge AI",
    subtitle: "Multi-Agent Autonomous Business Operations Platform",
    category: "Multi-Agent System",
    featured: true,
    description:
      "Production-grade autonomous business operations and agentic workflow platform. Decomposes natural language objectives into dependency-ordered DAGs, executes Playwright research and pgvector RAG, enforces human review gates, and logs all events in a SHA-256 cryptographic audit chain.",
    problem:
      "Enterprises want autonomous agentic workflows, but fear black-box execution, uncontrolled API side-effects, hallucinated proposals, and lack of compliance audit trails.",
    solution:
      "Engineered a 5-agent specialized swarm with a strict tool allowlist, dual state machine, human approval diff editor, pgvector semantic RAG with chunk provenance, and a tamper-evident SHA-256 chained audit store.",
    githubUrl: "https://github.com/ronakkhunt28-create/opsforge-ai",
    technologies: [
      "Python 3.12",
      "FastAPI 0.115+",
      "Next.js 14 App Router",
      "PostgreSQL 16 + pgvector",
      "Redis 7 + Arq",
      "Playwright",
      "n8n (HMAC-SHA256)",
      "Tailwind CSS",
      "Pytest",
    ],
    metrics: [
      { label: "Verification Suite", value: "32/32", detail: "100% passing across unit, engine, and E2E" },
      { label: "Acceptance Criteria", value: "18/18", detail: "All core business requirements verified" },
      { label: "Agent Personas", value: "5 Swarm Agents", detail: "Planner, Researcher, Analyst, Drafter, QA" },
      { label: "Audit Ledger", value: "SHA-256", detail: "Tamper-evident cryptographically chained logs" },
    ],
    highlights: [
      "5 specialized reasoning agents: Planner (strict DAG allowlist), Research & Grounding (Playwright), Analyst (ICP fit), Solution/Drafting (citations), and QA & Safety",
      "Dual state machine: workflow lifecycle + human approval lifecycle with automatic suspension at HIGH_RISK gates",
      "Deterministic tool sandboxing: LLMs are strictly forbidden from direct network I/O; side-effects run via idempotent Python tools",
      "Enterprise pgvector semantic RAG with strict chunk provenance (document_id, chunk_id, content_hash)",
      "Tamper-evident SHA-256 audit ledger with an automated mathematical verifier that flags database mutations",
    ],
    architectureSteps: [
      {
        step: "01",
        title: "Natural Language Ingestion",
        description: "Operator inputs high-level business objective into the Next.js Goal Decomposition Studio.",
        technology: "Next.js 14 / FastAPI",
      },
      {
        step: "02",
        title: "DAG Decomposition",
        description: "Autonomous Planner Agent compiles a dependency-ordered DAG referencing allowlisted tools.",
        technology: "Planner Agent / DAG Engine",
      },
      {
        step: "03",
        title: "Playwright Web Research",
        description: "Headless Chromium scrapes and sanitizes company operations, stripping executable tags.",
        technology: "Playwright Chromium",
      },
      {
        step: "04",
        title: "pgvector Semantic RAG",
        description: "Retrieves enterprise SOPs, service tiers, and pricing rubrics with explicit chunk provenance.",
        technology: "PostgreSQL 16 / pgvector",
      },
      {
        step: "05",
        title: "Analyst & Proposal Synthesis",
        description: "Analyst scores ICP fit (86/100); Drafter writes personalized proposal citing chunk IDs.",
        technology: "Analyst & Drafting Agents",
      },
      {
        step: "06",
        title: "QA Gate & HITL Diff Editor",
        description: "QA Agent verifies citations; workflow suspends into WAITING_APPROVAL for operator review and editing.",
        technology: "Dual State Machine / Diff UI",
      },
      {
        step: "07",
        title: "Cryptographic Sealing & Dispatch",
        description: "Operator signs off; HMAC-signed n8n webhook and CRM record fire; all actions sealed in SHA-256 chain.",
        technology: "SHA-256 Chain / HMAC Webhook",
      },
    ],
    screenshots: [
      {
        src: "/images/projects/opsforge-ai/01_operations_dashboard.png",
        alt: "Operations Command Center",
        caption: "Operations Command Center showing active agent workflows, approval backlogs, and ledger integrity.",
      },
      {
        src: "/images/projects/opsforge-ai/02_goal_decomposition_studio.png",
        alt: "Goal Decomposition Studio",
        caption: "Natural language goal studio where the Planner Agent validates constraints and compiles execution DAGs.",
      },
      {
        src: "/images/projects/opsforge-ai/03_workflow_dag_inspector.png",
        alt: "Workflow Execution DAG Inspector",
        caption: "Live workflow DAG inspector displaying step transitions, agent personas, and real-time SSE telemetry.",
      },
      {
        src: "/images/projects/opsforge-ai/04_hitl_approval_diff_editor.png",
        alt: "Human-in-the-Loop Approval & Diff Editor",
        caption: "Operator review gate where execution suspends, allowing in-place parameter edits before external dispatch.",
      },
      {
        src: "/images/projects/opsforge-ai/05_pgvector_knowledge_base.png",
        alt: "pgvector Semantic Knowledge Base",
        caption: "Enterprise knowledge catalog vectorized in PostgreSQL with chunk provenance tracking.",
      },
      {
        src: "/images/projects/opsforge-ai/06_tamper_evident_audit_chain.png",
        alt: "Tamper-Evident SHA-256 Audit Verifier",
        caption: "Cryptographic audit chain inspector verifying sequential SHA-256 continuity across all operations.",
      },
    ],
    verifiedEvidence: {
      testCount: "32/32 Passed",
      coverage: "18 Acceptance Criteria Verified",
      e2eStatus: "Full E2E Lifecycle Passing",
      automationProof: "HMAC-SHA256 Signed Webhook & CRM Idempotency Verified",
    },
    deepDive: {
      engineeringDecisions: [
        {
          decision: "Strict Non-LLM Side-Effect Sandboxing",
          rationale:
            "Allowing an LLM to make direct HTTP requests or database writes creates catastrophic vulnerability. In OpsForge, agents output structured tool requests; deterministic Python code executes them with idempotency keys.",
          impact: "Zero unauthorized API calls or duplicate financial records under network retries.",
        },
        {
          decision: "Tamper-Evident SHA-256 Cryptographic Audit Ledger",
          rationale:
            "Standard database logs can be surreptitiously updated or deleted. OpsForge chains every block via SHA-256 (curr_hash = SHA256(prev_hash + data)). Any database alteration breaks the chain.",
          impact: "Enterprise-grade non-repudiation and regulatory compliance verification.",
        },
        {
          decision: "Dual Execution Modes (Docker vs. Zero-Dependency Local)",
          rationale:
            "Production uses PostgreSQL 16 + pgvector and Redis 7, but developers and automated CI pipelines need instant zero-dependency execution. OpsForge provides a clean SQLite + in-memory vector mode for testing.",
          impact: "Full 32-test regression suite executes in under 15 seconds in CI without running containers.",
        },
      ],
      securityAndGovernance: [
        "Executable tags stripped from all web content via headless Chromium before agent reasoning",
        "System override and jailbreak patterns neutralized via strict regex sanitization to [BLOCKED_INSTRUCTION]",
        "Zero persistence of private model reasoning chains or raw prompts in public audit logs",
        "HMAC-SHA256 cryptographic signatures on all outbound n8n webhook dispatches",
      ],
      lessonsLearned:
        "Multi-agent swarms are ineffective when agents debate without structure. Success comes from strict role boundaries: one agent plans, another researches, another analyzes, another drafts, and a dedicated QA agent verifies citations before human review.",
    },
  },
  {
    id: "bizhunter-mis",
    slug: "bizhunter-mis",
    title: "BizHunter Inventory MIS",
    subtitle: "Standalone Desktop Inventory & Business Operations Management System",
    category: "Desktop & Operations System",
    featured: false,
    description:
      "Production desktop business software engineered with Python 3.12, PySide6, and SQLAlchemy/SQLite. Features complete inventory lifecycle management (IN/OUT/RETURN/ADJUST), product masters, ledger reporting, and automated database backups packaged as a standalone Windows executable.",
    problem:
      "Small-to-medium retail and wholesale enterprises frequently suffer from inventory shrinkage, stock-out discrepancies, and tedious manual reconciliation in disconnected spreadsheets.",
    solution:
      "Built a secure, local-first PySide6 desktop MIS application with strict relational data integrity, multi-user role authentication, automated transactional ledgers, and Monthly MIS reporting.",
    githubUrl: "https://github.com/ronakkhunt28-create",
    technologies: [
      "Python 3.12",
      "PySide6 (Qt)",
      "SQLite",
      "SQLAlchemy 2.0",
      "Pillow",
      "PyInstaller",
      "Inno Setup",
    ],
    metrics: [
      { label: "Architecture", value: "Desktop MIS", detail: "Local-first PySide6 graphical application" },
      { label: "Modules", value: "8 Core Modules", detail: "Auth, Inventory, Ledger, MIS, Audit, Settings" },
      { label: "Packaging", value: "Standalone EXE", detail: "Packaged via PyInstaller & Inno Setup" },
      { label: "Data Safety", value: "Auto-Backup", detail: "Timestamped SQLite safety backups" },
    ],
    highlights: [
      "Modular PySide6 desktop GUI with clean typography, responsive data tables, and modal dialogs",
      "Complete stock movement lifecycle: Stock IN, Stock OUT, Returns, and Quantity Adjustments with reason codes",
      "Relational database design enforced with SQLAlchemy 2.0 and foreign key constraints",
      "Comprehensive Monthly MIS reporting with automated inventory valuation and transaction summaries",
      "Automated timestamped SQLite backups on shutdown and critical state changes",
    ],
    architectureSteps: [
      {
        step: "01",
        title: "Role-Based Authentication",
        description: "Secure login gate protecting inventory adjustments and financial ledger views.",
        technology: "PySide6 / SHA-256",
      },
      {
        step: "02",
        title: "Product Master & Catalog",
        description: "Manages SKUs, categories, minimum stock alert levels, unit measures, and pricing.",
        technology: "SQLAlchemy 2.0",
      },
      {
        step: "03",
        title: "Stock Transaction Processor",
        description: "Atomic transactions update stock balances with validation preventing negative quantities.",
        technology: "SQLite Transactions",
      },
      {
        step: "04",
        title: "General Ledger & Monthly MIS",
        description: "Compiles chronological transaction history, stock turnover, and valuation metrics.",
        technology: "Pandas / SQL Queries",
      },
      {
        step: "05",
        title: "Audit & Safety Backups",
        description: "Logs all manual adjustments and creates automatic compressed SQLite database snapshots.",
        technology: "File System / Backup Engine",
      },
    ],
    screenshots: [],
    verifiedEvidence: {
      testCount: "8 Functional Modules",
      coverage: "Production Packaged EXE",
      e2eStatus: "Verified on Windows 11",
      automationProof: "Automated Database Backup Engine Active",
    },
    deepDive: {
      engineeringDecisions: [
        {
          decision: "Local-First Desktop Architecture with SQLite",
          rationale:
            "Commercial warehouse environments frequently face intermittent internet connectivity. A local-first desktop application guarantees 100% operational uptime without cloud subscription costs.",
          impact: "Zero downtime during network disconnects and immediate UI responsiveness.",
        },
        {
          decision: "Atomic Stock Movement Transactions",
          rationale:
            "Inventory balances must never desync during mid-transaction failures. Stock IN/OUT operations run inside strict ACID transaction blocks.",
          impact: "Eliminated inventory balance discrepancies across all product categories.",
        },
      ],
      securityAndGovernance: [
        "Cryptographic password hashing preventing plain-text credential leaks",
        "Immutable audit event recording for every stock adjustment and ledger deletion",
        "Pre-modification safety backup snapshots preventing accidental operational data loss",
      ],
      lessonsLearned:
        "Understanding real-world business operations, stock discrepancies, and ledger mechanics is essential for building practical software that actual warehouse and operations teams will adopt.",
    },
  },
];

export interface SecondaryProject {
  title: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  status: string;
}

export const secondaryProjects: SecondaryProject[] = [
  {
    title: "Excel & VBA Inventory & Operations System",
    category: "Operational Automation",
    technologies: ["Excel VBA", "Formulas", "MIS Dashboards", "Relational Worksheets"],
    description:
      "Enterprise inventory and stock-management system built for Maheshwari Silk Mills. Automates TOTAL STOCK reporting, stock balance calculation across 200+ product listings, and recurring MIS-style management reports.",
    highlights: [
      "Custom VBA macros automating end-of-day stock reconciliation",
      "Interactive executive dashboards showing inventory turnover and reorder points",
      "Structured data validation eliminating manual ledger entry errors",
    ],
    status: "Verified in Production",
  },
  {
    title: "Trading Journal Pro X",
    category: "Financial Analytics & Automation",
    technologies: ["Excel VBA", "UserForms", "Risk Analytics", "Data Export/Import"],
    description:
      "Comprehensive trading performance analytics engine and journal. Features custom VBA UserForms, automated risk-reward calculation, win-rate metrics, chronological trade logs, and automated backup routines.",
    highlights: [
      "Custom interactive UserForm for standardized trade logging",
      "Automated risk-reward and draw-down statistical calculations",
      "Automated export/import routines with timestamped backup retention",
    ],
    status: "Completed & Verified",
  },
  {
    title: "LevelPilot Pro",
    category: "Systems & Execution Automation",
    technologies: ["Python 3.12", "MetaTrader 5 API", "State Machines", "WAL Engine"],
    description:
      "High-reliability algorithmic trading execution platform featuring strict risk gates, deterministic signal state machine, Write-Ahead Logging (WAL) for disaster recovery, and genuine broker terminal validation.",
    highlights: [
      "Deterministic state machine enforcing risk limits before trade execution",
      "WAL crash-recovery engine restoring open positions after unexpected restarts",
      "Comprehensive automated test harness verifying market replay scenarios",
    ],
    status: "Verified Architecture",
  },
  {
    title: "Daybook Mobile Ledger",
    category: "Mobile Application",
    technologies: ["Android", "React Native", "Local SQLite", "Offline First"],
    description:
      "Local-first Android daily business ledger application for tracking customer credit/debit transactions, daily cashflows, and automated balance summaries with zero cloud dependencies.",
    highlights: [
      "Instant offline transaction recording with SQLite persistence",
      "Daily and monthly cashflow summary views",
      "Packaged and verified Android APK deployment",
    ],
    status: "Verified Build",
  },
];
