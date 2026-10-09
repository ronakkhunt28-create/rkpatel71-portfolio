"""Read-only local link/anchor/image checks; does not activate mailto or send email."""
import asyncio
import os
import sys
from urllib.parse import urljoin, urlparse
from playwright.async_api import async_playwright

BASE = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "http://localhost:3000"
PATHS = ["/", "/projects/supportpilot-ai", "/projects/ai-lead-management-agent", "/projects/opsforge-ai", "/projects/bizhunter-mis"]

async def main():
    checks = 0
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
        page = await context.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        documents = {}
        for path in PATHS:
            await page.goto(BASE + path, wait_until="networkidle")
            documents[path] = await page.evaluate("({ids:[...document.querySelectorAll('[id]')].map(x=>x.id),links:[...document.querySelectorAll('a[href]')].map(x=>x.getAttribute('href'))})")
            # Inspect every screenshot at its actual lazy-loading position.
            for img in await page.locator("main img").all():
                await img.scroll_into_view_if_needed()
                await page.wait_for_function("el => el.complete && el.naturalWidth > 0", arg=await img.element_handle())
                checks += 1
        checked = set()
        for path, document in documents.items():
            for href in document["links"]:
                url = urlparse(urljoin(BASE + path, href))
                if url.scheme == "mailto":
                    assert url.path == "khuntronak5@gmail.com"
                    checks += 1
                    continue
                if url.netloc != urlparse(BASE).netloc:
                    continue  # External repository identity is checked separately with GitHub API.
                target = url.path or "/"
                if url.fragment:
                    assert target in documents, f"Uncrawled anchor target: {href}"
                    assert url.fragment in documents[target]["ids"], f"Missing anchor from {path}: {href}"
                    checks += 1
                if target not in checked:
                    response = await context.request.get(BASE + target)
                    assert response.status == 200, f"Broken local link: {target} ({response.status})"
                    checked.add(target)
                    checks += 1
        for width in [320, 375, 768, 1024, 1440, 1920]:
            await page.set_viewport_size({"width": width, "height": 900})
            for path in PATHS:
                await page.goto(BASE + path, wait_until="domcontentloaded")
                await page.wait_for_timeout(150)
                assert not await page.evaluate("document.documentElement.scrollWidth > innerWidth"), f"Overflow: {path} at {width}"
                checks += 1
        assert not errors, errors
        await browser.close()
    print(f"Links, anchors, lazy images and all-route responsive checks: {checks}/{checks} passed; no email sent.")

asyncio.run(main())
