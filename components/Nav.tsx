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
        nav.style.background = 'rgba(10,10,10,0.8)'
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

      <a
        href="https://berevaan.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs tracking-[0.2em] uppercase border px-4 py-2 transition-colors duration-300"
        style={{
          color: 'var(--text-primary)',
          borderColor: 'rgba(255,255,255,0.2)',
        }}
        onMouseEnter={e => {
          ;(e.currentTarget as HTMLElement).style.background = 'var(--accent)'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'
        }}
        onMouseLeave={e => {
          ;(e.currentTarget as HTMLElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'
        }}
      >
        Shop →
      </a>
    </nav>
  )
}
