'use client'

import { useEffect, useState } from 'react'

const email = 'mihiranan@gmail.com'

export function ContactSection() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')

  useEffect(() => {
    if (copyState !== 'copied') return
    const timeout = window.setTimeout(() => setCopyState('idle'), 2500)
    return () => window.clearTimeout(timeout)
  }, [copyState])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-32">
      <div data-reveal className="contact-panel rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center shadow-[0_20px_50px_-40px_rgba(15,23,42,0.3)] sm:px-10">
        <p className="section-eyebrow">Get in touch</p>
        <h2 id="contact-heading" className="text-3xl font-semibold text-[var(--text-strong)]">
          Let’s build something useful.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[var(--text-muted)]">
          Have a software engineering opportunity or a project in mind? Let’s talk.
        </p>

        <div className="contact-email">
          <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
          <button type="button" onClick={copyEmail} className="copy-email-button" aria-label="Copy email address">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              {copyState === 'copied' ? <path d="m5 12 4 4L19 6" /> : <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /></>}
            </svg>
            {copyState === 'copied' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <p role="status" aria-live="polite" className="copy-status">
          {copyState === 'copied' ? 'Email address copied.' : copyState === 'error' ? 'Couldn’t copy. Select the email address to copy it manually.' : '\u00a0'}
        </p>

        <div className="contact-socials">
          <a href="https://github.com/Mihir-A" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.45.1 2.71.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0012 2z" /></svg>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href="https://www.linkedin.com/in/mihirananthateeerta/" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.78v1.71h.05c.53-.98 1.8-2.02 3.7-2.02 3.96 0 4.7 2.6 4.7 5.99V21H17v-5.92c0-1.41-.03-3.23-2.07-3.23-2.07 0-2.39 1.53-2.39 3.11V21H9z" /></svg>
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
