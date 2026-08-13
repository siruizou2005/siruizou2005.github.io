# siruizou.com

Personal academic homepage. React + Vite, static build, deployed to GitHub Pages
at [siruizou.com](https://siruizou.com).

## Local development

```bash
npm install
npm run dev       # dev server
npm run build     # build into dist/
npm run preview   # preview the built site
```

## Editing content

All page text lives in **`src/data.jsx`** — name, links, About paragraphs,
education, publications, research experience, projects. Editing that one file
covers almost every content change; `src/App.jsx` only lays it out.

- `CV_URL` (top of `src/data.jsx`) points at the CV in `public/`. To update the
  CV: drop the new PDF into `public/` with a new year-month in the filename, then
  change that one constant.
- Photo: `public/photo.jpg`. Displayed as a portrait ellipse, so a roughly 5:6
  crop with the face near the vertical centre works best.
- Institution logos: `public/logos/`. Square, transparent background.

## CV source

`cv/cv.tex` is the LaTeX source for the CV. It needs XeLaTeX (it uses `ctex`,
`fontspec` and `fontawesome5`). Keeping it in this repo means the CV and the
site that links to it stay in sync.

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes
`dist/` to GitHub Pages. Pages must be set to **Settings → Pages → Source:
GitHub Actions**.

`public/CNAME` holds the custom domain (`siruizou.com`). Vite copies it verbatim
into `dist/`, which is what keeps the domain bound — **do not delete it**, or the
site falls back to `siruizou2005.github.io`.
