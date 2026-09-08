# Image placeholders

Every image on the site is referenced by the exact path below. Drop a real
file in at that path (same filename, same folder) and it replaces the
on-theme placeholder automatically — no code changes needed.

Until a file exists, the `<Placeholder>` component renders a halftone
black-and-red panel showing the filename and pixel dimensions instead.

## Open Graph

| Path | Dimensions | Used on |
|---|---|---|
| `/images/og.png` | 1200×630 | `og:image` meta tag, every route |

## Profile

| Path | Dimensions | Used on |
|---|---|---|
| `/images/profile/headshot.png` | 800×800 (1:1) | About page |

## Projects

Each project needs a 16:9 cover image plus up to four 16:9 gallery
screenshots (the gallery always renders four slots; any that don't exist
yet just show the placeholder).

| Slug | Cover (1280×720) | Gallery (1600×900 each) |
|---|---|---|
| `fortunes-tower` | `/images/projects/fortunes-tower-cover.png` | `fortunes-tower-01.png` … `-04.png` |
| `vinsight` | `/images/projects/vinsight-cover.png` | `vinsight-01.png` … `-04.png` |
| `stellar-rampage` | `/images/projects/stellar-rampage-cover.png` | `stellar-rampage-01.png` … `-04.png` |
| `minimakers` | `/images/projects/minimakers-cover.png` | `minimakers-01.png` … `-04.png` |
| `tall-boy-and-the-lurking-legend` | `/images/projects/tall-boy-and-the-lurking-legend-cover.png` | `tall-boy-and-the-lurking-legend-01.png` … `-04.png` |
| `jdm-garage` | `/images/projects/jdm-garage-cover.png` | `jdm-garage-01.png` … `-04.png` |
| `drive-until-impact` | `/images/projects/drive-until-impact-cover.png` | `drive-until-impact-01.png` … `-04.png` |
| `artic-dodge` | `/images/projects/artic-dodge-cover.png` | `artic-dodge-01.png` … `-04.png` |
| `pokemon-picker` | `/images/projects/pokemon-picker-cover.png` | `pokemon-picker-01.png` … `-04.png` |
| `penguin-platformer` | `/images/projects/penguin-platformer-cover.png` | `penguin-platformer-01.png` … `-04.png` |

Covers appear on the `/projects` grid card and again at the top of that
project's detail panel. Gallery images appear in the detail panel's
screenshot grid.

## Adding a new project

If you add a project to `src/data/projects.ts`, its images are picked up
automatically from `/images/projects/{slug}-cover.png` and
`/images/projects/{slug}-01.png` through `-04.png` — no changes needed
here beyond adding a row to the table above for your own reference.
