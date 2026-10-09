# Portfolio V2.1 evidence and refinement audit

Scope: targeted production-quality/content refinements, not a redesign. Review branch `refinement/portfolio-v2-1`, based on `b8e3acd85ab6e6e8a7ddd38ebcf94545f9e3bfe5`. The refinement audit below records the pre-deployment state. On 9 October 2026 the user separately authorized commit, push, safe integration into main, and deployment to the existing Vercel project. Before main changed, the annotated tag `production-backup-v21-20261009-b8e3acd` was pushed and verified to resolve to the previous production commit. No paid service, domain, billing or secret change is part of this deployment.

## Credibility decisions

| Project / claim | Evidence inspected | Publication decision |
| --- | --- | --- |
| SupportPilot: 79 tests, 85.92% coverage, 26 browser checks | Public repository at `054e15af72f8b8a8750170cf35946879341f9cde`, `BUILD_REPORT.md`, README and source | Preserve as **historical recorded results**, link the exact revision. Not freshly rerun in this portfolio audit; not a customer production deployment claim. |
| Lead Management: 68 tests, 81% coverage, six security cases | Public repository at `286bba25e97254b59f9c030a63de4cf69d060b85`, current README, testing document, scoring schema/engine | Preserve current README's recorded results rather than combining them with the older build report's 44-test/90% numbers. Correct seven factors to budget, intent, timeline, contact quality, service fit, decision-maker and other signals. Structured submitted budget is not independently verified funds. |
| OpsForge: 32 tests, 18 acceptance criteria | Public repository at `6da7b9c59ca7b87bedd617abdeffa27667c2ac88`, `FINAL_VALIDATION_REPORT.md`, `FINAL_100_PERCENT_VALIDATION.md`, tests and adapter implementation | Preserve recorded checks. Explicitly disclose SimulatedAdapter lifecycle scope and **unverified live inference**; network handshake is not successful Gemini inference. Remove sample 86/100 as an achievement, fixed runtime guarantee, regulatory-compliance and non-repudiation claims. |
| Trading Journal Pro X | `D:\TradingJournalProX\PROJECT_STATUS.md`, `PRODUCTION_READINESS_REPORT.md`, frontend package and app structure | Replace obsolete VBA description with Python/FastAPI, React/TypeScript, SQLite WAL and Windows WebView2. Real trade-close ingestion and cloud AI are pending validation. **Not production-ready.** No broker operations or underlying trading state were changed. |
| BizHunter Inventory MIS | Local RUN16.6 source under `C:\Users\ai\OneDrive\Desktop\journal`, inventory/auth/report/backup services, requirements, build/installer configuration and release directory | **Release candidate; customer production deployment not verified.** README is an older foundation description, so source—not that README alone—supports module descriptions. No unsupported test count, uptime or discrepancy-reduction claim. No public repository was supplied; remove the GitHub-profile link falsely labelled “Inspect repository”. |
| LevelPilot Pro | `D:\LevelPilot_Release\LevelPilotPro_AUDIT_SOURCE_ONLY_STAGE\README.md`, validation report, broker/store source | Describe the standalone local-model trading copilot, MT5-native sizing, SQLite WAL, recorded paper/read-only checks. Not an unrestricted algorithmic live-trading or profitability claim. No terminal, broker, trading process or data was changed. |
| Daybook | `D:\CodexBuilds\QuickLedger\app.json` identifies Daybook; React Native/Expo package and SQLite source | Describe local Android ledger implementation. Do not treat source or package configuration as fresh physical-device, store-release or all-device certification. |
| Employment / education / business impact | Existing portfolio and original resume | Preserve self-reported role, dates, company and undergraduate status. They are not independently authenticated. Remove unsubstantiated quantified improvement, 200+ product achievement and elimination/uptime absolutes. |

SQLite application audit tables are not immutable against an administrator. OpsForge's retained hash chain provides tamper evidence, not a guarantee against privileged rewriting, truncation, or regulatory certification. Regex screening and RAG do not eliminate all injection/model errors. These distinctions now appear in project copy, capability content and the corrected one-page resume.

## Recruiter conversion

The existing hero already states the specialization and roles, with work/resume actions above the fold. Preserve its composition. Make recorded proof project names actionable, show private-project/pending statuses without truncation, disclose evidence scope near case-study heroes, and fix cross-page navigation. The original resume is preserved outside Git under `../../outputs/v21-original-resume.pdf`; the new source generator is `scripts/generate-resume.py`. No actual 30-second recruiter comprehension study was conducted.

## Performance investigation and implementation

Saved Lighthouse 13.5.0 reports and Chrome 154 traces identify substantial style/layout and React hydration work. The LCP element is the **hero heading**, not a project image. Active routes do not import Framer Motion or the legacy Three.js component. Initial font transfers were approximately 81.8 kB across Inter and Roboto Mono; both are already self-hosted with next/font, so no font-family substitution was made.

Implemented:

