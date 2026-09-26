import fs from "fs";
import path from "path";

const publicDir = path.resolve("./public");
const ogDir = path.join(publicDir, "og");

if (!fs.existsSync(ogDir)) {
  fs.mkdirSync(ogDir, { recursive: true });
}

// 1. Sleek geometric RP SVG Monogram
const svgMonogram = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#12151e"/>
      <stop offset="100%" stop-color="#090a0f"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  
  <!-- Outer Dark Container -->
  <rect width="128" height="128" rx="28" fill="url(#bg)" stroke="#1f2433" stroke-width="2"/>
  <rect x="4" y="4" width="120" height="120" rx="24" fill="none" stroke="url(#glow)" stroke-width="1.5"/>

  <!-- Geometric "R" -->
  <path d="M 32 34 L 56 34 C 67 34 74 40 74 49 C 74 57 68 62 58 63 L 75 94 L 62 94 L 46 64 L 44 64 L 44 94 L 32 94 Z M 44 45 L 44 54 L 54 54 C 59 54 62 52 62 49 C 62 46 59 45 54 45 Z" fill="url(#accent)"/>

  <!-- Geometric "P" Accent Overlay -->
  <path d="M 68 34 L 92 34 C 103 34 110 41 110 51 C 110 61 103 68 92 68 L 80 68 L 80 94 L 68 94 Z M 80 44 L 80 58 L 91 58 C 95 58 98 56 98 51 C 98 46 95 44 91 44 Z" fill="#f8fafc" fill-opacity="0.9"/>
  
  <!-- Modern Tech Circuit Dot -->
  <circle cx="96" cy="94" r="4" fill="#38bdf8"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgMonogram);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), svgMonogram);
fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), svgMonogram);
fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), svgMonogram);

// 2. High-Resolution SVG for Open Graph Social Sharing (1200 x 630)
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0d13"/>
      <stop offset="50%" stop-color="#090a0f"/>
      <stop offset="100%" stop-color="#06070a"/>
    </linearGradient>
    <linearGradient id="ogCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>
    <linearGradient id="ogGrid" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e2433" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#090a0f" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="ogGlow" cx="20%" cy="30%" r="50%">
      <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#090a0f" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#ogBg)"/>
  <rect width="1200" height="630" fill="url(#ogGlow)"/>

  <!-- Delicate Technical Grid -->
  <g stroke="#1a2030" stroke-width="1" opacity="0.6">
    <line x1="80" y1="0" x2="80" y2="630"/>
    <line x1="1120" y1="0" x2="1120" y2="630"/>
    <line x1="0" y1="80" x2="1200" y2="80"/>
    <line x1="0" y1="550" x2="1200" y2="550"/>
  </g>

  <!-- RP Monogram Badge -->
  <g transform="translate(100, 120)">
    <rect width="72" height="72" rx="16" fill="#12151e" stroke="#262d40" stroke-width="1.5"/>
    <text x="36" y="47" font-family="-apple-system, system-ui, sans-serif" font-weight="900" font-size="28" fill="#38bdf8" text-anchor="middle" letter-spacing="1">RP</text>
  </g>

  <!-- Title & Headline -->
  <text x="190" y="152" font-family="-apple-system, system-ui, sans-serif" font-size="16" font-weight="700" fill="#0ea5e9" letter-spacing="2">RONAK PATEL</text>
  <text x="190" y="174" font-family="-apple-system, system-ui, sans-serif" font-size="14" font-weight="500" fill="#64748b" letter-spacing="1">SURAT, GUJARAT, INDIA • HTTPS://WWW.RKPATEL71.COM</text>

  <!-- Role Title -->
  <text x="100" y="270" font-family="-apple-system, system-ui, sans-serif" font-size="52" font-weight="800" fill="#f8fafc" letter-spacing="-1">
    AI Automation &amp;
  </text>
  <text x="100" y="335" font-family="-apple-system, system-ui, sans-serif" font-size="52" font-weight="800" fill="url(#ogCyan)" letter-spacing="-1">
    Agentic Systems Developer
  </text>

  <!-- Subtitle -->
  <text x="100" y="395" font-family="-apple-system, system-ui, sans-serif" font-size="22" font-weight="400" fill="#94a3b8" letter-spacing="0">
    Python • FastAPI • n8n • Grounded RAG • Deterministic Logic • Human-in-the-Loop
  </text>

  <!-- Verified Proof Pillars -->
  <g transform="translate(100, 450)">
    <!-- Card 1 -->
    <rect x="0" y="0" width="310" height="90" rx="12" fill="#131620" stroke="#1f2637" stroke-width="1.5"/>
    <text x="24" y="38" font-family="-apple-system, system-ui, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" letter-spacing="1">SUPPORTPILOT AI</text>
    <text x="24" y="65" font-family="ui-monospace, monospace" font-size="18" font-weight="700" fill="#f8fafc">79/79 Tests • 85.9% Cov</text>

    <!-- Card 2 -->
    <rect x="340" y="0" width="310" height="90" rx="12" fill="#131620" stroke="#1f2637" stroke-width="1.5"/>
    <text x="364" y="38" font-family="-apple-system, system-ui, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" letter-spacing="1">LEAD QUALIFICATION</text>
    <text x="364" y="65" font-family="ui-monospace, monospace" font-size="18" font-weight="700" fill="#f8fafc">68/68 Tests • 7-Factor</text>

    <!-- Card 3 -->
    <rect x="680" y="0" width="320" height="90" rx="12" fill="#131620" stroke="#1f2637" stroke-width="1.5"/>
    <text x="704" y="38" font-family="-apple-system, system-ui, sans-serif" font-size="13" font-weight="700" fill="#38bdf8" letter-spacing="1">OPSFORGE PLATFORM</text>
    <text x="704" y="65" font-family="ui-monospace, monospace" font-size="18" font-weight="700" fill="#f8fafc">32/32 Tests • 5-Agent Swarm</text>
  </g>
</svg>`;

fs.writeFileSync(path.join(ogDir, "og-image.svg"), ogSvg);
fs.writeFileSync(path.join(ogDir, "og-image.png"), ogSvg);

console.log("Successfully generated brand assets & OpenGraph image.");
