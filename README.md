# Jordan Landversicht — Portfolio

A personal portfolio site for Jordan Landversicht, a Game Design &
Development student at RIT looking for a Summer 2027 co-op or internship.
The visual direction is a stylistic homage to the Persona 5 UI — hard
black, one aggressive red, torn-paper panels on a slant, halftone texture,
and a red diagonal wipe as the route-transition grammar. Every asset is
original; no ripped sprites, fonts, or branding from the game.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 for layout/tokens, hand-written CSS for the skew, torn
  clip-path, halftone, and offset-shadow primitives (`src/index.css`)
- [motion](https://motion.dev) (Framer Motion) for the route wipe, nav,
  hero, and project-detail panel
- react-router-dom
- `@fontsource` self-hosted fonts (Anton, Barlow, Permanent Marker) — no
  CDN font requests
- No backend, no CMS. All content lives in typed data files under
  `src/data/`.

## Local development

```bash
npm install
npm run dev
```

## Editing content

Every string a recruiter reads lives in `src/data/` — edit these, not the
components:

- `profile.ts` — name, tagline, education, bio, contact links, résumé path
- `projects.ts` — one entry per project (dates, role, stack, tags,
  problem/built/contribution copy, optional highlight, optional repo URL)
- `skills.ts` — skill groups, honestly labeled by depth of use (shipped
  vs. coursework), plus practices and platforms
- `experience.ts` — work history entries

Adding a project is just adding an object to the `projects` array in
`projects.ts` — the grid, filters, and detail panel all pick it up
automatically. See `public/images/README.md` for the image filenames it
expects.

## Images

Every image is a placeholder until you drop in a real file at the exact
path it's referenced by (see `public/images/README.md` for the full list
of expected filenames and dimensions). Until then, the `<Placeholder>`
component renders an on-theme panel showing the filename and pixel size
so it's obvious what's missing.

The résumé download button expects a real PDF at
`/public/Landversicht_Jordan_Resume.pdf` (currently an empty placeholder
file).

## Building

```bash
npm run build              # plain build, served from /
npm run build:gh-pages     # build with the /Jordan-Landversicht-Portfolio/ base path
```

### Static prerendering

`npm run prerender` (or `npm run prerender:gh-pages`) crawls the freshly
built `dist/` with a headless browser and writes each route's fully
rendered HTML into its own `dist/<route>/index.html`, so the very first
paint doesn't have to wait on JavaScript at all — the browser's own
client bundle then takes over for navigation exactly as it would in a
normal SPA. It also inlines the site's stylesheet into each page so
first paint isn't blocked on a second network request either.

This step needs a Playwright-managed Chromium (`npx playwright install
chromium` once, if you haven't already) and isn't part of the plain
`build` script — a generic CI/host build pipeline shouldn't be assumed
to have a browser binary available. It *is* wired into
`deploy:gh-pages` below, since that's always run locally.

## Deploying

**GitHub Pages:**

```bash
npm run deploy:gh-pages
```

This builds with the GitHub Pages base path, prerenders every route, and
pushes `dist/` to the `gh-pages` branch via the `gh-pages` package. Point
the repo's Pages settings at that branch. (First run: `npx playwright
install chromium` if you haven't already.)

**Vercel:** point it at this repo with build command `npm run build`
(or `npm run build && npm run prerender` for the prerendering benefit —
Vercel's build containers can run Playwright, but need `npx playwright
install --with-deps chromium` added to the build command) and output
directory `dist`.

## Quality

Verified against the production build with axe-core and Lighthouse
(desktop) across all seven routes:

- **Accessibility: 100.** Zero WCAG 2A/2AA violations. Keyboard-navigable
  nav (arrow keys + Enter), visible focus rings, real heading hierarchy,
  alt text (including on placeholders), `prefers-reduced-motion` honored
  throughout (wipes/slides become instant cuts or short crossfades).
- **Best Practices: 100. SEO: 100.** Per-route `<title>`/meta
  description/OG tags, `robots.txt`, no console errors.
- **Performance: 80–85.** Cumulative Layout Shift is ~0 and the JS bundle
  is lean, but First Contentful Paint sits around 1.7s under Lighthouse's
  simulated throttling — the realistic floor for a purely client-rendered
  SPA (nothing paints until the browser fetches and runs JS) even with
  static prerendering closing most of that gap. Going further would mean
  true SSR/streaming, which is out of scope for a static, backend-free
  build.

No console errors on any route; no horizontal overflow from 320px up.
