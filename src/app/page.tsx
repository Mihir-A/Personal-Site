'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
  imageSrc?: string
  imageAlt?: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Chess AI Engine',
    description:
      'A custom-built chess algorithm using minimax search and heuristics, consistently ranking in the top 1% of online engines.',
    githubUrl: 'https://github.com/Mihir-A/Chess-AI',
    imageSrc: '/chess-ai.png',
    imageAlt: 'Screenshot of the Chess AI interface',
    tags: ['C++', 'SFML', 'Minimax', 'Heuristics'],
  },
  {
    title: 'Healthy Messages',
    description:
      'A TensorFlow model that detects harmful comments with 90% accuracy and integrates with Instagram and YouTube APIs.',
    githubUrl: 'https://github.com/Mihir-A/Healthy-Messages',
    imageSrc: '/healthymessages.png',
    imageAlt: 'Healthy Messages interface',
    tags: ['TensorFlow', 'APIs', 'Python'],
  },
  {
    title: 'Cadence',
    description:
      'An interview prep platform that delivers AI-generated feedback on technical accuracy, pauses, filler words, and confidence.',
    githubUrl: 'https://github.com/Mihir-A/Cadence',
    liveUrl: 'https://cadence.mihirdev.com',
    imageSrc: '/cadence.png',
    imageAlt: 'Code editor with highlighted syntax',
    tags: ['Next.js', 'Tailwind CSS', 'Gemini', 'TwelveLabs'],
  },
  {
    title: 'Doodle Guesser',
    description:
      'A fast-paced drawing game where a 93,387-parameter CNN guesses prompts in real time, achieving 95%+ accuracy across 11 classes and built for easy category expansion.',
    githubUrl: 'https://github.com/Mihir-A/Doodle-Guesser',
    imageSrc: '/doodleguesser.png',
    imageAlt: 'Doodle Guesser game interface',
    tags: ['CNN', 'TensorFlow', 'Python'],
  },
]

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'JavaScript', 'HTML/CSS', 'Java', 'C#'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Unity'],
  },
  {
    category: 'Developer Tools',
    items: [
      'Git',
      'Docker',
      'Google Cloud Platform',
      'VS Code',
      'Visual Studio',
      'Fusion 360',
    ],
  },
  {
    category: 'Libraries',
    items: [
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Pygame',
      'SFML',
    ],
  },
]

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  const socialLinks = useMemo(
    () => [
      {
        href: 'https://github.com/Mihir-A',
        label: 'GitHub',
        icon: (
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.45.1 2.71.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0012 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        href: 'https://www.linkedin.com/in/mihirananthateeerta/',
        label: 'LinkedIn',
        icon: (
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.78v1.71h.05c.53-.98 1.8-2.02 3.7-2.02 3.96 0 4.7 2.6 4.7 5.99V21H17v-5.92c0-1.41-.03-3.23-2.07-3.23-2.07 0-2.39 1.53-2.39 3.11V21H9z" />
          </svg>
        ),
      },
      {
        href: 'https://www.instagram.com/mihir_.a/',
        label: 'Instagram',
        icon: (
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <rect
              x="3.75"
              y="3.75"
              width="16.5"
              height="16.5"
              rx="4.5"
              ry="4.5"
            />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" />
          </svg>
        ),
      },
    ],
    [],
  )

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)',
    ).matches
    const nextTheme =
      storedTheme === 'light' || storedTheme === 'dark'
        ? storedTheme
        : prefersDark
          ? 'dark'
          : 'light'

    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }, [])

  useEffect(() => {
    if (!theme) {
      return
    }

    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const isDark = theme === 'dark'
  const handleThemeToggle = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }
  const heroHeading = "Hi, I'm Mihir Ananthateerta"
  const heroWords = heroHeading.split(' ')
  const heroDescription =
    'UCSB Computer Science Junior with experience in web development, embedded systems, and Machine Learning. Passionate about creating impactful tech solutions.'
  const heroDescriptionDelay = heroWords.length * 90 + 180

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--pattern-dot)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[color:var(--accent-soft)]/50 blur-3xl motion-safe:animate-[floatSlow_12s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-[color:var(--accent-soft)]/35 blur-3xl motion-safe:animate-[floatSlow_14s_ease-in-out_infinite]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--surface)]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a
            href="#hero"
            className="text-base font-semibold text-[var(--text-strong)]"
          >
            <span className="text-[var(--text-strong)]">Mihir</span>{" "}
            <span className="text-[var(--accent)]">Ananthateerta</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[var(--text-muted)] md:flex">
            <a
              href="#hero"
              className="transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
            >
              Home
            </a>
            <a
              href="#skills"
              className="transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
            >
              Contact
            </a>
          </div>
          <button
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            onClick={handleThemeToggle}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            {isDark ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3.5v2.25M12 18.25v2.25M3.5 12h2.25M18.25 12h2.25M5.7 5.7l1.6 1.6M16.7 16.7l1.6 1.6M18.3 5.7l-1.6 1.6M7.3 16.7l-1.6 1.6"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-6">
        {/* Hero Section */}
        <section id="hero" className="scroll-mt-32 relative">
          <div className="flex min-h-[calc(100vh-72px)] items-center">
            <div className="mx-auto flex max-w-4xl -translate-y-6 flex-col items-center text-center">
              <h1 className="mt-5 text-4xl font-semibold text-[var(--text-strong)] sm:text-5xl lg:text-6xl">
                <span className="sr-only">{heroHeading}</span>
                {heroWords.map((word, index) => {
                  const accentWord = word === 'Mihir'

                  return (
                    <span
                      key={`${word}-${index}`}
                      aria-hidden="true"
                      className={`inline-block opacity-0 motion-reduce:opacity-100 motion-safe:animate-[fadeRight_0.6s_ease-out_forwards] ${accentWord ? 'text-[var(--accent)]' : ''} ${index === heroWords.length - 1 ? '' : 'mr-2'}`}
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      {word}
                    </span>
                  )
                })}
              </h1>
              <p
                className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] opacity-0 motion-reduce:opacity-100 motion-safe:animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${heroDescriptionDelay}ms` }}
              >
                {heroDescription}
              </p>
              <div
                className="mt-8 flex flex-wrap justify-center gap-4 opacity-0 motion-reduce:opacity-100 motion-safe:animate-[fadeUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${heroDescriptionDelay}ms` }}
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
                >
                  View My Work
                </a>
                <a
                  href="https://cdn.mihirdev.com/resume.pdf"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[color:var(--accent-soft)]/25"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 flex flex-col items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-[var(--text-subtle)] motion-safe:animate-[scrollBounce_2.2s_ease-in-out_infinite]">
            <span>Scroll</span>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m0 0l-5-5m5 5l5-5"
                />
              </svg>
            </span>
          </div>

        </section>

        {/* Featured Projects */}
        <section id="projects" className="scroll-mt-32">
          <div className="mx-auto max-w-3xl text-center motion-safe:animate-[fadeUp_0.8s_ease-out_forwards] motion-safe:[animation-delay:80ms]">
            <h2 className="text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
              Featured <span className="text-[var(--accent)]">Projects</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              These projects reflect my approach to writing clean, maintainable
              code and building user-friendly interfaces. I’ve focused on
              practical solutions that balance performance, usability, and
              reliability.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map(
              (
                {
                  title,
                  description,
                  githubUrl,
                  liveUrl,
                  imageSrc,
                  imageAlt,
                  tags,
                },
                index,
              ) => {
                const hasImage = Boolean(imageSrc)
                const primaryUrl = liveUrl

                return (
                  <article
                    key={title}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-35px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-35px_rgba(37,99,235,0.3)] motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-muted)]">
                      {hasImage ? (
                        <Image
                          src={imageSrc}
                          alt={imageAlt ?? `${title} preview`}
                          fill
                          sizes="(min-width: 1024px) 32rem, (min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm font-medium text-[var(--text-subtle)]">
                          Project visual coming soon
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-4 px-6 py-6">
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-[var(--text-strong)]">
                          {title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                          {description}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        {githubUrl ? (
                          <a
                            href={githubUrl}
                            aria-label={`${title} GitHub`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-muted)] transition hover:text-[var(--text-strong)]"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-6 w-6"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.45.1 2.71.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0012 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        ) : null}

                        {primaryUrl ? (
                          <a
                            href={primaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold leading-none text-white shadow-sm shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
                          >
                            Live Link
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-4 w-4 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.25"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14m-7-7 7 7-7 7"
                              />
                            </svg>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                )
              },
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[var(--text-strong)]">
              Skills
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              A snapshot of tools and technologies I work with.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {skills.map(({ category, items }, index) => (
              <article
                key={category}
                className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_40px_-35px_rgba(15,23,42,0.35)] motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-2 text-xs font-semibold text-[var(--text-muted)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-center shadow-[0_20px_50px_-40px_rgba(15,23,42,0.3)] motion-safe:animate-[fadeUp_0.8s_ease-out_forwards] motion-safe:[animation-delay:120ms] sm:px-10">
            <h2 className="text-3xl font-semibold text-[var(--text-strong)]">
              Get in Touch
            </h2>
            <p className="mt-4 text-[var(--text-muted)]">
              I’m always open to collaboration or new opportunities. Let’s
              connect!
            </p>
            <a
              href="mailto:mihiranan@gmail.com"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
            >
              Contact Me
            </a>

            <div className="mt-8 flex justify-center gap-6 text-[var(--text-muted)]">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
