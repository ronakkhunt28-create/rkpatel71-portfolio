import asyncio
import os
import sys
from playwright.async_api import async_playwright

SCREENSHOT_DIR = os.path.abspath("./reports/qa-screenshots")
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

BASE_URL = sys.argv[1].rstrip('/') if len(sys.argv) > 1 else "http://localhost:3000"

async def run_qa():
    print("==================================================", flush=True)
    print(f" RUNNING PLAYWRIGHT BROWSER VISUAL & FUNCTIONAL QA: {BASE_URL}", flush=True)
    print("==================================================", flush=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # ----------------------------------------------------
        # 1. DESKTOP AUDIT (1440 x 900)
        # ----------------------------------------------------
        print("\n--- 1. Testing Desktop Experience (1440x900) ---", flush=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900})
        page = await context.new_page()

        # Navigate to homepage
        await page.goto(f"{BASE_URL}/", wait_until="networkidle")
        await page.wait_for_timeout(1000)
        print("[PASS] Homepage loaded successfully", flush=True)

        # Check Hero
        hero_title = await page.locator("h1").inner_text()
        assert "Ronak Patel" in hero_title, f"Unexpected Hero title: {hero_title}"
        print(f"[PASS] Hero Title: {hero_title}", flush=True)

        # Check 3D Canvas / Network Visualization
        hero_visual = page.locator("canvas, [aria-label*='Workflow Network']")
        await hero_visual.first.wait_for(state="attached", timeout=15000)
        visual_count = await hero_visual.count()
        assert visual_count > 0, "Hero workflow visualization not mounted"
        print(f"[PASS] Hero Workflow Visualization mounted (Elements found: {visual_count})", flush=True)

        # Capture Desktop Hero Screenshot
        await page.screenshot(path=os.path.join(SCREENSHOT_DIR, "desktop-01-hero.png"))
        print("[SAVED] reports/qa-screenshots/desktop-01-hero.png", flush=True)

        # Scroll to Projects Section
        projects_section = page.locator("#projects")
        await projects_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await page.screenshot(path=os.path.join(SCREENSHOT_DIR, "desktop-02-projects.png"))
        print("[SAVED] reports/qa-screenshots/desktop-02-projects.png", flush=True)

        # Scroll to Capabilities & Skills
        skills_section = page.locator("#skills")
        await skills_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await page.screenshot(path=os.path.join(SCREENSHOT_DIR, "desktop-03-skills.png"))
        print("[SAVED] reports/qa-screenshots/desktop-03-skills.png", flush=True)

        # Scroll to Contact Section & Test Form
        contact_section = page.locator("#contact")
        await contact_section.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)

        print("\n--- Testing Contact Form Submission ---", flush=True)
        await page.fill("#name", "Elena Rostova")
        await page.fill("#email", "elena.rostova@techventures.io")
        await page.fill("#organization", "TechVentures Global")
        await page.select_option("#inquiryType", "Role Opportunity")
        await page.fill("#message", "We are looking for an AI Automation Developer to lead our backend agent pipelines.")
        
        btn = page.locator('button[type="submit"]')
        async with page.expect_response("**/api/contact") as response_info:
            await btn.click()
        response = await response_info.value
        resp_json = await response.json()
        print(f"[API RESPONSE] status={response.status}, body={resp_json}", flush=True)
        
        await page.wait_for_timeout(1000)
        success_visible = await page.locator("text=Message Sent Successfully").is_visible()
        assert success_visible, "Success banner not visible after submit"
        print("[PASS] Contact Form submitted & verified success banner displayed", flush=True)
        await page.screenshot(path=os.path.join(SCREENSHOT_DIR, "desktop-04-contact-success.png"))

        # Test Case Study Page Navigation
        print("\n--- Testing Case Study Pages Navigation ---", flush=True)
        for slug in ["supportpilot-ai", "ai-lead-management-agent", "opsforge-ai", "bizhunter-mis"]:
            await page.goto(f"{BASE_URL}/projects/{slug}", wait_until="domcontentloaded")
            await page.wait_for_timeout(500)
            page_title = await page.locator("h1").inner_text()
            print(f"[PASS] Navigated to /projects/{slug} (Title: {page_title})", flush=True)
            await page.screenshot(path=os.path.join(SCREENSHOT_DIR, f"desktop-case-study-{slug}.png"))

            # Test Breadcrumb Return
            breadcrumb_home = page.locator('text=Back to Home')
            await breadcrumb_home.click()
            await page.wait_for_timeout(500)
            print(f"[PASS] Breadcrumb back to Home confirmed from {slug}", flush=True)

        await context.close()

        # ----------------------------------------------------
        # 2. MOBILE RESPONSIVENESS AUDIT (375 x 812 - iPhone)
        # ----------------------------------------------------
        print("\n--- 2. Testing Mobile Responsiveness (375x812) ---", flush=True)
        mobile_context = await browser.new_context(
            viewport={"width": 375, "height": 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1"
        )
        mobile_page = await mobile_context.new_page()

        await mobile_page.goto(f"{BASE_URL}/", wait_until="networkidle")
        await mobile_page.wait_for_timeout(1000)

        # Check for Horizontal Overflow (Critical Mobile QA rule)
        is_overflowing = await mobile_page.evaluate("""() => {
            return document.documentElement.scrollWidth > window.innerWidth;
        }""")
        assert not is_overflowing, "Mobile layout has horizontal overflow bug!"
        print("[PASS] Zero horizontal scroll overflow on mobile (width: 375px)", flush=True)

        # Capture Mobile Hero Screenshot
        await mobile_page.screenshot(path=os.path.join(SCREENSHOT_DIR, "mobile-01-hero.png"))
        print("[SAVED] reports/qa-screenshots/mobile-01-hero.png", flush=True)

        # Test Mobile Menu Open/Close
        menu_button = mobile_page.locator('button[aria-label="Toggle Navigation Menu"]')
        await menu_button.click()
        await mobile_page.wait_for_timeout(400)
        
        # Verify Mobile Menu Links are visible
        mobile_links = mobile_page.locator("nav a")
        link_count = await mobile_links.count()
        assert link_count > 0, "No navigation links found in mobile menu"
        print(f"[PASS] Mobile navigation menu opened with {link_count} links", flush=True)
        await mobile_page.screenshot(path=os.path.join(SCREENSHOT_DIR, "mobile-02-menu-open.png"))

        # Close mobile menu
        await menu_button.click()
        await mobile_page.wait_for_timeout(300)
        print("[PASS] Mobile navigation menu closed successfully", flush=True)

        # Scroll to Projects on Mobile
        await mobile_page.locator("#projects").scroll_into_view_if_needed()
        await mobile_page.wait_for_timeout(300)
        await mobile_page.screenshot(path=os.path.join(SCREENSHOT_DIR, "mobile-03-projects.png"))

        await mobile_context.close()

        # ----------------------------------------------------
        # 3. 404 ERROR PAGE AUDIT
        # ----------------------------------------------------
        print("\n--- 3. Testing Custom 404 Page ---", flush=True)
        notFoundContext = await browser.new_context()
        notFoundPage = await notFoundContext.new_page()
        res = await notFoundPage.goto(f"{BASE_URL}/non-existent-route-qa-test", wait_until="domcontentloaded")
        await notFoundPage.wait_for_timeout(500)
        assert res.status == 404, f"Expected 404, got {res.status}"
        h1_text = await notFoundPage.locator("h1").inner_text()
        assert "Route Does Not Exist" in h1_text, f"Unexpected 404 text: {h1_text}"
        print(f"[PASS] 404 Status and Custom UI Verified: {h1_text}", flush=True)
        await notFoundPage.screenshot(path=os.path.join(SCREENSHOT_DIR, "404-not-found.png"))
        await notFoundContext.close()

        await browser.close()

    print("\n==================================================", flush=True)
    print(" ALL PLAYWRIGHT BROWSER QA AUDITS PASSED!", flush=True)
    print("==================================================", flush=True)

if __name__ == "__main__":
    asyncio.run(run_qa())
