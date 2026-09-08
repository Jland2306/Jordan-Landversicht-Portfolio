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
      'Selected as a builder for an eight-week program and independently designed and developed VINSight from scratch.',
      'Exchanged feedback with hundreds of student builders and built connections with peers and industry mentors.',
    ],
  },
  {
    role: 'Tire Technician',
    org: 'Mavis Discount Tire',
    location: 'Colonie, NY',
    dates: 'Jun 2026 – Present',
    bullets: [
      'Perform full tire service including machine mounting and balancing, flat repair, oil changes, and brake service.',
      'Operate specialized shop equipment to turnaround standards under a steady daily volume.',
    ],
  },
  {
    role: 'Maintenance / Pro-Shop Staff',
    org: 'Thunderhart Golf Course',
    location: 'Freehold, NY',
    dates: 'May 2022 – Aug 2025',
    bullets: [
      'Handled course maintenance and equipment upkeep across a multi-season role.',
      'Managed the Pro-Shop, including tournament scheduling, sponsor coordination, and tee-time booking.',
    ],
  },
]
