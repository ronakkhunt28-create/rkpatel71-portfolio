export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  humanRole: string;
  aiRole: string;
  verificationSignal: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Problem Definition",
    subtitle: "Identify operational bottlenecks & commercial goals",
    description:
      "Clarify the tangible business bottleneck, required SLA response times, target users, and key operational risk boundaries before writing a single line of code.",
    humanRole: "Direct stakeholder discovery, scope definition, and business constraint setting.",
    aiRole: "Synthesize domain research and analyze analogous industry architectures.",
    verificationSignal: "Approved Product Requirements & Constraint Matrix",
  },
  {
    number: "02",
    title: "Requirements & Constraints",
    subtitle: "Define hard non-negotiables & boundary conditions",
    description:
      "Establish strict operational rules: maximum allowable latency, budget limits, required fallback behaviors, and actions that strictly require human authorization.",
    humanRole: "Define failure gates, risk policies, and non-delegable decisions.",
    aiRole: "Generate edge-case checklists and error-state taxonomies.",
    verificationSignal: "Formal Acceptance Criteria Checklist",
  },
  {
    number: "03",
    title: "System Architecture",
    subtitle: "Map data flows, failure modes, & boundary interfaces",
    description:
      "Design component boundaries, database schemas, API contracts, circuit breakers, and state machines. Ensure clean decoupling between AI extraction and deterministic math.",
    humanRole: "Own system topology, data model contracts, and security boundaries.",
    aiRole: "Draft interface stubs, OpenAPI schemas, and Mermaid flow diagrams.",
    verificationSignal: "Decoupled Architecture Diagram & Schema Specifications",
  },
  {
    number: "04",
    title: "Task Decomposition",
    subtitle: "Break systems into isolated, testable modules",
    description:
      "Deconstruct the architecture into bite-sized, deterministic units: database models, service layers, external connectors, and API routers.",
    humanRole: "Sequence module delivery, define dependency order, and isolate state.",
    aiRole: "Propose granular implementation steps and stub function signatures.",
    verificationSignal: "Dependency-Ordered Implementation Plan",
  },
  {
    number: "05",
    title: "AI-Assisted Implementation",
    subtitle: "Accelerated scaffolding with strict code review",
    description:
      "Leverage AI coding agents (ChatGPT, Codex) to accelerate drafting of boilerplate, Pydantic models, SQL queries, and UI components while reviewing every line in real time.",
    humanRole: "Review every generated line, reject hallucinations, enforce type safety.",
    aiRole: "Generate rapid code scaffolding and boilerplate implementation.",
    verificationSignal: "Clean, Typed, Idiomatic Source Code",
  },
  {
    number: "06",
    title: "Systematic Debugging",
    subtitle: "Root-cause analysis of edge cases and latency leaks",
    description:
      "Inspect runtime exceptions, database lock contention, timeout cascades, and schema desynchronizations using structured logging and deterministic reproduction scripts.",
    humanRole: "Isolate root causes, analyze stack traces, and verify invariant fixes.",
    aiRole: "Generate hypothesis tests and pinpoint anomalous log lines.",
    verificationSignal: "Reproducible Regression Fixes with Zero Side-Effects",
  },
  {
    number: "07",
    title: "Automated Testing",
    subtitle: "Unit, integration, and E2E regression suites",
    description:
      "Construct comprehensive Pytest suites, mock provider adapters, schema validation tests, and headless Playwright browser checks measuring exact code coverage.",
    humanRole: "Design rigorous test scenarios, boundary conditions, and mock fixtures.",
    aiRole: "Generate parameterized test matrices and edge-case permutations.",
    verificationSignal: "Passing Pytest Suite (>80% Coverage) & Playwright Checks",
  },
  {
    number: "08",
    title: "Independent Audit & Security",
    subtitle: "Adversarial testing & prompt injection defense",
    description:
      "Subject the application to adversarial inputs, prompt injection overrides, unauthorized state transitions, and SSRF attacks to ensure defenses hold.",
    humanRole: "Perform manual security review, secret scanning, and boundary probing.",
    aiRole: "Generate adversarial injection prompts and fuzz test vectors.",
    verificationSignal: "Clean Secret Scans & Passing Prompt-Injection Test Suite",
  },
  {
    number: "09",
    title: "Final Validation",
    subtitle: "Live end-to-end integration and smoke verification",
    description:
      "Execute live webhook flows (n8n), verify multi-provider failover against simulated upstream outages, and confirm immutable audit event logging.",
    humanRole: "Authorize final operational acceptance and verify live workflows.",
    aiRole: "Monitor telemetry, latency benchmarks, and payload diffs.",
    verificationSignal: "Live Webhook Execution Log & Final Acceptance Signoff",
  },
  {
    number: "10",
    title: "Production Delivery",
    subtitle: "Deployable artifacts, clean documentation, & zero debt",
    description:
      "Package the system into production containers, standalone executables, or Vercel deployments accompanied by clean READMEs, environment templates, and operational runbooks.",
    humanRole: "Manage repository release hygiene, CI/CD pipeline, and deployment.",
    aiRole: "Draft deployment runbooks, API documentation, and changelogs.",
    verificationSignal: "Production Deployment Ready with Zero Unresolved Issues",
  },
];
