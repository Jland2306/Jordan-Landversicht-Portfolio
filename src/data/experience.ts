export interface ExperienceEntry {
  role: string
  org: string
  location?: string
  dates: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Builder',
    org: 'Hack Your Summer (Coding It Forward)',
    dates: 'Jun 2026 – Aug 2026',
    bullets: [
      'Elected as a builder independently designing and developing VINSight, a web app built to address a real-world need.',
      'Developed a full-stack web application that analyzes used car listings helping buyers make informed decisions.',
      'Collaborated with hundreds of student builders, exchanging feedback and ideas throughout an eight-week program.',
      'Built professional connections with peers and industry mentors across a range of tech and engineering careers.',
    ],
  },
  {
    role: 'Tire Technician',
    org: 'Mavis Discount Tire',
    location: 'Colonie, NY',
    dates: 'Jun 2026 – Present',
    bullets: [
      'Performed complete tire service as a Tire Technician, including machine-mounting and balancing across many vehicles.',
      'Diagnosed and completed flat repairs along with routine vehicle maintenance including oil changes and brake service.',
      'Operated specialized tire-mounting and balancing equipment safely and efficiently to meet shop turnaround standards.',
      'Maintained an organized and clean work environment by managing tire rack inventory and shop cleanliness standards.',
    ],
  },
  {
    role: 'Maintenance / Pro-Shop Staff',
    org: 'Thunderhart Golf Course',
    location: 'Freehold, NY',
    dates: 'May 2022 – Aug 2025',
    bullets: [
      'Maintain course greens and fairways to guarantee optimal course beauty and customer satisfaction.',
      'Repair and wash golf carts to uphold the high standard for the course and customers.',
      'Restore course features by weed-whacking, mowing bunkers, removing trees, and watering where necessary.',
      'Manage the Pro-Shop, ensuring customer satisfaction by scheduling tournaments, sponsors, and booking tee-times.',
    ],
  },
]