- Server-render static hero and flagship copy; hydrate only their interactive diagram/galleries. Do not send the entire case-study data module as gallery client code.
- Keep headline transform entrance but remove opacity-zero LCP delay.
- Lazy-load below-fold screenshot galleries, remove inappropriate priority, and use layout-aware image sizes. Retain authentic assets and aspect-ratio space reservation.
- Disable speculative project-route prefetch where it competes with the first visit.
- Animate only entering sections instead of starting transitions on all offscreen sections during hydration; cancel active reveals when reduced motion is enabled.
- Isolate below-fold client sections with resolved server-rendered Suspense boundaries, without artificial loading delays/skeletons. This follows [React's selective-hydration architecture](https://react.dev/reference/react/Suspense#caveats).
- Brighten low-contrast metadata within the existing dark palette; align gallery accessible names with visible numbered labels; provide roving arrow/Home/End navigation and labelled tab panels.

Do not compare a localhost score directly with a deployed score as a proven production improvement. Equivalent before/after local series use the same URL, Lighthouse/Chrome versions, viewport, simulated 4G/4x CPU settings and three cold navigations per mode. All experimental reports are retained, including regressions. CPU calibration varies on this shared workstation. The supplied production baseline is 99 desktop / 86 mobile; a fresh post-deployment median requires deployment approval.

## Security scope

`npm audit --omit=dev` reports **zero production dependency vulnerabilities**. Full `npm audit` separately reports **nine development-tool findings: seven high, two moderate, zero critical**. The root advisories are braces stack exhaustion (`GHSA-vfj7-8cjw-p6xm`, affected through current 3.0.3; npm still publishes 3.0.3 as latest) and selector-parser quadratic parsing (`GHSA-rj75-hqrm-r3gf`, affected below 7.1.6). The remaining entries are affected-parent chains through Tailwind, glob/watch tooling and Next's ESLint plugin.

These process source patterns/selectors during development/build; they are not in the production dependency graph or contact API's request path. Do not feed untrusted patterns/CSS to this tooling. The audit's suggested Next lint downgrade/Tailwind major migration is not an appropriate automatic fix for this scoped task. No dependency migration or additional application dependency was introduced. Record these findings rather than describe the full dependency graph as vulnerability-free.

## Verification artifacts

Raw Lighthouse JSON, trace and DevTools files live in ignored `reports/`. `scripts/lighthouse-comparison.mjs <series>` verifies identical settings and prints medians. Browser screenshots live in `reports/v21-release-qa/`. Portfolio tests check assets, optional-contact failure/mocked-provider behavior, routes/canonicals, evidence scope and hydration invariants. Project repositories' own reported 79/68/32 tests were **not** rerun. No real email, AI inference or trading operation was performed.

## Final local production-build results

Three cold Lighthouse navigations per mode, same URL and verified matching settings. These are **local** measurements, not a claim that the unchanged deployed mobile score improved from 86.

| Measurement | Before | Refined |
| --- | --- | --- |
| Desktop performance scores / median | 99, 99, 100 / **99** | 100, 100, 100 / **100** |
| Mobile performance scores / median | 76, 91, 91 / **91** | 92, 93, 93 / **93** |
| Final accessibility / best practices / SEO medians, both modes | — | **100 / 100 / 100** |
| Mobile LCP median | 2,965.6 ms | 2,895.8 ms |
| Mobile total blocking time median | 180 ms | 122 ms |
| Desktop LCP / blocking time medians | 749.5 ms / 38 ms | 692.8 ms / 9 ms |
| Mobile CLS median | 0.000758 | 0.011801 |
| Desktop CLS median | 0.000426 | 0.000426 |
| JavaScript transfer median, both modes | 137,950 bytes | 129,717 bytes |
| Next.js homepage first-load JS estimate | 135 kB | 126 kB |

Mobile CLS increased, although it remains low. The shared-host CPU calibration was faster in the refined series: mobile benchmark indices before 773/1040/788, after 1310/1210.5/1393; desktop before 1026/1009.5/742.5, after 1390/1360.5/1356.5. Consequently the entire score/time change cannot be causally attributed to code. Bundle transfer reduction is independently observed. Retain raw runs and remeasure deployed medians after authorization.

Executed verification:

- ESLint, standalone TypeScript check and production build: passed. Next.js 15.5.27 retained.
- `npm test`: **113/113** checks passed: static 13, contact configuration 8, local HTTP 11, public-site 42, refinement 39. Contact-provider tests are mocked; no actual email was sent.
- Playwright desktop/mobile suites: passed; tested diagram and gallery keyboard controls, tabs, workflow, navigation, clipboard success and denied-permission fallback, hidden unavailable-provider form, missing route, and reduced motion.
- Focused motion test: entering-section animation observed, live reduced-motion change cancelled it, reduced-motion reload retained visible content.
- Link/image/viewport crawl: **99/99** checks passed across 320, 375, 768, 1024, 1440 and 1920 px. Fixed the case-study footer's missing `#top` target and reran the crawl.
- Desktop/mobile screenshots and one-page resume render manually inspected: no observed clipping, overlaps or horizontal overflow. This is visual inspection, not an exhaustive assistive-technology certification.
- Production dependency audit: **0 vulnerabilities**. Full development dependency audit: **9 findings**, as scoped above.
- Git diff whitespace check passed. No application dependency or lockfile change.
- Public Vercel GET returned HTTPS 200 and the existing V2 heading, still with the old Trading Journal VBA text: confirms **no deployment of these changes**. Canonical domain remains the free Vercel address.

**Recommendation:** ready for local review and deployment approval, not yet certified as a production V2.1 release. Production mobile 90+ and live regression verification require an authorized deployment and equivalent post-deployment measurements. Historical project tests, employment claims, real provider email delivery, cloud inference and live trading remain outside this verification scope. Work is uncommitted on `refinement/portfolio-v2-1`; main and the public site were not updated.
