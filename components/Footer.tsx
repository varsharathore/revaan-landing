'use client'

const navLinks = [
  { label: 'Collection', href: 'https://berevaan.com/collections/all' },
  { label: 'About', href: '#about' },
  { label: 'Craft', href: '#craft' },
  { label: 'Drop', href: '#drop' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/berevaan_official' },
  { label: 'Facebook', href: 'https://facebook.com/people/Wear-Revaan/61584040277644/' },
  { label: 'WhatsApp', href: 'https://wa.me/917905183007' },
]

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-0 px-8 md:px-16"
      style={{ background: '#050505' }}
    >
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

        {/* Brand */}
        <div>
          <p
            className="font-script mb-1"
            style={{ fontSize: 'clamp(48px, 7vw, 90px)', color: 'var(--accent)', lineHeight: 1 }}
          >
            Revaan
          </p>
          <p
            className="font-display"
            style={{ fontSize: 'clamp(11px, 1.5vw, 18px)', color: 'var(--text-primary)', letterSpacing: '0.1em' }}
          >
            TIMELESS. FEARLESS. AUTHENTIC.
          </p>
        </div>

        {/* Links columns */}
        <div className="flex gap-16 md:gap-20">
          {/* Nav */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Explore
            </p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover-underline font-body text-xs tracking-[0.15em] uppercase"
                    style={{ color: 'var(--text-muted)', cursor: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Follow
            </p>
            <ul className="space-y-3">
              {socialLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline font-body text-xs tracking-[0.15em] uppercase"
                    style={{ color: 'var(--text-muted)', cursor: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact.revaan@gmail.com"
                  className="hover-underline font-body text-xs"
                  style={{ color: 'var(--text-muted)', cursor: 'none' }}
                >
                  contact.revaan@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917303869977"
                  className="hover-underline font-body text-xs"
                  style={{ color: 'var(--text-muted)', cursor: 'none' }}
                >
                  +91 73038 69977
                </a>
              </li>
              <li>
                <p className="font-body text-xs" style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Mon–Fri 9am–6pm<br />Sat 10am–4pm IST
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 gap-3">
        <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
          © {new Date().getFullYear()} Revaan · 489, Pathak Pura, Orai Jalaun 285001, India
        </p>
        <div className="flex gap-6">
          <a
            href="https://berevaan.com/pages/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline font-body text-xs"
            style={{ color: 'rgba(255,255,255,0.18)', cursor: 'none' }}
          >
            Terms
          </a>
          <a
            href="https://berevaan.com/pages/return-and-refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline font-body text-xs"
            style={{ color: 'rgba(255,255,255,0.18)', cursor: 'none' }}
          >
            Returns
          </a>
        </div>
      </div>

      {/* BEREVAAN bleeding off bottom */}
      <div
        className="font-display text-center select-none pointer-events-none overflow-hidden"
        style={{
          fontSize: 'clamp(80px, 18vw, 260px)',
          color: 'rgba(245,240,232,0.03)',
          lineHeight: 0.7,
          marginBottom: '-0.3em',
          letterSpacing: '0.05em',
        }}
        aria-hidden
      >
        BEREVAAN
      </div>
    </footer>
  )
}
