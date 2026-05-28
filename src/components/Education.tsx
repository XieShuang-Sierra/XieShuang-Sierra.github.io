import { education } from '../data/resume'
import { Section } from './Section'

export function Education() {
  return (
    <Section id="education" title="教育经历">
      <ol className="relative space-y-8 border-l-2 border-brand-200 pl-8">
        {education.map((item, index) => (
          <li key={item.school} className="relative">
            <span
              className="absolute -left-[2.35rem] flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-brand-600 ring-4 ring-brand-100"
              aria-hidden
            />
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.school}</h3>
                  <p className="mt-1 text-brand-700 font-medium">
                    {item.degree} · {item.major}
                    {item.focus ? ` · ${item.focus}` : ''}
                  </p>
                </div>
                <time className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                  {item.period}
                </time>
              </div>
              {index === 0 && (
                <p className="mt-3 text-sm text-slate-500">当前在读</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
