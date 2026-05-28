import { experiences } from '../data/resume'
import { Section } from './Section'
import { ExperienceCard } from './ExperienceCard'

export function Experience() {
  return (
    <Section
      id="experience"
      title="实习经历"
      subtitle="AI 产品 · 策略产品 · B 端咨询"
      className="bg-white"
    >
      <div className="space-y-6">
        {experiences.map((item, i) => (
          <ExperienceCard key={item.company} item={item} defaultOpen={i === 0} />
        ))}
      </div>
    </Section>
  )
}
