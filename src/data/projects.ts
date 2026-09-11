export type ProjectTag = 'Unity' | 'Godot' | 'MonoGame' | 'Web' | '3D Art'

export interface Project {
  slug: string
  title: string
  dates: string
  year: string
  role: string
  team: string
  tags: ProjectTag[]
  stack: string[]
  hook: string
  problem: string
  built: string
  contribution: string
  highlight?: string
  repoUrl?: string
  /** How many gallery screenshot slots to show on the detail page (each
   * pulls from /images/projects/{slug}-01.png through -04.png). Defaults
   * to 4 — set lower (or 0) for a project with fewer real screenshots
   * planned, so it doesn't show empty placeholder slots. */
  galleryCount?: number
}

export const projects: Project[] = [
  {
    slug: 'fortunes-tower',
    title: 'Fortunes Tower',
    dates: 'Jan 2025 – Present',
    year: '2025',
    role: 'UI Designer & Programmer',
    team: '3-person team',
    tags: ['Unity'],
    stack: ['Unity', 'C#'],
    hook: 'A third-person RPG with exploration, quests, and progression, built with a three-person team.',
    problem:
      "An RPG lives or dies on whether the player can read their own state at a glance — inventory, quests, progression — without the UI getting in the way of exploration.",
    built:
      "I design and implement the core UI systems: menus, inventory, and quest tracking, built as modular components meant to scale as the team adds new gameplay features rather than get rebuilt every time.",
    contribution:
      "I own the UI layer end to end — architecture, implementation, and iteration — and work in version control with the team, running playtests to catch what's confusing before it ships.",
    // Personal project, no public repo yet — repoUrl intentionally omitted.
  },
  {
    slug: 'vinsight',
    title: 'VINSight',
    dates: 'Jun 2026 – Aug 2026',
    year: '2026',
    role: 'Solo developer',
    team: 'Solo',
    tags: ['Web'],
    stack: ['Node.js', 'Express', 'JavaScript', 'Cheerio', 'Claude API'],
    hook: "A full-stack app that reads a used-car listing and hands the buyer back a risk report.",
    problem:
      'Used-car listings bury the details that actually matter to a buyer inside inconsistent, unstructured pages — and most buyers have no fast way to sanity-check what they\'re reading.',
    built:
      'VINSight scrapes and parses listings with Cheerio, then runs a two-stage Claude analysis: one pass extracts structured vehicle details, a second evaluates the listing like a buyer\'s advocate. The result is an interactive report, not a wall of text.',
    contribution:
      "I built the whole pipeline solo, including SSRF protection around the scraper and a rule-based fallback engine so the app still returns a usable report if scraping or the AI call fails.",
    repoUrl: 'https://github.com/Jland2306/VINSight',
  },
  {
    slug: 'stellar-rampage',
    title: 'Stellar Rampage',
    dates: 'Feb 2025 – May 2025',
    year: '2025',
    role: 'UI Designer & Programmer',
    team: 'Team of 4',
    tags: ['MonoGame'],
    stack: ['MonoGame', 'C#'],
    hook: "A space shoot-'em-up with upgrade systems and interactive menus, built with a team of four.",
    problem:
      'A shoot-\'em-up needs menus and upgrade screens that keep pace with fast combat without ever pulling focus from it.',
    built:
      'The full menu and button system for the game — start flow, upgrade selection, and the in-combat HUD.',
    contribution:
      "I designed and developed the UI on a team of four, then presented the build to a playtest group of 20 and iterated directly on what they got stuck on.",
    repoUrl: 'https://github.com/Jland2306/Stellar-Rampage',
  },
  {
    slug: 'minimakers',
    title: 'MiniMakers',
    dates: 'Jan 2026 – May 2026',
    year: '2026',
    role: 'Front-End Architect',
    team: 'Team of 4',
    tags: ['Web'],
    stack: ['Angular', 'RESTful APIs', 'TypeScript'],
    hook: 'A full-stack e-commerce app with tiered user and admin access, built with a team of four.',
    problem:
      'An e-commerce app needs a navigation and permissions model that stays coherent as it grows past a single storefront into admin tooling.',
    built:
      'The front-end architecture and its integration with the backend REST services, including a secure permission tier that separates admin and user access.',
    contribution:
      "I designed the navigation and multi-menu flow and wired the front end to the backend services on a team of four.",
    repoUrl: 'https://github.com/Jland2306/MiniMakers',
  },
  {
    slug: 'tall-boy-and-the-lurking-legend',
    title: 'Tall Boy and the Lurking Legend',
    dates: 'Oct 2025',
    year: '2025',
    role: 'UI Lead',
    team: 'Small team · Scream Jam 2025',
    tags: ['Unity'],
    stack: ['Unity', 'C#'],
    hook: 'A horror survival game shipped in 3 days for Scream Jam 2025.',
    problem:
      'A horror game jam entry has to teach its mechanics almost silently — stopping to explain something breaks the tension the whole genre depends on.',
    built:
      "The menu systems and the complete UI, shipped inside a 3-day jam deadline with a small team.",
    contribution:
      "I owned the interface end to end, engineering flows that guide players through the core mechanics without a tutorial dumping text on screen.",
    repoUrl: 'https://github.com/Jland2306/Tall-Boy-and-The-Lurking-Legend',
  },
  {
    slug: 'jdm-garage',
    galleryCount: 2,
    title: 'JDM Garage',
    dates: 'Dec 2025',
    year: '2025',
    role: 'Solo 3D artist & developer',
    team: 'Solo',
    tags: ['Unity', '3D Art'],
    stack: ['Maya', 'Substance Painter', 'Unity'],
    hook: 'A fully realized 3D garage environment, modeled, textured, and walkable in first person.',
    problem:
      'Building a believable environment means owning the entire art pipeline, not just one stage of it — a model is only as good as the texture and lighting it ends up in.',
    built:
      'Every asset in the garage, modeled from scratch in Maya, textured to a realistic finish in Substance Painter, and integrated into Unity as an explorable first-person walkthrough.',
    contribution:
      "I ran the complete art pipeline solo, from first block-out to the final in-engine walkthrough.",
    repoUrl: 'https://github.com/Jland2306/JDM-Garage',
  },
  {
    slug: 'drive-until-impact',
    title: 'Drive Until Impact',
    galleryCount: 2,
    dates: 'Sept 2025',
    year: '2025',
    role: 'UI/HUD & Animation',
    team: 'Team · Untitled Game Jam #116',
    tags: ['Godot'],
    stack: ['Godot', 'Aseprite'],
    hook: 'A game jam entry that placed 9th overall out of the full Untitled Game Jam #116 field.',
    problem:
      'A jam HUD has to communicate speed and damage at a glance, and it has to be built fast enough to leave time for the rest of the game.',
    built:
      'Original sprites and HUD elements for a cohesive heads-up display, plus reusable 2D models and animations authored in Aseprite.',
    contribution:
      "I built the HUD and animation set for the team's entry, which placed 9th overall out of the jam field.",
    highlight: '9th place overall · Untitled Game Jam #116',
    repoUrl: 'https://github.com/Jland2306/Drive-Until-Impact',
  },
  {
    slug: 'artic-dodge',
    title: 'Artic Dodge',
    galleryCount: 2,
    dates: 'Nov 2025 – Dec 2025',
    year: '2025',
    role: 'Solo developer',
    team: 'Solo',
    tags: ['Web'],
    stack: ['Pixi.js', 'JavaScript'],
    hook: 'A browser-based endless runner with a personal-best system built to drive replay.',
    problem:
      'An endless runner only works if a player has a reason to run it again — that reason has to be built into the game state, not bolted on after.',
    built:
      'A full game-state system covering start, gameplay, and game-over, plus a personal-best score system designed specifically to drive replayability.',
    contribution:
      "I built it solo and ran structured playtesting that shaped the final difficulty and scoring design.",
    repoUrl: 'https://github.com/Jland2306/Artic-Dodge',
  },
  {
    slug: 'pokemon-picker',
    title: 'Pokemon Picker',
    galleryCount: 2,
    dates: 'Oct 2025 – Nov 2025',
    year: '2025',
    role: 'Solo developer',
    team: 'Solo',
    tags: ['Web'],
    stack: ['JavaScript', 'PokéAPI'],
    hook: 'Search and filter every Pokémon by name, type, and generation against the official API.',
    problem:
      'The PokéAPI is comprehensive but raw — turning it into something a visitor can actually browse means real search, filtering, and a UI that holds up across screen sizes.',
    built:
      'A search and filter interface against the official PokéAPI, with local storage persisting recent searches between visits.',
    contribution:
      "I built it solo and made it responsive across desktop, tablet, and mobile from the start.",
    repoUrl: 'https://github.com/Jland2306/Pokemon-Picker',
  },
  {
    slug: 'penguin-platformer',
    title: 'Penguin Platformer',
    galleryCount: 2,
    dates: 'Apr 2025',
    year: '2025',
    role: 'Solo developer & artist',
    team: 'Solo',
    tags: ['Godot', '3D Art'],
    stack: ['Godot', 'Aseprite'],
    hook: 'A 2D platformer with a hand-built character sprite sheet, animations, and actions.',
    problem:
      'A platformer\'s feel comes from its animation as much as its code — the two have to be built together, not handed off between people.',
    built:
      'The character sprite sheet, its animations and actions, and the platforming systems in Godot, all built solo.',
    contribution:
      "I built every asset and every line of code myself, then ran a public playtest that led directly to additional in-game animations.",
    repoUrl: 'https://github.com/Jland2306/Penguin-Platformer',
  },
]

export const projectTags: ProjectTag[] = ['Unity', 'Godot', 'MonoGame', 'Web', '3D Art']

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
