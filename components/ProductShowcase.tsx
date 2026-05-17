'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const BEBAS  = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Yellowtail", var(--font-yellowtail), cursive'

/*
 * Editorial product grid — philosophy §6.
 * "grid-template-columns: 1.2fr 0.8fr 1fr 1.1fr 0.9fr  (uneven)"
 * "align-items: end" — cards align at a common bottom floor.
 * Variable top margins create the staggered lookbook feel.
 * NOT repeat(N, 1fr). That's Shopify.
 */
const products = [
  { name: 'Rebel With Revaan Tee',      price: '₹2,199', image: '/images/rebel-1.png',     h: 440, mt: 0,   colW: 1.3,  fit: 'contain' as const, bg: '#F5F0E5', blend: false },
  { name: 'City Beats Oversized Tee',   price: '₹1,999', image: '/images/citybeats-1.jpg', h: 300, mt: 100, colW: 0.85, fit: 'cover'   as const, bg: '#2C4A54', blend: false },
  { name: 'Pulpy Oversized Tee',        price: '₹1,999', image: '/images/pulpy-2.jpg',     h: 480, mt: 0,   colW: 1.1,  fit: 'cover'   as const, bg: '#F3F1EE', blend: false },
  { name: 'Wavy Core Oversized Tee',    price: '₹2,099', image: '/images/wavy-1.jpg',      h: 360, mt: 60,  colW: 0.95, fit: 'cover'   as const, bg: '#F0EEEC', blend: false },
  { name: 'F*cking Liar Oversized Tee', price: '₹2,199', image: '/images/liar-1.jpg',      h: 400, mt: 20,  colW: 1.05, fit: 'cover'   as const, bg: '#EFECEA', blend: false },
  { name: 'Rebel With Revaan — Alt',    price: '₹2,199', image: '/images/rebel-2.png',     h: 320, mt: 80,  colW: 0.9,  fit: 'contain' as const, bg: '#B8B5B0', blend: false },
]

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  // Start parallax only when section top reaches viewport top (not before)
  // — prevents strip from being pre-shifted when section first comes into view
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'], { clamp: true })

  return (
    <section id="collection" ref={ref} style={{ background: 'var(--bg)', padding: '20px 0 0' }}>
      {/* Heading */}
      <div className="px-8 md:px-16 flex items-end gap-8 mb-10">
        <div className="relative" style={{ paddingTop: '2.5rem' }}>
          <span style={{
            fontFamily: SCRIPT,
            fontWeight: 400,
            fontSize: 'clamp(26px, 3.8vw, 52px)',
            color: 'var(--accent)',
            position: 'absolute',
            top: 0, left: 0,
          }}>
            The Drop
          </span>
          <motion.h2
            style={{
              fontFamily: BEBAS,
              // 7vw — large enough to bleed slightly on right at most viewport widths
              fontSize: 'clamp(40px, 7vw, 9999px)',
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            SS26 COLLECTION
          </motion.h2>
        </div>
        <a
          href="https://berevaan.com/collections/all"
          target="_blank" rel="noopener noreferrer"
          className="hover-underline font-body text-xs tracking-[0.2em] uppercase flex-shrink-0"
          style={{ color: 'var(--text-muted)', cursor: 'none' }}
        >
          VIEW ALL ↗
        </a>
      </div>

      {/*
       * Horizontal scroll strip with editorial uneven layout.
       * Motion x parallax: scroll down → strip moves left.
       * align-items: flex-end → all cards share a common bottom floor.
       * Different marginTop per card creates the staggered lookbook composition.
       */}
      <div className="overflow-hidden pb-12">
        <motion.div
          style={{
            x,
            display: 'flex',
            gap: '20px',
            alignItems: 'flex-end',  // editorial floor alignment
            paddingLeft: '64px',
            paddingRight: '64px',
            width: 'max-content',
          }}
          data-cursor-enlarge
        >
          {products.map((p, i) => (
            <motion.a
              key={i}
              href="https://berevaan.com/collections/all"
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 group"
              // Uneven column widths — each card a different proportion of viewport
              style={{
                width: `${p.colW * 14}vw`,
                minWidth: 160,
                cursor: 'none',
                display: 'block',
                marginTop: p.mt,   // stagger: cards start at different heights
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              {/* Image — vignette dissolves edges into page bg. No visible box. */}
              <div
                className="relative overflow-hidden mb-3 transition-opacity duration-300 group-hover:opacity-90"
                style={{ height: p.h, background: p.bg }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className={`object-${p.fit} object-top ${p.blend ? 'img-blend' : ''} transition-transform duration-700 group-hover:scale-[1.04]`}
                  sizes="220px"
                  style={{ filter: 'brightness(1.08) contrast(1.02)' }}
                />
              </div>

              {/* Minimal price + name — "prices are minimal" §6 */}
              <p className="font-body text-sm" style={{ color: 'var(--text-primary)', fontWeight: 400 }}>
                {p.price}
              </p>
              <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {p.name}
              </p>
              <p className="font-body tracking-[0.12em] uppercase mt-0.5" style={{ color: 'var(--text-muted)', fontSize: 9 }}>
                240 GSM French Terry
              </p>
              <span className="font-body text-xs tracking-[0.12em] uppercase mt-1.5 inline-block"
                style={{ color: 'var(--accent)' }}>
                View Tee →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
