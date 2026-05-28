import { useState } from 'react'
import type { ExperienceItem } from '../data/resume'

type Props = {
  item: ExperienceItem
  defaultOpen?: boolean
}

export function ExperienceCard({ item, defaultOpen = false }: Props) {
  const [expanded, setExpanded] = useState(defaultOpen)

  return (
    <article className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-brand-200 hover:shadow-md">
      <div className="flex flex-col gap-4 p-6 md:flex-row md:gap-8 md:p-8">
        <div className="md:w-40 md:shrink-0">
          <time className="inline-block rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
            {item.period}
          </time>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-slate-900">{item.company}</h3>
          <p className="mt-1 font-medium text-brand-600">{item.role}</p>
          <p className="mt-3 text-slate-600 leading-relaxed">{item.summary}</p>

          {!expanded && (
            <button
              type="button"
              className="mt-4 text-sm font-medium text-brand-600 hover:text-brand-700"
              onClick={() => setExpanded(true)}
              aria-expanded={false}
            >
              展开详情 ↓
            </button>
          )}

          {expanded && (
            <div className="mt-6 space-y-6 border-t border-slate-100 pt-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  项目职责
                </h4>
                <ul className="mt-3 space-y-3">
                  {item.responsibilities.map((r) => (
                    <li key={r.label} className="text-slate-700">
                      <span className="font-medium text-slate-900">{r.label}：</span>
                      {r.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  项目成果
                </h4>
                <ul className="mt-3 list-inside list-disc space-y-2 text-slate-700">
                  {item.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-slate-500 hover:text-slate-700"
                onClick={() => setExpanded(false)}
                aria-expanded={true}
              >
                收起 ↑
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
