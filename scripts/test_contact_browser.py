"""Focused provider-free contact regression check; never sends email."""
import asyncio
import sys
from playwright.async_api import async_playwright

BASE_URL = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://localhost:3000"

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(permissions=["clipboard-read", "clipboard-write"])
        page = await context.new_page()
        await page.goto(f"{BASE_URL}/#contact", wait_until="networkidle")
        contact = page.locator("#contact")
        assert await contact.locator("form").count() == 0
        assert await contact.get_by_role("link", name="Contact Me", exact=True).get_attribute("href") == "mailto:khuntronak5@gmail.com"
        await contact.get_by_role("button", name="Copy Email Address").click()
        assert await contact.get_by_role("status").inner_text() == "Email address copied."
        assert await page.evaluate("navigator.clipboard.readText()") == "khuntronak5@gmail.com"
        await page.evaluate("Object.defineProperty(navigator, 'clipboard', {configurable: true, value: {writeText: async () => {throw new Error('Clipboard unavailable')}}})")
        await contact.get_by_role("button", name="Copy Email Address").click()
        assert "copy it manually" in await contact.get_by_role("status").inner_text()
        print("[PASS] Contact mailto, hidden form, actual clipboard copy and denial fallback")
        await browser.close()

asyncio.run(main())
