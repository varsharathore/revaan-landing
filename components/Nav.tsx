'use client'
import { useEffect, useRef } from 'react'

const links = ['Collection', 'About', 'Craft', 'Drop']

export function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.style.background = 'rgba(248,244,239,0.88)'
        nav.style.backdropFilter = 'blur(12px)'
      } else {
        nav.style.background = 'transparent'
        nav.style.backdropFilter = 'none'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{ transition: 'background 0.4s ease, backdrop-filter 0.4s ease' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
    >
      <span
        className="font-body text-sm tracking-[0.25em] uppercase"
        style={{ color: 'var(--text-primary)', fontWeight: 300 }}
      >
        REVAAN
      </span>

      <ul className="hidden md:flex gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover-underline font-body text-xs tracking-[0.2em] uppercase"
              style={{ color: 'var(--text-muted)', fontWeight: 400 }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* SHOP CTA — high visibility, sharp border, red accent on hover */}
      <a
        href="https://berevaan.com/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs tracking-[0.22em] uppercase transition-all duration-250"
        style={{
          color: '#F8F4EF',
          background: 'var(--accent)',
          border: '1px solid var(--accent)',
          padding: '8px 18px',
          letterSpacing: '0.22em',
          fontWeight: 500,
          cursor: 'none',
          flexShrink: 0,
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--accent-bright)'
          el.style.borderColor = 'var(--accent-bright)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--accent)'
          el.style.borderColor = 'var(--accent)'
        }}
      >
        SHOP THE DROP →
      </a>
    </nav>
  )
}
