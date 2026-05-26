'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const shopLinks = [
  { label: 'New Drops', href: '#' },
  { label: 'T-Shirts', href: '#' },
  { label: 'Oversized', href: '#' },
  { label: 'Bottoms', href: '#' },
  { label: 'Accessories', href: '#' },
  { label: 'Sale', href: '#' },
]

const helpLinks = [
  { label: 'Size Guide', href: '#' },
  { label: 'Shipping', href: '#' },
  { label: 'Returns & Exchanges', href: '#' },
  { label: 'Track Order', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Privacy Policy', href: 'https://berevaan.com/policies/privacy-policy' },
  { label: 'Return & Refund', href: 'https://berevaan.com/policies/refund-policy' },
  { label: 'Terms of Service', href: 'https://berevaan.com/policies/terms-of-service' },
  { label: 'Contact Us', href: 'https://berevaan.com/pages/contact' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.843L.057 23.25l5.554-1.455A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.497-5.243-1.368l-.375-.222-3.896 1.021 1.04-3.8-.243-.39A9.943 9.943 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

function SmileyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  )
}

const paymentBadges = ['VISA', 'MC', 'AMEX', 'UPI', 'COD']

export function ShopFooter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <footer className="bg-[#0A0A0A] text-white">

      {/* Newsletter band */}
      <div className="border-b border-white/8">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-none tracking-wide uppercase">
                First to the Drop.
              </p>
              <p className="text-white/45 text-[13px] font-body leading-relaxed mt-2 max-w-[340px]">
                Get early access to new drops, exclusive offers, and what&apos;s coming next.
              </p>
            </div>

            {submitted ? (
              <div className="flex items-center gap-2 text-[#E84A10] text-sm font-bold tracking-wide">
                <SmileyIcon />
                You're in. Stay ready.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 w-full sm:w-auto max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-white/8 border border-white/15 text-white placeholder:text-white/35 text-sm px-5 py-3.5 outline-none focus:border-[#E84A10] transition-colors min-w-0 sm:min-w-[260px]"
                />
                <button
                  type="submit"
                  className="bg-[#E84A10] hover:bg-[#C83200] text-white font-bold uppercase tracking-[0.18em] text-[11.5px] px-7 py-3.5 transition-all duration-300 group flex items-center gap-2 justify-center whitespace-nowrap"
                >
                  Join Now
                  <span className="group-hover:translate-x-1 transition-transform duration-200 leading-none">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand column */}
          <div>
            {/* REPLACE: footer logo */}
            <Image
              src="/images/logo.png"
              alt="REVAAN"
              width={120}
              height={40}
              className="h-9 w-auto object-contain invert mb-4"
            />
            <p className="text-white/45 text-[12.5px] leading-relaxed max-w-[220px] mb-4">
              Street-built. Culture-driven.<br />
              Made for those who stand out.
            </p>
            <div className="space-y-1.5 mb-6">
              <a href="mailto:contact.revaan@gmail.com" className="flex items-center gap-2 text-white/35 hover:text-white/70 text-[11.5px] transition-colors">
                <span>✉</span> contact.revaan@gmail.com
              </a>
              <a href="https://wa.me/917905183007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/35 hover:text-white/70 text-[11.5px] transition-colors">
                <span>📱</span> +91 73038 69977
              </a>
              <p className="text-white/20 text-[10.5px] leading-relaxed">
                Orai, Jalaun, Uttar Pradesh — 285001
              </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { icon: <InstagramIcon />, href: 'https://instagram.com/berevaan_official', label: 'Instagram' },
                { icon: <YoutubeIcon />, href: '#', label: 'YouTube' },
                { icon: <TwitterIcon />, href: '#', label: 'X (Twitter)' },
                { icon: <WhatsappIcon />, href: 'https://wa.me/917905183007', label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/55 hover:text-white hover:border-white/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Payment badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {paymentBadges.map((b) => (
                <span
                  key={b}
                  className="border border-white/15 text-white/50 text-[9.5px] font-bold tracking-widest px-2.5 py-1 uppercase"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h3 className="font-bold text-[10.5px] tracking-[0.2em] uppercase text-white/40 mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/65 hover:text-white text-[13px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h3 className="font-bold text-[10.5px] tracking-[0.2em] uppercase text-white/40 mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/65 hover:text-white text-[13px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-bold text-[10.5px] tracking-[0.2em] uppercase text-white/40 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/65 hover:text-white text-[13px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[11px] tracking-wide">
            © 2026 REVAAN. All rights reserved.
          </p>

          {/* "Be Unapologetic" tape sticker */}
          <div className="flex items-center gap-2 border border-white/15 px-3.5 py-1.5">
            <SmileyIcon />
            <span className="font-display text-[13px] tracking-[0.18em] text-white/60">BE UNAPOLOGETIC</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
