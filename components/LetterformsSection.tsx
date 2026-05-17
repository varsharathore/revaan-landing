'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const BEBAS  = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Cormorant", Georgia, serif'

/*
 * Three floating product cards at three different parallax speeds.
 * Philosophy §5: "different speeds = depth. Without parallax, the page feels flat."
 * Philosophy §9: price pills feel like "physical objects placed on top of the page."
 */
const cards = [
  // bg = exact pixel sample of each photo's background — no mismatched edges
  { image: '/images/rebel-1.png',     alt: 'Rebel With Revaan', price: '₹2,199', name: 'Rebel With Revaan', bg: '#F5F0E5', w: 220, h: 290, style: { top: '8%', left: '8%' },                  rotate: -2,  delay: 0,    parallaxY: [-20, 60] },
  { image: '/images/citybeats-1.jpg', alt: 'City Beats',        price: '₹1,999', name: 'City Beats',        bg: '#2C4A54', w: 200, h: 260, style: { top: '4%',  left: 'calc(50% - 100px)' }, rotate: 1,   delay: 0.12, parallaxY: [-40, 30] },
  { image: '/images/liar-1.jpg',      alt: 'F*cking Liar',      price: '₹2,199', name: 'F*cking Liar',      bg: '#EFECEA', w: 200, h: 260, style: { top: '10%', right: '8%' },                 rotate: 3,   delay: 0.22, parallaxY: [-60, 10] },
]

export function LetterformsSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  // Three scroll-tied y values — each card drifts at a different speed
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y0 = useTransform(scrollYProgress, [0, 1], cards[0].parallaxY)
  const y1 = useTransform(scrollYProgress, [0, 1], cards[1].parallaxY)
  const y2 = useTransform(scrollYProgress, [0, 1], cards[2].parallaxY)
  const cardYs = [y0, y1, y2]

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: '100vh', background: 'var(--bg)', padding: 0 }}
    >
      {/* ── Floating product cards — each drifts at its own scroll speed ── */}
      {cards.map((card, i) => (
        <motion.a
          key={i}
          href="https://berevaan.com/collections/all"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute"
          style={{
            width: card.w,
            zIndex: 20,
            cursor: 'none',
            y: cardYs[i],
            position: 'absolute',
            ...card.style,
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.85, delay: card.delay, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.04, rotate: 0, transition: { duration: 0.3 } }}
        >
          <div style={{ transform: `rotate(${card.rotate}deg)` }}>
            {/* Image — bg matches photo bg exactly, so image edge is invisible */}
            <div className="relative overflow-hidden" style={{ width: card.w, height: card.h, background: card.bg }}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover object-top"
                sizes={`${card.w}px`}
                style={{ filter: 'brightness(1.02)' }}
              />
            </div>

            {/* Price pill — like a sticker placed by hand (philosophy §9) */}
            <div
              className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1"
              style={{ background: 'var(--accent)', borderRadius: 999 }}
            >
              <span className="font-body" style={{ color: '#fff', fontSize: 9, fontWeight: 500 }}>
                {card.price}
              </span>
              <span style={{ color: '#fff', fontSize: 8 }}>↗</span>
            </div>

            <p className="font-body mt-2" style={{ color: 'var(--text-muted)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {card.name}
            </p>
          </div>
        </motion.a>
      ))}

      {/* Floating labels — faint, background layer */}
      {[
        { label: '280 GSM', pos: { top: '28%', left: '5%' } },
        { label: 'LIMITED DROPS', pos: { top: '22%', right: '5%' } },
        { label: 'SS25', pos: { bottom: '32%', left: '5%' } },
      ].map(({ label, pos }) => (
        <motion.span
          key={label}
          className="absolute font-body tracking-[0.3em] uppercase select-none"
          style={{ ...pos, color: 'rgba(255,255,255,0.18)', fontSize: 9, zIndex: 5 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {label}
        </motion.span>
      ))}

      {/* Cormorant script signature — Layer 4 */}
      <motion.span
        className="absolute"
        style={{
          fontFamily: SCRIPT,
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(32px, 4.5vw, 64px)',
          color: 'var(--accent)',
          bottom: '28%',
          right: '6%',
          zIndex: 25,
        }}
        initial={{ opacity: 0, rotate: -3 }}
        animate={inView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Revaan
      </motion.span>

      {/* ── Bottom: CTA + "REVAAN" full-bleed (Beauclaire move) ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center"
        style={{ zIndex: 15 }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="pb-5">
          <a
            href="https://berevaan.com/collections/all"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body tracking-[0.18em] uppercase rounded-full"
            style={{ background: 'var(--accent)', color: '#fff', fontSize: 12, padding: '10px 28px', cursor: 'none', fontWeight: 500 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-bright)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
          >
            SHOP THE COLLECTION →
          </a>
        </div>

        {/* "REVAAN" — Layer 1. At 22vw, clips both edges. Beauclaire BEAUCLAIRE move. */}
        <h2
          className="select-none block"
          style={{
            fontFamily: BEBAS,
            fontSize: 'clamp(100px, 22vw, 9999px)',
            WebkitTextStroke: '1.5px rgba(245,240,232,0.4)',
            color: 'transparent',
            letterSpacing: '0.05em',
            lineHeight: 0.8,
            whiteSpace: 'nowrap',
            margin: '0 -10vw',
          }}
          aria-label="Revaan"
        >
          REVAAN
        </h2>
      </motion.div>
    </section>
  )
}
