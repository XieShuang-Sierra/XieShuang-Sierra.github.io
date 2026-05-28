import { useState, type FormEvent } from 'react'
import { siteConfig } from '../config/site'
import { Section } from './Section'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

function SocialLinks() {
  const { github, linkedin } = siteConfig.social
  if (!github && !linkedin) return null

  return (
    <div className="mt-6">
      <h3 className="mb-3 font-semibold text-slate-900">社交链接</h3>
      <div className="flex flex-wrap items-center gap-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            aria-label="GitHub"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A8.995 8.995 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()

    if (!name || !email || !message) {
      setStatus('error')
      setErrorMsg('请填写所有必填项')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `作品集留言 - ${name}`,
          _replyto: email,
          _captcha: 'false',
        }),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const body = await res.json().catch(() => ({}))
        setErrorMsg((body as { error?: string }).error ?? '提交失败，请稍后重试')
        setStatus('error')
      }
    } catch {
      setStatus('error')
      setErrorMsg('网络错误，请检查连接后重试')
    }
  }

  return (
    <Section
      id="contact"
      title="联系我"
      subtitle="欢迎交流实习机会或合作"
      className="bg-white"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="font-semibold text-slate-900">直接联系</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <span className="text-slate-500">邮箱：</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-brand-600 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <SocialLinks />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          noValidate
        >
          <h3 className="font-semibold text-slate-900">留言表单</h3>
          <p className="mt-1 text-sm text-slate-500">
            提交后留言将发送至我的邮箱。若发送失败，请直接
            <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
              发邮件
            </a>
            联系。
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                留言 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
          </div>

          {status === 'success' && (
            <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800" role="status">
              已发送，我会尽快回复您，感谢联系！
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-medium text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'loading' ? '发送中…' : '发送留言'}
          </button>
        </form>
      </div>
    </Section>
  )
}
