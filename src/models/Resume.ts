export type ResumeItem = { name: string; value: string }

export type Experience = {
  date: ExperienceDate
  position: string
  company: string
  description: string
  logo?: string
}

export type ExperienceDate = {
  simpleDate: string
  from: string
  to: string
}