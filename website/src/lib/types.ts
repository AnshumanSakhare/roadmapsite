export type Level = {
  id: number
  name: string
  title: string
  description: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  topics: string[]
  learningOutcomes: string[]
  projects: string[]
  checkpoints: number
  estimatedHours: number
  color: string
}

export type Project = {
  id: string
  name: string
  description: string
  level: number | number[]
  category: string
  tags: string[]
  folder: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  status: 'Complete' | 'In Progress' | 'Starter'
}

export type SpecializationPath = {
  id: string
  name: string
  title: string
  description: string
  duration: string
  skills: string[]
  projects: string[]
  targetRole: string
}

export type Checkpoint = {
  id: string
  level: number
  number: number
  title: string
  description: string
  tasks: string[]
  validationCriteria: string[]
  portfolioPiece: string
}
