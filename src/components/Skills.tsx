import { skillGroups } from '../data/resume'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" title="个人优势" subtitle="数据敏感 · 沟通组织 · 外语能力">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="font-semibold text-slate-900">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-800"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
