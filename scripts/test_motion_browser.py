"""Exercise the real scroll-reveal controller and live reduced-motion changes."""
import asyncio
import sys
from playwright.async_api import async_playwright

BASE = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://localhost:3000"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        await page.goto(BASE, wait_until="networkidle")
        await page.locator("#projects").scroll_into_view_if_needed()
        await page.wait_for_function("document.querySelector('#projects').getAnimations().some(a => a.playState === 'running')", timeout=3000)
        await page.emulate_media(reduced_motion="reduce")
        await page.wait_for_function("document.querySelector('#projects').getAnimations().length === 0")
        duration = await page.locator(".reveal-title").evaluate("el => getComputedStyle(el).animationDuration")
        assert duration in ["1e-05s", "0.00001s", "0s"]
        await page.reload(wait_until="networkidle")
        await page.locator("#projects").scroll_into_view_if_needed()
        assert await page.locator("#projects").evaluate("el => el.getAnimations().length") == 0
        assert await page.locator("#projects").evaluate("el => getComputedStyle(el).opacity") == "1"
        print("[PASS] Real entering-section animation, live cancellation, reduced-motion reload and visible content")
        await browser.close()

asyncio.run(main())
