from playwright.sync_api import sync_playwright
import pathlib
import os
from PIL import Image

def generate_pngs():
    root = pathlib.Path(__file__).parent.parent
    public_dir = root / 'public'
    og_svg = public_dir / 'og' / 'og-image.svg'
    fav_svg = public_dir / 'favicon.svg'

    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # 1. OG Image (1200 x 630)
        page = browser.new_page(viewport={'width': 1200, 'height': 630}, device_scale_factor=1)
        page.goto(og_svg.as_uri())
        og_target = public_dir / 'og' / 'og-image.png'
        page.screenshot(path=str(og_target), type='png')
        print(f"Generated {og_target.name}: {os.path.getsize(og_target)} bytes")

        # 2. Apple Touch Icon (180 x 180)
        page.set_viewport_size({'width': 180, 'height': 180})
        page.goto(fav_svg.as_uri())
        apple_target = public_dir / 'apple-touch-icon.png'
        page.screenshot(path=str(apple_target), type='png')
        print(f"Generated {apple_target.name}: {os.path.getsize(apple_target)} bytes")

        # 3. Favicon 32x32
        page.set_viewport_size({'width': 32, 'height': 32})
        page.goto(fav_svg.as_uri())
        fav32_target = public_dir / 'favicon-32x32.png'
        page.screenshot(path=str(fav32_target), type='png')
        print(f"Generated {fav32_target.name}: {os.path.getsize(fav32_target)} bytes")

        browser.close()

    # Validate with PIL that they are valid PNGs
    for pth in [public_dir / 'og' / 'og-image.png', public_dir / 'apple-touch-icon.png', public_dir / 'favicon-32x32.png']:
        with Image.open(pth) as im:
            print(f"VERIFIED PNG {pth.name}: format={im.format}, size={im.size}, mode={im.mode}")

if __name__ == '__main__':
    generate_pngs()
