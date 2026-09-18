import Image from 'next/image'
import './project-cover.css'

export type CoverKind = 'chess' | 'messages' | 'cadence' | 'unscroll' | 'doodle'

const covers = {
  chess: { label: 'Strategy & search', alt: 'Chess AI cover featuring the complete chessboard and its 1800+ Elo rating' },
  messages: { label: 'Machine learning', alt: 'Illustration of Healthy Messages keeping a positive message and filtering a harmful comment' },
  cadence: { label: 'Interview practice', alt: 'Cadence interview recording interface in a browser frame' },
  unscroll: { label: 'Digital wellbeing', alt: 'Unscroll crossed-out infinity mark with the message: A feed with an ending' },
  doodle: { label: 'Drawing meets AI', alt: 'Doodle Guesser illustration featuring an airplane drawing and a matching airplane prediction' },
}

export function ProjectCover({ kind }: { kind: CoverKind }) {
  const { label, alt } = covers[kind]

  return (
    <div className={`project-cover cover-${kind}`} role="img" aria-label={alt}>
      <div aria-hidden="true" className="cover-artwork">
        <span className="cover-category"><span />{label}</span>

        {kind === 'chess' && (
          <>
            <div className="cover-board absolute">
              <Image src="/chess-ai.png" alt="" fill sizes="240px" className="object-contain" />
            </div>
            <div className="cover-chess-label">
              <span className="cover-small-label">CHESS AI</span>
              <strong>Think<br />ahead.</strong>
              <span className="cover-rating">1800+ <span>ELO</span></span>
            </div>
          </>
        )}

        {kind === 'messages' && (
          <>
            <div className="cover-message cover-message-positive">
              <span className="cover-avatar">M</span>
              <span><strong>You made my day.</strong><small>Positive message</small></span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>
            </div>
            <div className="cover-message cover-message-filtered">
              <span className="cover-muted-lines"><i /><i /></span>
              <span className="cover-filter-label">Filtered</span>
            </div>
            <div className="cover-shield">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 5 40 11v12c0 10-8 17-16 21C16 40 8 33 8 23V11L24 5Z" />
                <path d="m16 24 6 6 11-12" />
              </svg>
            </div>
            <span className="cover-bottom-note">A healthier conversation.</span>
          </>
        )}

        {kind === 'cadence' && (
          <>
            <div className="cover-browser">
              <div className="cover-browser-bar"><span /><span /><span /><small>cadence.mihirdev.com</small></div>
              <div className="cover-browser-image relative">
                <Image src="/cadence.png" alt="" fill sizes="(min-width: 1280px) 330px, (min-width: 768px) 440px, 90vw" className="object-cover object-top" />
              </div>
            </div>
            <div className="cover-cadence-note"><span className="cover-wave"><i /><i /><i /><i /><i /></span>Practice. Review. Improve.</div>
          </>
        )}

        {kind === 'unscroll' && (
          <>
            <div className="cover-orbit cover-orbit-outer" /><div className="cover-orbit cover-orbit-inner" />
            <div className="cover-unscroll-icon">
              <svg viewBox="0 0 200 200" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M35 100C52 63 77 63 100 100C123 137 148 137 165 100C148 63 123 63 100 100C77 137 52 137 35 100Z" stroke="#fff" strokeWidth="15" />
                <path d="m59 148 82-96" stroke="#252039" strokeWidth="29" />
                <path d="m59 148 82-96" stroke="#c4b5fd" strokeWidth="16" />
              </svg>
            </div>
            <span className="cover-bottom-note">A feed with an ending.</span>
          </>
        )}

        {kind === 'doodle' && (
          <>
            <div className="cover-sketch">
              <svg viewBox="0 0 200 200" fill="none" stroke="#414055" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m37 87 51-7 47-43c11-10 25-9 23 2-1 5-5 10-11 15l-31 35 37 33-10 12-43-21-26 26 5 24-10 8-15-31-30-14 9-11 21 6 23-24-46-1Z" />
              </svg>
              <span className="cover-pencil"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m15 4 5 5M4 20l4-1L21 6a2 2 0 0 0-5-3L3 16l-1 6Z" /></svg></span>
            </div>
            <div className="cover-prediction"><span className="cover-small-label">I SEE AN…</span><strong>Airplane</strong><span className="cover-prediction-line" /></div>
            <span className="cover-bottom-note">You draw. It guesses.</span>
          </>
        )}
      </div>
    </div>
  )
}
