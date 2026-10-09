"""Reproducible one-page resume. Requires the optional document-tooling ReportLab runtime.

Project counts are historical records, not tests executed by this generator.
Keep work history self-reported; do not turn project checks into production claims.
"""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

ROOT = Path(__file__).resolve().parents[1]
FONT_DIR = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("Resume", str(FONT_DIR / "arial.ttf")))
pdfmetrics.registerFont(TTFont("ResumeBold", str(FONT_DIR / "arialbd.ttf")))
pdfmetrics.registerFontFamily("Resume", normal="Resume", bold="ResumeBold")
ink, accent, muted = "#101827", "#007eae", "#475569"
body = ParagraphStyle("body", fontName="Resume", fontSize=8.9, leading=11.9, textColor=colors.HexColor(ink), spaceAfter=3)
heading = ParagraphStyle("heading", parent=body, fontName="ResumeBold", fontSize=10.1, leading=13.5, spaceBefore=6, spaceAfter=2)
title = ParagraphStyle("title", parent=body, fontName="ResumeBold", fontSize=20, leading=24, alignment=TA_CENTER)
center = ParagraphStyle("center", parent=body, alignment=TA_CENTER, spaceAfter=4)
bullet = ParagraphStyle("bullet", parent=body, leftIndent=10, firstLineIndent=-9, spaceAfter=2)
story = []

def text(value, style=body):
    story.append(Paragraph(value, style))

def section(label):
    text(label.upper(), heading)
    story.append(HRFlowable(width="100%", thickness=.55, color=colors.HexColor(accent), spaceAfter=4))

def point(value):
    text("&#8226; " + value, bullet)

def project(name, slug, stack, points):
    text(f'<b>{name}</b> &nbsp; <link href="https://github.com/ronakkhunt28-create/{slug}" color="{accent}">GitHub repository</link>')
    text(f'<font color="{muted}">{stack}</font>')
    for value in points:
        point(value)
    story.append(Spacer(1, 3))

text("RONAK PATEL", title)
text(f'<font color="{accent}"><b>AI Automation &amp; Agentic Systems Developer</b></font>', center)
text('Surat, Gujarat, India &nbsp; | &nbsp; +91 8141876971 &nbsp; | &nbsp; <link href="mailto:khuntronak5@gmail.com" color="#007eae">khuntronak5@gmail.com</link>', center)
text('<link href="https://github.com/ronakkhunt28-create" color="#007eae">github.com/ronakkhunt28-create</link> &nbsp; | &nbsp; <link href="https://rkpatel71-portfolio.vercel.app" color="#007eae">Portfolio &amp; evidence-backed case studies</link>', center)

section("Professional summary")
text("AI Automation &amp; Agentic Systems Developer building Python/FastAPI services, n8n workflows, retrieval pipelines, and approval-gated automation. Uses AI coding tools for implementation while owning architecture, deterministic business rules, provider fallback, testing, and validation scope. Independent project evidence is distinguished from customer production deployment.")

section("Technical skills")
text("<b>AI &amp; Agentic Systems:</b> LLM adapters, orchestration, RAG, provider routing, prompt-injection screening, human review gates")
text("<b>Backend &amp; Integration:</b> Python, FastAPI, Pydantic v2, SQLAlchemy/SQLModel, n8n, REST APIs, webhooks")
text("<b>Data &amp; Verification:</b> SQLite FTS5, PostgreSQL/pgvector, application audit logs, SHA-256 tamper evidence, Pytest, Playwright, HTTPX, Git")

section("Selected AI projects - historical validation evidence")
project("SupportPilot AI", "supportpilot-ai", "Python | FastAPI | SQLite FTS5 | n8n | Gemini / Groq / OpenRouter", [
    "Built ticket intake, P1-P4 SLA prioritization, citation-linked response drafting, provider fallback, and human review for sensitive or low-confidence tickets.",
    "Build report records 79/79 tests, 85.92% coverage, 26/26 browser checks, and n8n webhook validation. These are historical project checks, not a customer deployment claim.",
])
project("AI Lead Management Agent", "ai-lead-management-agent", "Python | FastAPI | SQLite | n8n | Multi-provider LLM routing", [
    "Separated semantic signal extraction from a deterministic seven-factor qualification engine. Structured budget gates limit model authority but do not independently verify a prospect's funds.",
    "Current repository README records 68/68 tests and 81% coverage. Application audit logs expose scoring, provider attempts, and honest notification states; no sales-conversion uplift is claimed.",
])
project("OpsForge AI", "opsforge-ai", "Python | FastAPI | Next.js | PostgreSQL/pgvector | Redis/Arq | Playwright", [
    "Implemented five agent roles, dependency-ordered workflows, allowlisted tools, approval/edit gates, idempotent dispatch, and a SHA-256 chained audit log.",
    "Recorded validation: 32/32 tests and 18 acceptance criteria. The end-to-end lifecycle used SimulatedAdapter; a Gemini network handshake did not establish live inference. Live LLM validation remains pending.",
])

section("Additional engineering work")
text("<b>Trading Journal Pro X:</b> Python/FastAPI and React desktop suite, Windows WebView2 shell, SQLite WAL, MT5 reconciliation and analytics. Live trade-close ingestion and cloud AI validation are pending; not production-ready.")
text("<b>BizHunter Inventory MIS:</b> Python/PySide6 inventory, stock movement, MIS reporting and backups. Release candidate; customer production deployment is not verified.")

section("Work &amp; operations experience")
text("<b>Excel Automation &amp; Operations Executive - Maheshwari Silk Mills</b>")
text(f'<font color="{muted}">Part-time | April 2026 - June 2026 | Surat, Gujarat</font>')
point("Worked on Excel/VBA inventory workflows, TOTAL STOCK summaries, recurring stock reporting, and structured product/transaction records. Business impact has not been independently measured.")

section("Education")
text("<b>Bachelor of Commerce (B.Com) - Undergraduate Student</b>")
text("J. Z. Shah Arts &amp; H. P. Desai Commerce College, Surat")
text("Focus: Business operations and self-directed software development, automation, APIs, databases and testing.")

target = ROOT / "public/resume/Ronak_Patel_AI_Automation_Resume.pdf"
SimpleDocTemplate(str(target), pagesize=A4, leftMargin=31, rightMargin=31, topMargin=26, bottomMargin=25,
                  title="Ronak Patel - AI Automation & Agentic Systems Developer", author="Ronak Patel").build(story)
print(f"Generated {target.name}; page count and rendering must be checked separately.")
