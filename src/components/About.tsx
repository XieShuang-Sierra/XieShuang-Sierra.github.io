import { profile } from '../data/resume'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" title="关于我" subtitle="产品全流程 · 数据驱动">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <p className="text-lg leading-relaxed text-slate-700">{profile.summary}</p>
      </div>
    </Section>
  )
}
