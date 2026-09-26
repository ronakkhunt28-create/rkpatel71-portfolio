import http from "http";

const routesToTest = [
  { path: "/", expectedStatus: 200, contains: ["Ronak Patel", "AI Automation", "Featured AI", "SupportPilot AI"] },
  { path: "/projects/supportpilot-ai", expectedStatus: 200, contains: ["SupportPilot AI", "79/79", "85.92%", "SQLite FTS5"] },
  { path: "/projects/ai-lead-management-agent", expectedStatus: 200, contains: ["AI Lead Management Agent", "68/68", "Deterministic 7-Factor"] },
  { path: "/projects/opsforge-ai", expectedStatus: 200, contains: ["OpsForge AI", "32/32", "5 Swarm Agents", "SHA-256"] },
  { path: "/projects/bizhunter-mis", expectedStatus: 200, contains: ["BizHunter Inventory MIS", "PySide6", "SQLAlchemy"] },
  { path: "/robots.txt", expectedStatus: 200, contains: ["User-Agent: *", "https://www.rkpatel71.com/sitemap.xml"] },
  { path: "/sitemap.xml", expectedStatus: 200, contains: ["https://www.rkpatel71.com", "supportpilot-ai", "opsforge-ai"] },
  { path: "/resume/Ronak_Patel_AI_Automation_Resume.pdf", expectedStatus: 200, isBinary: true },
];

function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(`http://localhost:3000${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve({ statusCode: res.statusCode, headers: res.headers, body: data });
      });
    });
    req.on("error", reject);
    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${path}`));
    });
  });
}

function postContact(payload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const req = http.request(
      "http://localhost:3000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(postData),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          resolve({ statusCode: res.statusCode, body: data });
        });
      }
    );
    req.on("error", reject);
    req.write(postData);
    req.end();
  });
}

async function run() {
  console.log("================================================");
  console.log(" LIVE SERVER END-TO-END VERIFICATION");
  console.log("================================================");

  let passed = 0;
  let total = 0;

  for (const route of routesToTest) {
    total++;
    try {
      const res = await fetchRoute(route.path);
      if (res.statusCode !== route.expectedStatus) {
        console.error(`[FAIL] ${route.path} -> Expected ${route.expectedStatus}, got ${res.statusCode}`);
        continue;
      }

      if (route.contains) {
        let missing = [];
        for (const token of route.contains) {
          if (!res.body.includes(token)) {
            missing.push(token);
          }
        }
        if (missing.length > 0) {
          console.error(`[FAIL] ${route.path} missing expected tokens: ${missing.join(", ")}`);
          continue;
        }
      }

      console.log(`[PASS] ${route.path} -> HTTP ${res.statusCode} (Verified content)`);
      passed++;
    } catch (err) {
      console.error(`[FAIL] ${route.path} -> ${err.message}`);
    }
  }

  // Test Contact API Valid Submission
  total++;
  try {
    const validRes = await postContact({
      name: "Engineering Recruiter",
      email: "recruiter@example.com",
      organization: "Tech Startup",
      inquiryType: "Role Opportunity",
      message: "We are interested in speaking with Ronak about an AI Automation role.",
    });
    const parsed = JSON.parse(validRes.body);
    if (validRes.statusCode === 200 && parsed.success === true) {
      console.log("[PASS] POST /api/contact (Valid Submission) -> HTTP 200 Success");
      passed++;
    } else {
      console.error(`[FAIL] POST /api/contact -> Expected success, got ${validRes.body}`);
    }
  } catch (err) {
    console.error(`[FAIL] POST /api/contact -> ${err.message}`);
  }

  // Test Contact API Anti-Spam Honeypot
  total++;
  try {
    const botRes = await postContact({
      name: "Spam Bot",
      email: "spambot@example.com",
      message: "Buy cheap tokens now!",
      honeypot: "http://spam-link.example",
    });
    const parsed = JSON.parse(botRes.body);
    if (botRes.statusCode === 200 && parsed.success === true) {
      console.log("[PASS] POST /api/contact (Honeypot Trigger) -> Discarded silently with HTTP 200");
      passed++;
    } else {
      console.error(`[FAIL] POST /api/contact honeypot -> Got ${botRes.body}`);
    }
  } catch (err) {
    console.error(`[FAIL] POST /api/contact honeypot -> ${err.message}`);
  }

  // Test Contact API Validation Failure
  total++;
  try {
    const invalidRes = await postContact({
      name: "A",
      email: "not-an-email",
      message: "hi",
    });
    const parsed = JSON.parse(invalidRes.body);
    if (invalidRes.statusCode === 400 && parsed.success === false) {
      console.log("[PASS] POST /api/contact (Invalid Input) -> HTTP 400 Bad Request rejected cleanly");
      passed++;
    } else {
      console.error(`[FAIL] POST /api/contact invalid -> Expected 400, got ${invalidRes.statusCode}`);
    }
  } catch (err) {
    console.error(`[FAIL] POST /api/contact invalid -> ${err.message}`);
  }

  console.log("\n================================================");
  console.log(` SUMMARY: ${passed} / ${total} TESTS PASSED`);
  console.log("================================================");

  if (passed !== total) {
    process.exit(1);
  }
}

run();
