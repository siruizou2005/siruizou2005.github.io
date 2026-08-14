# siruizou.com

Personal academic homepage. [Astro](https://astro.build), static build, deployed
to GitHub Pages at [siruizou.com](https://siruizou.com).

## Local development

```bash
npm install
npm run dev       # dev server
npm run build     # build into dist/
npm run preview   # preview the built site
npm run lint      # oxlint
```

## Editing content

All page text lives in **`src/data.js`** — name, links, About paragraphs,
education, publications, research experience, projects. Editing that one file
covers almost every content change; `src/pages/index.astro` and the components in
`src/components/` only lay it out. Fields that need inline links or emphasis
(`about`, `authors`, `venue`) are HTML snippets, rendered with `set:html`.

- `CV_URL` (top of `src/data.js`) points at the CV in `public/`. To update the
  CV: drop the new PDF into `public/` with a new year-month in the filename, then
  change that one constant.
- Photo: `src/assets/photo.jpg`. Displayed as a portrait ellipse, so a roughly
  5:6 crop with the face near the vertical centre works best.
- Institution logos: `src/assets/logos/`. Square, transparent background.

Images live in `src/assets/` rather than `public/` so Astro can compress them,
convert to WebP and emit a `srcset` at build time — the avatar ships as ~14 KB
instead of the 120 KB original. Drop in a replacement at the same path and the
build handles the rest. The social-card image (`og:image`) is a separate JPEG
generated from the same file, because WeChat and LinkedIn do not reliably
render WebP.

The page is fully static — the only client-side JavaScript is the inline
`<script>` in `src/components/PubItem.astro`, which expands the Abstract /
BibTeX panels and drives the Copy button. Both panels are in the HTML from the
start (with `hidden`), so crawlers that don't run JS still see the abstract.

## Fonts

Both fonts are self-hosted; the page makes no request to Google at runtime.

- **Source Serif 4** (body and headings) is downloaded and subset at build time
  by Astro's font pipeline — see the `fonts` block in `astro.config.mjs`. It
  also generates a metric-matched local fallback, so text does not shift when
  the webfont swaps in.
- **Noto Serif SC** (the Chinese name in the masthead) is a hand-made subset at
  `public/fonts/noto-serif-sc-subset.woff2` — 2.7 KB holding exactly the three
  glyphs 邹思瑞. The generic pipeline cannot go finer than the whole simplified
  set (several MB), hence the manual file. Its `@font-face` is at the top of
  `src/styles/index.css`.

**If you change the Chinese name, that subset must be regenerated**, or the new
characters fall back to the system serif:

```bash
# 1. ask Google for a subset containing just the characters you need
curl -sG --data-urlencode "family=Noto Serif SC:wght@400" \
     --data-urlencode "text=新的名字" \
     -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 \
         (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" \
     https://fonts.googleapis.com/css2
# 2. download the woff2 the response points at, save it over
#    public/fonts/noto-serif-sc-subset.woff2
# 3. copy the unicode-range from that response into the @font-face
#    in src/styles/index.css
```

## CV source

`cv/cv.tex` is the LaTeX source for the CV. It needs XeLaTeX (it uses `ctex`,
`fontspec` and `fontawesome5`). Keeping it in this repo means the CV and the
site that links to it stay in sync.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to GitHub Pages. Pages must be set to **Settings → Pages → Source:
GitHub Actions**.

`public/CNAME` holds the custom domain (`siruizou.com`). Astro copies it verbatim
into `dist/`, which is what keeps the domain bound — **do not delete it**, or the
site falls back to `siruizou2005.github.io`.
