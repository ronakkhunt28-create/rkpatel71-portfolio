export interface Capability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  keySignals: string[];
  iconName: string;
}

export const capabilities: Capability[] = [
  {
    id: "agentic-systems",
    title: "Agentic Systems & Multi-Agent Swarms",
    tagline: "Structured reasoning loops with strict execution boundaries",
    description:
      "Design autonomous multi-agent architectures that decompose natural language objectives into dependency-ordered DAGs. Implement role specialization (Planner, Analyst, Drafter, QA) with strict tool allowlists, idempotency keys, and controlled side-effects.",
    technologies: ["Python 3.12", "FastAPI", "Redis / Arq", "State Machines", "DAG Execution"],
    keySignals: [
      "Strict tool allowlisting prevents arbitrary execution",
      "Idempotency keys prevent duplicate downstream side-effects",
      "Zero persistence of private model reasoning chains",
    ],
    iconName: "Bot",
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflow Pipelines",
    tagline: "Connecting LLMs to production webhooks and business tools",
    description:
      "Automate high-volume business operations by bridging external webhooks, REST APIs, and multi-provider LLMs. Build multi-branch triage workflows that ingest unstructured data and output clean, validated actions.",
    technologies: ["n8n", "Webhooks", "FastAPI", "Pydantic v2", "HTTPX"],
    keySignals: [
      "Production-tested 6-node n8n webhook topologies",
      "Strict payload normalization and schema validation",
      "Automated fallback routes when upstream APIs fail",
    ],
    iconName: "Workflow",
  },
  {
    id: "rag-knowledge",
    title: "Grounded RAG & Retrieval Pipelines",
    tagline: "Deterministic search with explicit citation verification",
    description:
      "Eliminate generative hallucinations by pairing language models with lexical and semantic retrieval systems. Enforce strict chunk provenance, similarity thresholds, and automated citation matching before customer delivery.",
    technologies: ["SQLite FTS5", "PostgreSQL", "pgvector", "BM25 Lexical", "Chunk Overlap"],
    keySignals: [
      "Fast, zero-latency local FTS5 search with no external vector DB lock-in",
      "Mandatory citation IDs matched against retrieved knowledge",
      "Automatic fallback to human review when groundedness is low",
    ],
    iconName: "Database",
  },
  {
    id: "deterministic-scoring",
    title: "Deterministic Qualification & Business Rules",
    tagline: "Mathematical scoring models where LLMs cannot hallucinate high-value decisions",
    description:
      "Decouple AI semantic extraction from quantitative decision logic. Extract structured signals via LLMs, but score opportunities and assign SLAs using deterministic mathematical formulas and commercial evidence gating.",
    technologies: ["Python 3.12", "Pydantic v2", "Mathematical Scoring", "SLA State Machines"],
    keySignals: [
      "7-factor mathematical qualification scoring (0–100)",
      "Commercial evidence gating: budgets require structured proof",
      "Strict P1–P4 SLA countdowns with 15-minute response triggers",
    ],
    iconName: "ShieldCheck",
  },
  {
    id: "human-in-the-loop",
    title: "Human-in-the-Loop Operational Gates",
    tagline: "Automated suspension gates for sensitive and high-risk actions",
    description:
      "Build operational workflows where AI drafts but authorized operators authorize. When tickets or proposals involve financial thresholds, security classifications, or low model confidence, execution suspends until human review.",
    technologies: ["FastAPI", "Jinja2 / Next.js", "Diff Editors", "SSE Real-Time Streams"],
    keySignals: [
      "Suspension states: WAITING_APPROVAL & NEEDS_HUMAN",
      "In-place payload diff editing before downstream dispatch",
      "Full audit trail recording reviewer identity and modifications",
    ],
    iconName: "UserCheck",
  },
  {
    id: "security-auditing",
    title: "Prompt Defense & Tamper-Evident Auditing",
    tagline: "Adversarial input screening and cryptographic audit trails",
    description:
      "Harden AI systems against prompt injection, instruction overrides, and parameter tampering. Log every classification, state transition, and human approval in immutable, SHA-256 cryptographically chained audit stores.",
    technologies: ["SHA-256 Cryptographic Chaining", "Regex Sanitization", "Trust Capping", "Playwright Sandbox"],
    keySignals: [
      "Adversarial prompt injection detection caps lead scores to <= 35",
      "Continuous SHA-256 hash chains detect unauthorized DB mutations",
      "Headless browser sandboxing strips executable tags from scraped content",
    ],
    iconName: "Lock",
  },
];
