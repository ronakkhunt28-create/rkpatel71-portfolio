import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        page.on("console", lambda msg: print(f"[CONSOLE] {msg.text}", flush=True))
        page.on("pageerror", lambda err: print(f"[PAGE ERROR] {err}", flush=True))

        print("Navigating to http://localhost:3000/#contact ...", flush=True)
        await page.goto("http://localhost:3000/#contact", wait_until="networkidle")

        print("Filling form fields...", flush=True)
        await page.fill("#name", "Elena Rostova")
        await page.fill("#email", "elena@techventures.io")
        await page.fill("#message", "Testing contact submission through browser form.")

        print("Locating submit button...", flush=True)
        btn = page.locator('button[type="submit"]')
        print(f"Submit button found, visible={await btn.is_visible()}, enabled={await btn.is_enabled()}", flush=True)

        print("Clicking submit button...", flush=True)
        async with page.expect_response("**/api/contact") as resp_info:
            await btn.click()
        resp = await resp_info.value
        print(f"Response status: {resp.status}, text: {await resp.text()}", flush=True)

        await page.wait_for_timeout(1000)
        success_visible = await page.locator("text=Message Sent Successfully").is_visible()
        print(f"Success banner visible: {success_visible}", flush=True)

        await page.screenshot(path="reports/qa-screenshots/test_contact_submit.png")
        print("Saved screenshot to reports/qa-screenshots/test_contact_submit.png", flush=True)
        await browser.close()

asyncio.run(main())
