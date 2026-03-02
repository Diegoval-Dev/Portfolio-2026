export type Language = 'en' | 'es'

export type ProjectCategory = 'AI' | 'Backend' | 'Systems' | 'Compilers' | 'Cloud'

export interface Project {
  id: string
  title: string
  shortDesc: { en: string; es: string }
  longDesc: { en: string; es: string }
  category: ProjectCategory[]
  tags: string[]
  github?: string
  githubLabel?: string
  noRepo?: boolean
  noRepoNote?: { en: string; es: string }
  featured: boolean
  year: string
}

export interface SkillCategory {
  id: string
  label: { en: string; es: string }
  icon: string
  skills: string[]
}

export interface Experience {
  id: string
  role: { en: string; es: string }
  company: string
  period: { en: string; es: string }
  location: string
  type: { en: string; es: string }
  description: { en: string; es: string }
  achievements: { en: string[]; es: string[] }
  tags: string[]
  current: boolean
}

export interface Education {
  id: string
  degree: { en: string; es: string }
  institution: string
  period: string
  location: string
  description: { en: string; es: string }
  highlights: { en: string[]; es: string[] }
}
