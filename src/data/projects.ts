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
  githubUrl?: string;
  status: string;
  validationNote: string;
  evidenceSources: Array<{ label: string; url: string }>;
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
    status: "Independent project · recorded integration validation",
    validationNote: "79 tests, 85.92% coverage and 26 browser checks are historical results in the build report, not a fresh rerun or evidence of customer production deployment.",
    evidenceSources: [{ label: "Build report · recorded results", url: "https://github.com/ronakkhunt28-create/supportpilot-ai/blob/054e15af72f8b8a8750170cf35946879341f9cde/BUILD_REPORT.md" }],
    description:
      "Customer support engineering project with deterministic SLA prioritization, multi-provider LLM failover, SQLite FTS5 lexical retrieval, human review gates, and n8n webhook automation.",
    problem:
      "Customer support organizations face mounting ticket volumes, delayed SLA resolution times, and the acute risk of generative LLM hallucinations in sensitive billing, refund, or security inquiries.",
    solution:
      "Combines FastAPI with deterministic P1–P4 SLA countdowns, local SQLite FTS5 lexical chunk retrieval, cascading LLM routing (Gemini → Groq → OpenRouter → Mock), and a human review queue for security, refund, or low-confidence tickets.",
    githubUrl: "https://github.com/ronakkhunt28-create/supportpilot-ai",
    technologies: [
      "Python 3.12",
      "FastAPI",
      "SQLite FTS5",
      "SQLModel",
      "n8n",
      "Google Gemini API",
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
        description: "Drafts responses using Gemini with fallback to Groq, OpenRouter, and explicitly identified mock mode.",
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
        description: "Records tickets, citations, and operator actions in SQLite for application-level traceability; this is not a compliance certification or tamper-proof store.",
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
            "Support documentation often relies on exact product names and error codes. SQLite FTS5 provides local lexical BM25 retrieval without requiring an external vector database.",
          impact: "Keeps the retrieval path local and supports exact-term lookups; no comparative latency or accuracy benchmark is claimed.",
        },
        {
          decision: "Hard Human-in-the-Loop Review Gates",
          rationale:
            "LLMs must never autonomously authorize financial refunds or security credential resets. By routing sensitive tickets to a NEEDS_HUMAN queue, business risks are contained.",
          impact: "Sensitive classifications enter a review queue rather than an automatic approval path; this does not guarantee regulatory compliance.",
        },
        {
          decision: "Tri-Provider LLM Failover with Circuit Breakers",
          rationale:
            "External AI APIs frequently experience rate limits (HTTP 429) or transient outages. A stateful circuit breaker trips after 2 consecutive errors and routes traffic to secondary providers.",
          impact: "Provides fallback paths for provider failures, with mock fallback explicitly identified; uninterrupted service is not guaranteed.",
        },
      ],
      securityAndGovernance: [
        "Prompt injection detection flags instruction-hijacking attempts and forces ticket into manual review",
        "SSRF protection on test endpoints blocks requests targeting internal network ranges",
        "Provider keys are supplied through environment configuration rather than application source",
        "Application audit events record state transitions and operator actions; SQLite administrators can still modify stored data",
      ],
      lessonsLearned:
        "Design for model failure from day one: deterministic rules, retrieval evidence, and human checkpoints make the workflow easier to inspect and test.",
    },
  },
  {
    id: "ai-lead-management-agent",
    slug: "ai-lead-management-agent",
    title: "AI Lead Management Agent",
    subtitle: "Multi-Channel Lead Qualification & Scoring Platform",
    category: "Featured AI Project",
    featured: true,
    status: "Independent project · recorded qualification validation",
    validationNote: "68 tests and 81% coverage are recorded in the current README. These are project validation results, not measured sales conversion. Submitted budget fields are not independent proof of a prospect’s finances.",
    evidenceSources: [{ label: "README · recorded test results", url: "https://github.com/ronakkhunt28-create/ai-lead-management-agent/blob/286bba25e97254b59f9c030a63de4cf69d060b85/README.md#verified-test-metrics" }, { label: "Scoring schema · seven factors", url: "https://github.com/ronakkhunt28-create/ai-lead-management-agent/blob/286bba25e97254b59f9c030a63de4cf69d060b85/app/schemas/scoring.py" }],
    description:
      "Automated lead qualification platform with multi-channel ingestion, multi-provider LLM failover, deterministic 7-factor mathematical scoring, prompt-injection defenses, and automated outbound actioning.",
    problem:
      "Manual lead screening is repetitive, and an LLM-generated score can be influenced by untrusted text. Qualification needs inspectable scoring rules and explicit limits on model authority.",
    solution:
      "Decouples semantic signal extraction from scoring. Multi-provider LLMs parse unstructured inquiries, but a deterministic 7-factor algorithm calculates qualification scores (0–100) with strict commercial evidence gating and prompt injection caps.",
    githubUrl: "https://github.com/ronakkhunt28-create/ai-lead-management-agent",
    technologies: [
      "Python 3.12",
      "FastAPI",
      "SQLAlchemy 2.0",
      "SQLite",
      "Google Gemini API",
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
      "Seven scoring factors: budget, intent, timeline, contact quality, service fit, decision-maker signals, and other source/sentiment/message-depth signals",
      "Structured budget gating: model-extracted budget text alone cannot unlock HIGH grade; submitted fields are not independent financial verification",
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
        description: "Cascading router extracts commercial intent signals using Gemini with Groq and OpenRouter fallback.",
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
        description: "Detected injection attempts are capped to <= 35; leads without qualifying structured budget evidence are capped to MEDIUM.",
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
        caption: "Project dashboard showing sample qualification breakdown and lead pipeline records; not measured business conversion results.",
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
        caption: "Lead inspection showing a generated email draft and application audit events.",
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
          impact: "The model does not assign the final score. Signal extraction can still be wrong, so scoring inputs remain inspectable.",
        },
        {
          decision: "Commercial Evidence Gating Rule",
          rationale:
            "A prospect can claim a large budget in free text. The system requires qualifying structured budget fields before HIGH grade; those fields are submitted claims, not independently verified funds.",
          impact: "Limits the influence of free-text budget claims on qualification. No measured sales-efficiency improvement is claimed.",
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
        "Pydantic validation and sanitization screen inputs; these controls are not a blanket guarantee against XSS or injection",
        "Application audit records capture scoring, provider attempts, and notification states, including simulated or misconfigured delivery",
      ],
      lessonsLearned:
        "Separate semantic extraction from scoring authority, and distinguish successful delivery from simulation, drafting, and provider failure.",
    },
  },
  {
    id: "opsforge-ai",
    slug: "opsforge-ai",
    title: "OpsForge AI",
    subtitle: "Approval-Gated Multi-Agent Workflow Platform",
    category: "Multi-Agent System",
    featured: true,
    status: "Independent project · simulated LLM lifecycle validated",
    validationNote: "32 tests and 18 acceptance criteria are recorded. The end-to-end flow used SimulatedAdapter; the Gemini network handshake is not a successful live inference test. Live LLM inference remains unverified.",
    evidenceSources: [{ label: "Validation report · recorded acceptance", url: "https://github.com/ronakkhunt28-create/opsforge-ai/blob/6da7b9c59ca7b87bedd617abdeffa27667c2ac88/FINAL_VALIDATION_REPORT.md" }, { label: "Integration scope · live LLM limitation", url: "https://github.com/ronakkhunt28-create/opsforge-ai/blob/6da7b9c59ca7b87bedd617abdeffa27667c2ac88/FINAL_100_PERCENT_VALIDATION.md" }],
    description:
      "Multi-agent workflow engineering project with dependency-ordered DAGs, Playwright research, pgvector retrieval, human approval gates, and a SHA-256 chained audit log. End-to-end validation used a simulated LLM; live inference remains unverified.",
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
      "Redis + Arq",
      "Playwright",
      "n8n (HMAC-SHA256)",
      "Tailwind CSS",
      "Pytest",
    ],
    metrics: [
      { label: "Verification Suite", value: "32/32", detail: "100% passing across unit, engine, and E2E" },
      { label: "Acceptance Criteria", value: "18/18", detail: "Recorded acceptance checks; simulated LLM scope" },
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
        description: "Analyst produces an ICP-fit score; Drafter composes a proposal citing chunk IDs. Screenshot scores are sample data, not business outcomes.",
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
          impact: "Recorded tests exercise approval boundaries and idempotent CRM dispatch; they do not prove absence of all unauthorized actions in production.",
        },
        {
          decision: "Tamper-Evident SHA-256 Cryptographic Audit Ledger",
          rationale:
            "OpsForge links audit entries through SHA-256 hashes. The verifier can detect changes that break the retained chain; this alone does not prevent privileged rewriting or prove completeness of the log.",
          impact: "Adds tamper evidence to application events, not regulatory certification or guaranteed non-repudiation.",
        },
        {
          decision: "Dual Execution Modes (Docker vs. Zero-Dependency Local)",
          rationale:
            "The service-backed configuration uses PostgreSQL + pgvector and Redis/Arq. A SQLite and in-memory mode supports local tests without containers.",
          impact: "Enables the recorded 32-test suite to run locally; no fixed execution-time guarantee is claimed.",
        },
      ],
      securityAndGovernance: [
        "Executable tags stripped from all web content via headless Chromium before agent reasoning",
        "Known override patterns are screened with regex sanitization; this is not comprehensive jailbreak prevention",
        "Structured agent outputs are used as application artifacts; private chain-of-thought is not part of the public audit contract",
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
    status: "Release candidate · production deployment not verified",
    validationNote: "Local source and Windows release artifacts were inspected. Release-candidate validation is not evidence of a deployed customer installation. No reproducible test-count or uptime claim is published.",
    evidenceSources: [],
    description:
      "Local-first Windows inventory application built with Python, PySide6, and SQLAlchemy/SQLite: stock movements, product records, MIS reporting, and database backups. Release candidate; production deployment has not been verified.",
    problem:
      "Small-to-medium retail and wholesale enterprises frequently suffer from inventory shrinkage, stock-out discrepancies, and tedious manual reconciliation in disconnected spreadsheets.",
    solution:
      "Built a secure, local-first PySide6 desktop MIS application with strict relational data integrity, multi-user role authentication, automated transactional ledgers, and Monthly MIS reporting.",
    technologies: [
      "Python",
      "PySide6 (Qt)",
      "SQLite",
      "SQLAlchemy 2.0",
      "openpyxl / ReportLab",
      "PyInstaller",
      "Inno Setup",
    ],
    metrics: [
      { label: "Architecture", value: "Desktop MIS", detail: "Local-first PySide6 graphical application" },
      { label: "Release Status", value: "Candidate", detail: "Production deployment not verified" },
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
        technology: "PySide6 / Password Hashing",
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
        technology: "SQLAlchemy / SQL Queries",
      },
      {
        step: "05",
        title: "Audit & Safety Backups",
        description: "Records adjustment events and creates timestamped SQLite database copies.",
        technology: "File System / Backup Engine",
      },
    ],
    screenshots: [],
    verifiedEvidence: {
      testCount: "No published reproducible test count",
      coverage: "Release-candidate packaging only",
      e2eStatus: "Customer production deployment not verified",
      automationProof: "Backup implementation inspected in local source",
    },
    deepDive: {
      engineeringDecisions: [
        {
          decision: "Local-First Desktop Architecture with SQLite",
          rationale:
            "Keeping the application and database local avoids requiring a cloud service for core inventory operations.",
          impact: "Supports offline workflows; it does not guarantee uptime, data recovery, or measured performance.",
        },
        {
          decision: "Atomic Stock Movement Transactions",
          rationale:
            "Inventory balances must never desync during mid-transaction failures. Stock IN/OUT operations run inside strict ACID transaction blocks.",
          impact: "Transaction boundaries support consistent stock updates. No measured business-wide discrepancy reduction is claimed.",
        },
      ],
      securityAndGovernance: [
        "Cryptographic password hashing preventing plain-text credential leaks",
        "Application audit events record inventory operations; they are not immutable against database administrators",
        "Database backup routines support recovery, but successful restore must be verified before relying on them",
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
      "Excel/VBA inventory workflows described in the work-history record, including TOTAL STOCK reporting, stock balances, and recurring management reports. Business impact has not been independently measured.",
    highlights: [
      "Custom VBA macros automating end-of-day stock reconciliation",
      "Interactive executive dashboards showing inventory turnover and reorder points",
      "Structured data validation to reduce manual entry mistakes",
    ],
    status: "Work-history project · impact not independently verified",
  },
  {
    title: "Trading Journal Pro X",
    category: "Financial Analytics & Automation",
    technologies: ["Python / FastAPI", "React / TypeScript", "SQLite WAL", "Windows WebView2"],
    description:
      "Python/FastAPI and React desktop journal with a Windows WebView2 shell, SQLite WAL storage, MT5 reconciliation, and analytics. Live trade-close ingestion and cloud AI validation are pending; not production-ready.",
    highlights: [
      "React/TypeScript interface backed by FastAPI and SQLAlchemy",
      "Recorded backend and reconciliation fixture checks; not a fresh portfolio-audit rerun",
      "Genuine MT5 trade-close ingestion and live cloud AI remain validation blockers",
    ],
    status: "Live validation pending · not production-ready",
  },
  {
    title: "LevelPilot Pro",
    category: "Systems & Execution Automation",
    technologies: ["Python", "MetaTrader 5 API", "Local LLM / llama.cpp", "SQLite WAL"],
    description:
      "Standalone Python trading copilot with local LLM conversation, editable trade ideas, MT5-native risk sizing, and SQLite WAL persistence. Recorded broker checks used paper/read-only modes; no live-order or profitability claim.",
    highlights: [
      "Trade-idea workflow with risk limits and explicit execution-mode boundaries",
      "Recovery logging designed to reconcile execution state after interruptions",
      "Replay and validation tooling; no profitability guarantee",
    ],
    status: "Recorded paper/read-only checks · no live-order claim",
  },
  {
    title: "Daybook Mobile Ledger",
    category: "Mobile Application",
    technologies: ["Android", "React Native", "Local SQLite", "Offline First"],
    description:
      "React Native/Expo Android ledger for local transaction entry, cashflow summaries, and SQLite-backed balances. Local project source supports offline workflows; this audit does not certify store release or every device.",
    highlights: [
      "Instant offline transaction recording with SQLite persistence",
      "Daily and monthly cashflow summary views",
      "Android packaging configuration; device and distribution validation are separate gates",
    ],
    status: "Local Android project · device validation is separate",
  },
];
