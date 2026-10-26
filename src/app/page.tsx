'use client'

import { useEffect, useRef, useState } from 'react'
import { ProjectCover, type CoverKind } from '@/components/project-cover'
import { ContactSection } from '@/components/contact-section'
import { usePortfolioMotion } from '@/hooks/use-portfolio-motion'

type Project = {
  title: string
  description: string
  githubUrl?: string
  liveUrl?: string
  liveLabel?: string
  cover: CoverKind
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Chess AI Engine',
    description:
      'A C++ chess engine with legal move validation, minimax search, and alpha-beta pruning. Consistently rated 1800+ Elo, placing it in the top 5% of online players.',
    githubUrl: 'https://github.com/Mihir-A/Chess-AI',
    liveUrl: '/chess',
    liveLabel: 'Play Chess',
    cover: 'chess',
    tags: ['C++', 'SDL2', 'Minimax', 'Heuristics'],
  },
  {
    title: 'Healthy Messages',
    description:
      'Detect harmful comments with a TensorFlow model trained on 10K+ social media posts, reaching 90% test accuracy. Integrated with Instagram and YouTube APIs.',
    githubUrl: 'https://github.com/Mihir-A/Healthy-Messages',
    cover: 'messages',
    tags: ['TensorFlow', 'APIs', 'Python'],
  },
  {
    title: 'Cadence',
    description:
      'An interview practice platform with recording and playback across 100+ sessions, plus AI feedback on technical accuracy and delivery.',
    githubUrl: 'https://github.com/Mihir-A/Cadence',
    liveUrl: 'https://cadence.mihirdev.com',
    liveLabel: 'Try Cadence',
    cover: 'cadence',
    tags: ['Next.js', 'Tailwind CSS', 'Gemini', 'TwelveLabs'],
  },
  {
    title: 'Unscroll',
    description:
      'Use Instagram on iOS without an infinite Reels feed. Unscroll patches a user-supplied IPA to hide suggested Reels and stop endless scrolling.',
    githubUrl: 'https://github.com/Mihir-A/Unscroll',
    cover: 'unscroll',
    tags: ['iOS', 'Objective-C', 'Python', 'Sideloading'],
  },
  {
    title: 'Doodle Guesser',
    description:
      'A fast-paced drawing game where a 93,387-parameter CNN guesses prompts in real time, achieving 95%+ accuracy across 11 classes and built for easy category expansion.',
    githubUrl: 'https://github.com/Mihir-A/Doodle-Guesser',
    cover: 'doodle',
    tags: ['CNN', 'TensorFlow', 'Python'],
  },
]

const experience = [
  {
    company: 'Capital One',
    role: 'Software Engineering Intern',
    focus: 'Incoming',
    dates: 'Summer 2027',
    location: 'Chicago, IL',
    current: false,
    highlights: ['Incoming Summer 2027'],
    tags: [],
  },
  {
    company: 'Cloudwick',
    role: 'Software Engineering Intern',
    focus: 'AI Solutions',
    dates: 'Sep 2026 — Present',
    location: 'San Francisco, CA · Hybrid',
    current: true,
    highlights: [
      'Develop Python APIs on AWS for document ingestion and retrieval in Cloudwick’s Amorphic platform.',
      'Implement RAG pipelines with chunking, embeddings, and vector search to answer questions about documents.',
      'Build agent workflows that query document collections, invoke backend tools, and return answers with sources.',
    ],
    tags: ['Python', 'AWS', 'RAG', 'Vector Search'],
  },
  {
    company: 'Upscale AI',
    role: 'Software Engineering Intern',
    focus: 'ASIC Verification',
    dates: 'Jun 2026 — Sep 2026',
    location: 'Santa Clara, CA',
    current: false,
    highlights: [
      'Integrated scheduler RTL for a 144-port 800G switch ASIC into a cycle-accurate C++/Verilator test harness.',
      'Built CI/CD pipelines for pytest and GoogleTest regressions comparing C++ switch-model behavior against RTL.',
      'Built a traffic driver to generate realistic Ethernet workloads, exposing a scheduler fairness bug.',
      'Accelerated Verilated simulation over 5x using profiling, LLVM BOLT, compiler tuning, and multicore execution.',
    ],
    tags: ['C++', 'Verilator', 'CI/CD', 'Performance Optimization'],
  },
  {
    company: 'Neurotech Club',
    role: 'Embedded Systems Developer',
    focus: 'Student Engineering',
    dates: 'Dec 2025 — Jun 2026',
    current: false,
    highlights: [
      'Helped create a drone system enabling real-time flight control via EEG headset signal processing.',
      'Replaced HTTP over Wi-Fi with ESP-NOW on ESP32, cutting communication latency by 40% to 11 ms.',
      'Serialized and routed MAVLink command packets between ground station and flight controller.',
    ],
    tags: ['ESP32', 'ESP-NOW', 'MAVLink', 'Embedded Systems'],
  },
]

const sectionLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const skills = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'JavaScript', 'Swift', 'SystemVerilog', 'Java', 'C#'],
  },
  {
    category: 'Web & Applications',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'HTML/CSS', 'visionOS'],
  },
  {
    category: 'Infrastructure & Testing',
    items: [
      'AWS',
      'Linux',
      'Git',
      'Docker',
      'CI/CD',
      'Verilator',
      'pytest',
      'GoogleTest',
      'Google Cloud Platform',
    ],
  },
  {
    category: 'ML & Data',
    items: [
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="button-arrow h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  const rootRef = useRef<HTMLElement>(null)
  const activeSection = usePortfolioMotion(rootRef)
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

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
    'I build AI-powered applications and fast, reliable systems. Currently developing AI solutions at Cloudwick, with experience in switch ASIC verification, embedded systems, and full-stack development.'

  return (
    <main ref={rootRef} className="portfolio relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <a href="#experience" className="skip-link">Skip to experience</a>
      <header className="portfolio-header sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--surface)]/90 backdrop-blur">
        <div aria-hidden="true" className="reading-progress" />
        <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-6 py-3">
          <a
            href="#hero"
            className="text-base font-semibold text-[var(--text-strong)]"
          >
            <span className="text-[var(--text-strong)]">Mihir</span>{" "}
            <span className="text-[var(--accent)]">Ananthateerta</span>
          </a>
          <div className="order-last flex w-full items-center justify-between gap-3 border-t border-[var(--border)] pt-3 text-sm font-medium text-[var(--text-muted)] md:order-none md:w-auto md:gap-6 md:border-0 md:pt-0">
            {sectionLinks.map(({ href, label }) => (
              <a key={href} href={href} aria-current={activeSection === href.slice(1) ? 'location' : undefined} className="nav-link py-1">
                {label}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
            onClick={handleThemeToggle}
            className="theme-toggle flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
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
        <section id="hero" className="hero-section scroll-mt-32 relative">
          <div aria-hidden="true" className="hero-atmosphere" />
          <div className="flex items-center py-16 sm:py-24 lg:py-28">
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <p className="hero-eyebrow text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-sm">
                UC San Diego CS
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[var(--text-strong)] sm:text-5xl lg:text-6xl">
                <span className="sr-only">{heroHeading}</span>
                {heroWords.map((word, index) => {
                  const accentWord = word === 'Mihir'

                  return (
                    <span
                      key={`${word}-${index}`}
                      aria-hidden="true"
                      className={`hero-word inline-block ${accentWord ? 'hero-name text-[var(--accent)]' : ''} ${index === heroWords.length - 1 ? '' : 'mr-2'}`}
                      style={{ animationDelay: `${120 + index * 85}ms` }}
                    >
                      {word}
                    </span>
                  )
                })}
              </h1>
              <p
                className="hero-description mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]"
              >
                {heroDescription}
              </p>
              <div
                className="hero-actions mt-8 flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#experience"
                  className="action-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--on-accent)] shadow-sm shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
                >
                  View Experience <ArrowIcon />
                </a>
                <a
                  href="https://cdn.mihirdev.com/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent-soft)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[color:var(--accent-soft)]/25"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-32">
          <div data-reveal className="section-intro">
            <p className="section-eyebrow">Where I’ve contributed</p>
            <h2 id="experience-heading" className="text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
              Work & <span className="text-[var(--accent)]">Experience</span>
            </h2>
          </div>
          <ol className="experience-list">
            {experience.map((job) => (
              <li key={job.company} className="experience-item">
                <article data-reveal className="experience-entry" aria-label={`${job.role} at ${job.company}`}>
                  <div className="experience-meta">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-[var(--text-strong)]">{job.company}</h3>
                      {job.current && <span className="current-badge">Current</span>}
                    </div>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{job.dates}</p>
                    {job.location && <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{job.location}</p>}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{job.focus}</p>
                    <h4 className="mt-2 text-xl font-semibold text-[var(--text-strong)]">{job.role}</h4>
                    {job.highlights.length > 0 && <ul className="experience-highlights">
                      {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>}
                    {job.tags.length > 0 && <ul aria-label="Technologies and focus areas" className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">{tag}</li>
                      ))}
                    </ul>}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="scroll-mt-32">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl">
              Featured <span className="text-[var(--accent)]">Projects</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              Independent builds in AI, full-stack development, and algorithms.
              Explore the code or try a live demo.
            </p>
          </div>

          <div className="project-grid mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map(
              (
                {
                  title,
                  description,
                  githubUrl,
                  liveUrl,
                  liveLabel,
                  cover,
                  tags,
                },
                index,
              ) => {
                const primaryUrl = liveUrl

                return (
                  <article
                    key={title}
                    data-reveal data-reveal-delay={(index % 3) * 70}
                    className="project-card group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-35px_rgba(15,23,42,0.2)]"
                  >
                    <ProjectCover kind={cover} />

                    <div className="project-tags flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="project-title text-xl font-semibold text-[var(--text-strong)]">
                      {title}
                    </h3>
                    <p className="project-description text-sm leading-relaxed text-[var(--text-muted)]">
                      {description}
                    </p>

                    <div className="project-actions flex items-center justify-between gap-3">
                      {githubUrl ? (
                        <a
                          href={githubUrl}
                          aria-label={`${title} source on GitHub`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-source-link inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-strong)]"
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
                          Source
                        </a>
                      ) : null}

                      {primaryUrl ? (
                        <a
                          href={primaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold leading-none text-[var(--on-accent)] shadow-sm shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)]"
                        >
                          {liveLabel}
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="button-arrow h-4 w-4 shrink-0"
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
                  </article>
                )
              },
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[var(--text-strong)]">
              Skills
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              A snapshot of tools and technologies I work with.
            </p>
          </div>

          <div data-reveal className="skills-list">
            {skills.map(({ category, items }) => (
              <article key={category} className="skills-row">
                <h3 className="text-sm font-semibold text-[var(--text-strong)]">
                  {category}
                </h3>
                <ul className="skills-items" aria-label={category}>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </div>
    </main>
  )
}
