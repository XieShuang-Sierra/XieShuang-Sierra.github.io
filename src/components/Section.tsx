import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
          )}
          <div className="mt-4 h-1 w-12 rounded-full bg-brand-600" aria-hidden />
        </header>
        {children}
      </div>
    </section>
  )
}
