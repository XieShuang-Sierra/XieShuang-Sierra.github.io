import { profile } from '../data/resume'
import { siteConfig } from '../config/site'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-amber-50/40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div
            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-3xl font-bold text-white shadow-lg shadow-brand-600/25"
            aria-hidden
          >
            {profile.name.charAt(0)}
          </div>

          <div className="animate-fade-up max-w-3xl">
            <p className="mb-2 text-sm font-medium tracking-wide text-brand-600 uppercase">
              {profile.seeking}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-slate-600 md:text-xl">
              {profile.tagline}
            </p>
            <p className="mt-2 text-base font-medium text-slate-700">
              {profile.headline}
            </p>
            <p className="mt-4 text-sm text-slate-500">
              {profile.gender} · {profile.age} 岁 ·{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
                {siteConfig.email}
              </a>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-brand-700"
              >
                查看经历
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
