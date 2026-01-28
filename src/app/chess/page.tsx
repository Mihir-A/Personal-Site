import Link from 'next/link'

export const metadata = {
  title: 'Chess',
  description: 'Play the chess engine in the browser.',
}

export default function ChessPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(var(--pattern-dot)_1px,transparent_1px)] [background-size:26px_26px]" />
        <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-[color:var(--accent-soft)]/50 blur-3xl motion-safe:animate-[floatSlow_12s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-[color:var(--accent-soft)]/35 blur-3xl motion-safe:animate-[floatSlow_14s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-16">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--text-strong)] shadow-sm shadow-black/5 transition hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m7-7-7 7 7 7"
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="flex flex-1 items-start justify-center">
          <div className="size-[min(92vw,70vh)] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_50px_-35px_rgba(15,23,42,0.2)]">
            <iframe
              title="Chess"
              src="/chess_wasm/chess.html"
              className="block h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  )
}
