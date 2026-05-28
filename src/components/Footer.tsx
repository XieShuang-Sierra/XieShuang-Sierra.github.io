import { siteConfig } from '../config/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500 sm:px-6">
        <p>
          © {year} {siteConfig.name} · 个人作品集
        </p>
      </div>
    </footer>
  )
}
