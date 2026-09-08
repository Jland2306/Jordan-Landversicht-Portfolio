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

---

## About Me

I'm a Game Design & Development student at RIT (GPA 3.6, Presidential Scholarship, Dean's List) who works comfortably across both game development and general software engineering. My projects range from engine-based games in Unity, Godot, and MonoGame to full-stack web apps built with Node.js and Angular. I enjoy building things end-to-end, from UI systems and gameplay mechanics to backend APIs and AI-powered tooling.

I'm currently seeking a **Summer 2027 co-op or internship** where I can contribute to production software and keep growing as an engineer.

---

## Featured Projects

### 🎮 Games & Interactive Media

**[Fortunes Tower](https://github.com/dfs5974/Winter2026)** · Unity · *Jan 2025 – Present*
Third-person RPG built with a three-person team, featuring exploration, quests, and player progression. I designed and implemented core UI systems — menus, inventory management, and quest tracking — as modular, scalable components.

**[Tall Boy and the Lurking Legend](https://github.com/Jland2306/Tall-Boy-and-The-Lurking-Legend)** · Unity · *Oct 2025*
Horror survival game shipped for **Scream Jam 2025** under a strict 3-day deadline. Led the menu systems and complete UI, engineering intuitive flows that guide players through core mechanics.

**[Stellar Rampage](https://github.com/Jland2306/Stellar-Rampage)** · MonoGame · *Feb 2025 – May 2025*
Space-themed shoot 'em up with custom mechanics, upgrades, and interactive menus. Collaborated with a team of 4 on the game's UI/UX; presented to a group of 20 for playtesting and iteration.

**[Drive Until Impact](https://github.com/AwesomeAnthonyJr/DriveUntilImpact)** · Godot · *Sept 2025*
Game jam entry for Untitled Game Jam #116 with original sprites and a cohesive HUD. **Top-10 finish (9th place overall)** out of the field.

**[JDM Garage](https://github.com/Jland2306/JDM-Garage)** · Maya · Substance Painter · Unity · *Dec 2025*
Explorable first-person 3D garage environment. Modeled every asset from scratch in Maya, textured them in Adobe Substance Painter, and integrated the full art pipeline into Unity solo.

**[Artic Dodge](https://github.com/Jland2306/Artic-Dodge)** · Pixi.js · *Nov 2025 – Dec 2025*
Solo browser-based endless runner with a complete game-state system (start, gameplay, game-over) and a score system built to drive replayability.

**[Penguin Platformer](https://github.com/Jland2306/Penguin-Platformer)** · Godot · Aseprite · *Apr 2025*
Solo 2D platformer with a hand-built character sprite sheet, animations, and reusable models created in Aseprite and implemented in Godot.

### 🌐 Web & Full-Stack

**[VINSight](https://github.com/Jland2306/VINSight)** · Node.js · Express · Claude API · *Jun 2026 – Aug 2026*
Full-stack web app that scrapes and analyzes used-car listings and returns an interactive risk report. Combines structured-data extraction (Cheerio) with a two-stage Claude analysis — extraction plus a buyer's-advocate evaluation. Hardened with SSRF protection and a rule-based fallback engine so the app never fails when scraping or the AI call breaks.

**[MiniMakers](https://github.com/Jland2306/MiniMakers)** · Angular · RESTful APIs · *Jan 2026 – May 2026*
Full-stack e-commerce web app built with a team of 4. Developed the front-end architecture and integrated backend REST services, including secure user/admin privilege tiers and a cohesive multi-menu navigation experience.

**[Pokemon Picker](https://github.com/Jland2306/Pokemon-Picker)** · JavaScript · PokéAPI · *Oct 2025 – Nov 2025*
Solo web app to search and filter Pokémon by name, type, and generation using the official Pokémon API. Uses local storage to persist recent searches and adapts responsively across desktop, tablet, and mobile.

---

## Tech Stack

**Languages**
![C#](https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat&logo=c%2B%2B&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

**Game Engines & Frameworks**
![Unity](https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white)
![Godot](https://img.shields.io/badge/Godot-478CBF?style=flat&logo=godotengine&logoColor=white)
![MonoGame](https://img.shields.io/badge/MonoGame-E73C00?style=flat&logo=monogame&logoColor=white)
![Pixi.js](https://img.shields.io/badge/Pixi.js-E72264?style=flat&logo=pixiv&logoColor=white)

**Web & Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![REST APIs](https://img.shields.io/badge/REST_APIs-005571?style=flat&logo=fastapi&logoColor=white)

**Art & Tools**
![Maya](https://img.shields.io/badge/Maya-37A5CC?style=flat&logo=autodesk&logoColor=white)
![Substance Painter](https://img.shields.io/badge/Substance_Painter-000000?style=flat&logo=adobe&logoColor=white)
![Aseprite](https://img.shields.io/badge/Aseprite-7D929E?style=flat&logo=aseprite&logoColor=white)
![Audacity](https://img.shields.io/badge/Audacity-0000CC?style=flat&logo=audacity&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-0052CC?style=flat&logo=trello&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Visual Studio](https://img.shields.io/badge/Visual_Studio-5C2D91?style=flat&logo=visualstudio&logoColor=white)

---

## About This Repository

This repo hosts the source for my personal portfolio website. The live site will showcase the projects above with screenshots, playable/demo links, and write-ups.

> _Tech stack for the site TBD — I'll update this section (and add the GitHub Pages link above) once the build is finished._

### Running Locally
```

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
