export interface SkillGroup {
  category: string;
  tagline: string;
  skills: Array<{
    name: string;
    description: string;
    verifiedContext: string;
    iconName?: string;
  }>;
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Agentic Systems",
    tagline: "Autonomous multi-agent architectures, RAG pipelines, and model safety",
    skills: [
      {
        name: "LLM API Integration",
        description: "Production integration with Google Gemini 3.7 Flash, Groq, and OpenRouter.",
        verifiedContext: "SupportPilot AI & AI Lead Management Agent",
      },
      {
        name: "Agent Orchestration & Swarms",
        description: "Decomposing natural language objectives into dependency-ordered DAGs with 5 specialized personas.",
        verifiedContext: "OpsForge AI platform architecture",
      },
      {
        name: "Grounded RAG Pipelines",
        description: "Deterministic retrieval using SQLite FTS5 lexical BM25 and PostgreSQL pgvector embeddings.",
        verifiedContext: "SupportPilot (FTS5) & OpsForge (pgvector)",
      },
      {
        name: "Multi-Provider LLM Routing",
        description: "Cascading router with automated circuit breakers preventing latency spikes during API downtime.",
        verifiedContext: "Gemini → Groq → OpenRouter failover",
      },
      {
        name: "Prompt-Injection Defense",
        description: "Adversarial input screening, regex sanitization, and mathematical score trust capping (<= 35).",
        verifiedContext: "6/6 dedicated security test suite passing",
      },
      {
        name: "Human-in-the-Loop Review Gates",
        description: "Operational suspension states (WAITING_APPROVAL, NEEDS_HUMAN) with in-place payload diff editors.",
        verifiedContext: "Dual state machine in OpsForge & SupportPilot",
      },
    ],
  },
  {
    category: "Automation & Integration",
    tagline: "Event-driven workflow engines and webhook orchestration",
    skills: [
      {
        name: "n8n Workflow Automation",
        description: "Multi-branch visual workflows with payload normalization, conditional triage, and HMAC signatures.",
        verifiedContext: "6-node verified intake workflow topologies",
      },
      {
        name: "REST API & Webhook Design",
        description: "Strictly typed REST endpoints, webhook listeners, and Server-Sent Events (SSE) streaming.",
        verifiedContext: "FastAPI REST controllers and intake routes",
      },
      {
        name: "Idempotent Side-Effect Sandboxing",
        description: "Tool execution isolated in deterministic Python wrappers using unique idempotency keys.",
        verifiedContext: "OpsForge CRM & n8n external dispatchers",
      },
      {
        name: "Workflow Orchestration",
        description: "Dual state machines tracking workflow lifecycle and human approval state independently.",
        verifiedContext: "SupportPilot & OpsForge dual state engines",
      },
    ],
  },
  {
    category: "Backend & Systems",
    tagline: "Modern, asynchronous Python services built with strict data contracts",
    skills: [
      {
        name: "Python 3.12",
        description: "Idiomatic asynchronous programming, type hinting, custom error hierarchies, and clean structure.",
        verifiedContext: "All primary systems built in Python 3.12",
      },
      {
        name: "FastAPI",
        description: "High-performance async web framework with dependency injection and automatic OpenAPI docs.",
        verifiedContext: "Core gateway for all AI applications",
      },
      {
        name: "Pydantic v2",
        description: "Strict request/response validation, schema normalization, and automated JSON Schema generation.",
        verifiedContext: "Field-level sanitization across all endpoints",
      },
      {
        name: "SQLAlchemy 2.0 & SQLModel",
        description: "Modern asynchronous ORM patterns, transactional atomicity, and relational schema migrations.",
        verifiedContext: "Lead Management & SupportPilot models",
      },
      {
        name: "Redis 7 & Arq",
        description: "Asynchronous task queue workers, real-time pub/sub messaging, and heartbeat telemetry.",
        verifiedContext: "OpsForge distributed execution worker pool",
      },
    ],
  },
  {
    category: "Data & Storage",
    tagline: "Relational integrity, full-text lexical search, and vector databases",
    skills: [
      {
        name: "SQLite & SQLite FTS5",
        description: "Embedded relational database with high-performance FTS5 BM25 lexical full-text search.",
        verifiedContext: "SupportPilot customer knowledge base (RAG)",
      },
      {
        name: "PostgreSQL 16 & pgvector",
        description: "Production relational data store with native vector extensions for semantic similarity search.",
        verifiedContext: "OpsForge enterprise SOP knowledge catalog",
      },
      {
        name: "Tamper-Evident SHA-256 Audit Store",
        description: "Cryptographically chained sequential ledger detecting unauthorized database mutations.",
        verifiedContext: "OpsForge mathematical audit verifier",
      },
      {
        name: "Relational Schema Design",
        description: "Foreign keys, transaction isolation, indices, and audit event tables for non-repudiation.",
        verifiedContext: "BizHunter MIS & Lead Management tables",
      },
    ],
  },
  {
    category: "Testing & Verification",
    tagline: "Defensive engineering backed by automated test suites and browser checks",
    skills: [
      {
        name: "Pytest & Pytest-Cov",
        description: "Comprehensive automated test suites with high code coverage and mock isolation.",
        verifiedContext: "79/79 (SupportPilot), 68/68 (Lead Agent), 32/32 (OpsForge)",
      },
      {
        name: "Playwright Browser E2E",
        description: "Headless Chromium browser automation for web research scraping and UI acceptance testing.",
        verifiedContext: "26/26 browser checks passed in SupportPilot",
      },
      {
        name: "HTTPX & Async Testing",
        description: "Asynchronous client testing against live and mock REST endpoints with custom fixtures.",
        verifiedContext: "FastAPI TestClient & HTTPX test suites",
      },
      {
        name: "Defensive Engineering",
        description: "Circuit breaker pattern, rate limit backoff, circuit reset probing, and fault recovery gates.",
        verifiedContext: "Live multi-provider resilience tests",
      },
    ],
  },
  {
    category: "Business & Operational Automation",
    tagline: "Practical software solving tangible inventory and reporting problems",
    skills: [
      {
        name: "Excel & VBA Automation",
        description: "Custom VBA macros, automated data extraction, interactive UserForms, and MIS reporting.",
        verifiedContext: "Maheshwari Silk Mills & Trading Journal Pro X",
      },
      {
        name: "Inventory & Stock Reconciliation",
        description: "Stock IN/OUT/RETURN/ADJUST workflows, TOTAL STOCK calculation, and reorder point alerts.",
        verifiedContext: "BizHunter Desktop MIS (PySide6) & Silk Mills",
      },
      {
        name: "MIS Operational Reporting",
        description: "Transforming raw transaction records into structured management dashboards and reports.",
        verifiedContext: "Monthly MIS generator across 200+ products",
      },
    ],
  },
  {
    category: "AI-Assisted Development Methodology",
    tagline: "Accelerated implementation under strict human architectural ownership",
    skills: [
      {
        name: "Architectural Decomposition",
        description: "Breaking complex business requirements into clear module boundaries before code generation.",
        verifiedContext: "Controlled development process",
      },
      {
        name: "Agent Orchestration with Codex/ChatGPT",
        description: "Using AI coding agents to rapidly draft scaffolding and boilerplate while verifying logic manually.",
        verifiedContext: "Proven multi-project delivery",
      },
      {
        name: "Independent Verification & Audit",
        description: "Writing independent automated test harnesses to validate that AI-generated code meets all constraints.",
        verifiedContext: "100% test pass rates across all public repos",
      },
    ],
  },
];
