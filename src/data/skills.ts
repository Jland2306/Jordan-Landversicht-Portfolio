export type SkillDepth = 'shipped' | 'coursework'

export const depthLabel: Record<SkillDepth, string> = {
  shipped: 'Used in shipped projects',
  coursework: 'Coursework / self-taught',
}

export interface Skill {
  name: string
  depth: SkillDepth
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'C#', depth: 'shipped' },
      { name: 'JavaScript', depth: 'shipped' },
      { name: 'HTML', depth: 'shipped' },
      { name: 'CSS', depth: 'shipped' },
      { name: 'C++', depth: 'coursework' },
      { name: 'Python', depth: 'coursework' },
      { name: 'Java', depth: 'coursework' },
    ],
  },
  {
    title: 'Engines & Frameworks',
    skills: [
      { name: 'Unity', depth: 'shipped' },
      { name: 'Godot', depth: 'shipped' },
      { name: 'MonoGame', depth: 'shipped' },
      { name: 'Pixi.js', depth: 'shipped' },
      { name: 'Angular', depth: 'shipped' },
      { name: 'Node.js', depth: 'shipped' },
      { name: 'Express', depth: 'shipped' },
      { name: 'RESTful APIs', depth: 'shipped' },
      { name: 'Docker', depth: 'coursework' },
    ],
  },
  {
    title: 'Tools & Art',
    skills: [
      { name: 'Git / GitHub', depth: 'shipped' },
      { name: 'Maya', depth: 'shipped' },
      { name: 'Substance Painter', depth: 'shipped' },
      { name: 'Aseprite', depth: 'shipped' },
      { name: 'Visual Studio', depth: 'shipped' },
      { name: 'VS Code', depth: 'shipped' },
      { name: 'Trello', depth: 'shipped' },
      { name: 'Audacity', depth: 'coursework' },
    ],
  },
]

export const practices: string[] = [
  'UI/UX design for games',
  'Version control and team workflow',
  'Playtesting and iteration',
  'Rapid prototyping under deadline',
]

export const platforms: string[] = ['Windows', 'macOS', 'Linux', 'iOS']
