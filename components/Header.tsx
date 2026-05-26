'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'New Drops', href: '#' },
  { label: 'T-Shirts', href: '#' },
  { label: 'Oversized', href: '#' },
  { label: 'Bottoms', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Collections', href: '#' },
  { label: 'Sale', href: '#', sale: true },
]

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="18" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-[0_2px_16px_rgba(0,0,0,0.10)]' : 'shadow-none'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center h-[58px] md:h-[66px]">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 mr-6 lg:mr-8">
          {/* REPLACE: swap with actual logo when available */}
          <Image
            src="/images/logo.png"
            alt="REVAAN"
            width={130}
            height={44}
            className="h-8 md:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[12.5px] xl:text-[13px] font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-50 ${
                link.sale ? 'text-[#E84A10]' : 'text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
          <button
            className="hidden md:flex w-9 h-9 items-center justify-center text-black hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            className="hidden md:flex w-9 h-9 items-center justify-center text-black hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Account"
          >
            <UserIcon />
          </button>
          <button
            className="relative w-9 h-9 flex items-center justify-center text-black hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cart"
          >
            <CartIcon />
            <span className="absolute -top-0 -right-0 w-[17px] h-[17px] bg-[#E84A10] text-white text-[9px] font-black rounded-full flex items-center justify-center leading-none">
              2
            </span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-black hover:bg-gray-100 rounded-full transition-colors ml-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col bg-white px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3.5 text-sm font-semibold tracking-[0.12em] uppercase border-b border-gray-50 last:border-0 hover:text-[#E84A10] transition-colors ${
                link.sale ? 'text-[#E84A10]' : 'text-black'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-6 py-4 mt-1">
            <button className="flex items-center gap-2 text-xs font-medium text-gray-600 uppercase tracking-widest">
              <SearchIcon /> Search
            </button>
            <button className="flex items-center gap-2 text-xs font-medium text-gray-600 uppercase tracking-widest">
              <UserIcon /> Account
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
