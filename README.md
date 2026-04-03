# Liv Holm Portfolio (Static Site)

A premium static portfolio website concept for the AI influencer brand **Liv Holm**.

Design intent: calm, warm, minimal Scandinavian soft luxury for brand and agency collaboration use.

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   │   ├── hero-liv-holm.svg
│   │   ├── reel-poster.svg
│   │   ├── portfolio-fashion.svg
│   │   ├── portfolio-beauty.svg
│   │   ├── portfolio-travel.svg
│   │   ├── portfolio-hospitality.svg
│   │   └── portfolio-accessories.svg
│   └── video/
│       └── liv-holm-reel.mp4 (optional, add manually)
└── README.md
```

## Run locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server (recommended), run one of the following commands from the project root:

```bash
python3 -m http.server 8000
```

Then open: <http://localhost:8000>

## Replace placeholders

- Replace image files in `assets/images/` with final campaign visuals while keeping the same filenames (or update paths in `index.html`).
- Add the brand reel MP4 at:

```text
assets/video/liv-holm-reel.mp4
```

If the file is missing, the motion section automatically shows a clean placeholder message.

## Deploy on GitHub Pages

### Option A: Deploy from `main` branch root

1. Push this repository to GitHub.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Save and wait for deployment.

### Option B: Deploy with a dedicated pages branch

1. Push repository.
2. Create and publish a `gh-pages` branch with the same files.
3. In **Settings → Pages**, choose `gh-pages` and `/ (root)`.

## Minimal assumptions used

- Placeholder images are SVG files to keep the first version lightweight and instantly deployable.
- Motion reel is optional and expected at `assets/video/liv-holm-reel.mp4`.
- Placeholder contact email is used until official management details are available.
