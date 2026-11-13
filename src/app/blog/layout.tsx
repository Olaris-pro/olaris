import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './blog.css'

const sans = Geist({ subsets: ['latin'], variable: '--nb-sans', display: 'swap' })
const mono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--nb-mono', display: 'swap' })

export const metadata: Metadata = {
  icons: { icon: '/olaris-mark.svg' },
}

// The Olaris mark, as drawn in the homepage header
function Mark() {
  return (
    <svg viewBox="0 0 44 56" fill="none" aria-hidden="true">
      <path d="M22 6 A20 20 0 0 0 22 50" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M22 6 A20 20 0 0 1 22 50" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7" />
      <circle cx="5" cy="28" r="2" fill="#fff" />
      <circle cx="39" cy="28" r="2" fill="#fff" />
      <circle cx="22" cy="6" r="2.5" fill="#fff" />
      <circle cx="22" cy="50" r="2.5" fill="#fff" />
      <circle cx="22" cy="28" r="3" fill="#fff" />
    </svg>
  )
}

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`nb ${sans.variable} ${mono.variable}`}>
      <a className="skip mono" href="#content">
        Skip to content
      </a>
      <header className="bar">
        <div className="wrap cols">
          <a className="brand" href="/" aria-label="Olaris Consulting, home">
            <Mark />
            <span className="mono">Olaris Consulting Ltd.</span>
          </a>
          <nav className="nav mono" aria-label="Sections">
            <a href="/#services">Services</a>
            <a href="/#approach">Approach</a>
            <a href="/#work">Work</a>
          </nav>
          <div className="nav nav-b mono">
            <div className="links">
              <a href="/blog" aria-current="true">
                Insights
              </a>
              <a href="https://orbisio.co.uk" target="_blank" rel="noopener">
                Orbis IO ↗
              </a>
              <a href="https://linkedin.com/company/olaris-consulting-limited" target="_blank" rel="noopener">
                LinkedIn ↗
              </a>
            </div>
            <a className="btn mono" href="/#contact">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="content">{children}</main>

      <footer className="band stone foot">
        <div className="wrap inner mono">
          <span>© 2026 Olaris Consulting Limited</span>
          <nav aria-label="Footer">
            <a href="/blog">Insights</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
