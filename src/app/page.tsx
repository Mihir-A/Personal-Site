'use client'

import { useMemo } from 'react'

type Project = {
  title: string
  description: string
  githubUrl?: string
  imageSrc?: string
  imageAlt?: string
}

const projects: Project[] = [
  {
    title: 'Chess AI Engine',
    description:
      'A custom-built chess algorithm using minimax search and heuristics, consistently ranking in the top 1% of online engines.',
    githubUrl: 'https://github.com/yourusername/chess-ai-engine',
    imageSrc: '/chess-ai.png',
    imageAlt: 'Screenshot of the Chess AI interface',
  },
  {
    title: 'Healthy Messages',
    description:
      'A TensorFlow model that detects harmful comments with 90% accuracy and integrates with Instagram and YouTube APIs.',
    githubUrl: undefined,
    imageSrc:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Abstract visualization of social media messages',
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
  const socialLinks = useMemo(
    () => [
      {
        href: 'https://github.com/yourusername',
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
        href: 'https://www.linkedin.com/in/yourusername',
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
        href: 'https://www.instagram.com/yourusername',
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-wide text-pink-300 transition hover:text-pink-200"
          >
            Mihir Ananthateerta
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a
              href="#projects"
              className="transition hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="transition hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="transition hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              className="rounded-full border border-pink-500 px-4 py-1.5 text-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-500/10 hover:text-pink-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        {/* Hero Section */}
        <section
          id="hero"
          className="scroll-mt-32 flex flex-col-reverse gap-12 lg:flex-row lg:items-center"
        >
          <div className="order-1 mx-auto flex w-full max-w-sm flex-1 justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 translate-y-6 translate-x-6 rounded-[2.5rem] border-2 border-pink-600/70" />
              <div className="relative rounded-[2.5rem] border-2 border-pink-500/80 bg-slate-900/70 p-3 shadow-2xl">
                <div className="aspect-[3/4] w-full rounded-[2rem] bg-slate-800/80 backdrop-blur-sm" />
                <p className="mt-4 text-center text-sm font-medium text-slate-400">
                  Your photo could live here ✨
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 flex-1 text-center lg:order-1 lg:text-left">
            <p className="text-sm uppercase tracking-[0.4em] text-pink-400">
              Hello! I am
            </p>
            <h1 className="mt-4 text-5xl font-semibold sm:text-6xl">
              Mihir Anantahteerta
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-pink-400 sm:text-2xl">
              Software Engineer • AI & Robotics Enthusiast
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              I’m a Computer Science student driven by a passion for intelligent
              systems, teaching, and robotics. I build tools that help people
              learn, create, and think in new ways.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="/resume.pdf"
                className="rounded-full border border-pink-500 px-6 py-3 font-medium text-pink-300 transition hover:-translate-y-0.5 hover:bg-pink-500/10 hover:text-pink-100"
              >
                Get my resume
              </a>
              <a
                href="#projects"
                className="rounded-full bg-pink-500 px-6 py-3 font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-pink-400"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="scroll-mt-32 space-y-12">
          <h2 className="text-center text-3xl font-semibold">
            Featured Projects
          </h2>

          <div className="space-y-10">
            {projects.map(
              ({ title, description, githubUrl, imageSrc, imageAlt }) => {
                const hasImage = Boolean(imageSrc)

                return (
                  <article
                    key={title}
                    className="group flex flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg transition hover:border-pink-500/60 hover:shadow-pink-500/10 lg:flex-row lg:items-stretch lg:p-8"
                  >
                    <div className="flex-1 max-w-md">
                      {hasImage ? (
                        <div className="aspect-square overflow-hidden rounded-2xl border border-pink-500/40 shadow-lg shadow-pink-500/20 transition group-hover:border-pink-400">
                          <img
                            src={imageSrc}
                            alt={imageAlt ?? `${title} preview`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900 text-sm font-medium text-slate-500">
                          Project visual coming soon
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-6 text-left lg:text-left">
                      <div>
                        <header className="flex flex-col gap-2">
                          <h3 className="text-2xl font-semibold text-pink-300 group-hover:text-pink-200">
                            {title}
                          </h3>
                          <span className="h-1 w-16 rounded-full bg-pink-500/60" />
                        </header>
                        <p className="mt-4 text-slate-300 leading-relaxed">
                          {description}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        {githubUrl ? (
                          <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-pink-500 px-5 py-2 text-sm font-medium text-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-500/10 hover:text-pink-100"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-5 w-5"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02a9.56 9.56 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.41.2 2.45.1 2.71.64.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0012 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            View Code
                          </a>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-dashed border-slate-700 px-5 py-2 text-sm text-slate-400">
                            Repo coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                )
              },
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32 space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Skills</h2>
            <p className="mt-3 text-slate-300">
              A snapshot of tools and technologies I work with.
            </p>
          </div>

          <div className="space-y-8">
            {skills.map(({ category, items }) => (
              <article key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-300">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex items-center rounded-xl border border-pink-600/40 bg-slate-900/70 px-4 py-2 text-sm font-medium text-pink-200 shadow-sm shadow-pink-500/10 transition hover:border-pink-400 hover:text-pink-100">
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
        <section id="contact" className="scroll-mt-32 text-center">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-slate-300">
            I’m always open to collaboration or new opportunities. Let’s
            connect!
          </p>
          <a
            href="mailto:youremail@example.com"
            className="mt-6 inline-block rounded-full bg-pink-500 px-6 py-3 font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-pink-400"
          >
            Contact Me
          </a>

          <div className="mt-8 flex justify-center gap-6 text-slate-300">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-pink-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
