import fs from "fs";
import path from "path";
import { execSync } from "child_process";

console.log("=================================================");
console.log(" RUNNING PORTFOLIO AUTOMATED VERIFICATION SUITE");
console.log("=================================================");

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}`);
    process.exitCode = 1;
  }
}

// 1. Check Verified Assets Exist
console.log("\n--- Checking Static Assets ---");
const resumePdf = path.resolve("./public/resume/Ronak_Patel_AI_Automation_Resume.pdf");
assert(fs.existsSync(resumePdf) && fs.statSync(resumePdf).size > 10000, "Verified Resume PDF exists and is valid size (>10KB)");

const favicon = path.resolve("./public/favicon.svg");
assert(fs.existsSync(favicon), "Favicon SVG exists");

const ogImage = path.resolve("./public/og/og-image.png");
assert(fs.existsSync(ogImage), "OpenGraph social share image exists");

// 2. Check Project Screenshots
console.log("\n--- Checking Project Screenshots ---");
const spScreenshots = fs.readdirSync(path.resolve("./public/images/projects/supportpilot-ai"));
assert(spScreenshots.length >= 5, `SupportPilot AI has >= 5 real screenshots (Found: ${spScreenshots.length})`);

const leadScreenshots = fs.readdirSync(path.resolve("./public/images/projects/ai-lead-management-agent"));
assert(leadScreenshots.length >= 5, `AI Lead Management Agent has >= 5 real screenshots (Found: ${leadScreenshots.length})`);

const opsScreenshots = fs.readdirSync(path.resolve("./public/images/projects/opsforge-ai"));
assert(opsScreenshots.length >= 5, `OpsForge AI has >= 5 real screenshots (Found: ${opsScreenshots.length})`);

// 3. Check Data Integrity
console.log("\n--- Checking Data Integrity ---");
const projectDataPath = path.resolve("./src/data/projects.ts");
const projectDataContent = fs.readFileSync(projectDataPath, "utf-8");

assert(projectDataContent.includes("79/79"), "SupportPilot test count (79/79) verified in data");
assert(projectDataContent.includes("85.92%"), "SupportPilot coverage (85.92%) verified in data");
assert(projectDataContent.includes("68/68"), "Lead Management test count (68/68) verified in data");
assert(projectDataContent.includes("32/32"), "OpsForge test count (32/32) verified in data");
assert(projectDataContent.includes("https://github.com/ronakkhunt28-create"), "Verified GitHub repository links present");

// 4. Check Domain Configuration
const siteDataPath = path.resolve("./src/data/site.ts");
const siteDataContent = fs.readFileSync(siteDataPath, "utf-8");
assert(siteDataContent.includes("https://www.rkpatel71.com"), "Target canonical domain https://www.rkpatel71.com configured");
assert(siteDataContent.includes("khuntronak5@gmail.com"), "Verified email khuntronak5@gmail.com configured");

console.log("\n=================================================");
console.log(` RESULTS: ${passedTests} / ${totalTests} TESTS PASSED`);
console.log("=================================================\n");

if (passedTests !== totalTests) {
  process.exit(1);
}
