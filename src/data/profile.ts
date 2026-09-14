import { asset } from '../lib/asset'

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
  resumePath: asset('/Landversicht_Jordan_Resume.pdf'),
  location: 'Rochester, NY',
  education: {
    school: 'Rochester Institute of Technology',
    degree: 'B.S. Game Design and Development',
    expected: 'Expected May 2028',
    gpa: '3.6 GPA',
    honors: [
      'Presidential Scholarship',
      "Dean's List - Spring 2025, Fall 2025, Spring 2026",
    ],
  },
  bio: [
    "I'm a Game Design & Development student at RIT who splits time between engine work and general software engineering. Most of what I build starts as a UI problem, how a player finds the menu they need, and how they might interact with a certain game mechainc. I like owning that layer end to end.",
    "Across personal projects, school teams, and game jams I always find myself coming back to the same role: the person who builds the interface and the systems underneath it, from inventory screens in Unity to a full-stack risk report website. I care about creating something that will be intuitive and beneficial to a user.",
    "Outside of class I've worked service jobs that have nothing to do with code, tire shops and golf courses. These jobs have allowed me to develop a various set of skills unique to others and an unparallel work ethic.",
  ],
}
