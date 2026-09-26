import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        page.on("console", lambda msg: print(f"[{msg.type}] {msg.text}"))
        page.on("pageerror", lambda err: print(f"[PAGE ERROR] {err}"))

        print("Navigating to http://localhost:3000 ...")
        await page.goto("http://localhost:3000", wait_until="domcontentloaded")
        print("DOM content loaded!")

        # Print page title and first 500 chars of body
        title = await page.title()
        print("Title:", title)

        content = await page.content()
        print("Body snippet:", content[:500])

        h1s = await page.locator("h1").all_inner_texts()
        print("H1 elements:", h1s)

        await page.screenshot(path="reports/qa-screenshots/debug_page.png")
        print("Saved debug screenshot to reports/qa-screenshots/debug_page.png")

        await browser.close()

asyncio.run(main())
