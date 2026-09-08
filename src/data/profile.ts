export interface EducationEntry {
  school: string
  degree: string
  expected: string
  gpa: string
  honors: string[]
}

export interface Profile {
  name: string
  firstName: string
  lastName: string
  tagline: string
  seeking: string
  email: string
  linkedin: string
  linkedinUrl: string
  github: string
  githubUrl: string
  resumePath: string
  education: EducationEntry
  bio: string[]
  location: string
}

export const profile: Profile = {
  name: 'Jordan Landversicht',
  firstName: 'Jordan',
  lastName: 'Landversicht',
  tagline: 'Game Design & Development student',
  seeking: 'Looking for a Summer 2027 co-op or internship',
  email: 'jlandversicht23@gmail.com',
  linkedin: 'linkedin.com/in/JordanLandversicht',
  linkedinUrl: 'https://linkedin.com/in/JordanLandversicht',
  github: 'github.com/Jland2306',
  githubUrl: 'https://github.com/Jland2306',
  resumePath: '/Landversicht_Jordan_Resume.pdf',
  location: 'Rochester, NY',
  education: {
    school: 'Rochester Institute of Technology',
    degree: 'B.S. Game Design and Development',
    expected: 'Expected May 2028',
    gpa: '3.6 GPA',
    honors: [
      'Presidential Scholarship',
      "Dean's List — Spring 2025, Fall 2025, Spring 2026",
    ],
  },
  bio: [
    "I'm a Game Design & Development student at RIT who splits time between engine work and general software engineering. Most of what I build starts as a UI problem — how a player finds the menu they need, how a recruiter finds the project they came for — and I like owning that layer end to end.",
    "Across school teams and jam weekends I keep coming back to the same role: the person who builds the interface and the systems underneath it, from inventory screens in Unity to a full-stack risk report that talks to the Claude API. I care about shipping something a real person can use under a real deadline, not a tech demo.",
    "Outside of class I've worked service jobs that have nothing to do with code — tire bays and golf pro-shops — and both taught me the same thing: show up, do the unglamorous part right, and the rest follows.",
  ],
}
