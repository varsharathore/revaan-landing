'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'

/*
 * REVAAN letterform staging — the brief move.
 * Letters fill the viewport. Products break THROUGH the letter gaps.
 * One CTA. Nothing else competing.
 *
 * Letter gap positions (25vw font, at 1440px ≈ 360px/char):
 *   R  E  V  A  A  N
 *   0  1  2  3  4  5 (character index)
 *   V gap (index 2) ≈ 33-44% from left
 *   A gap (index 3) ≈ 48-60% from left
 */
export function LetterformsSection() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height: '100vh', background: 'var(--bg)', padding: 0 }}
    >
      {/* REVAAN — centered, bleeds both edges */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2
          className="select-none pointer-events-none"
          style={{
            fontFamily: BEBAS,
            fontWeight: 400,
            fontSize: 'clamp(200px, 44vw, 9999px)',
            WebkitTextStroke: '3px rgba(20,18,16,0.5)',
            color: 'transparent',
            whiteSpace: 'nowrap',
            letterSpacing: '0.03em',
            lineHeight: 1,
            margin: '0 -12vw',
          }}
          aria-label="Revaan"
        >
          REVAAN
        </h2>
      </motion.div>

      {/* Product 1 — inside V gap (~35% from left, upper half) */}
      <motion.a
        href="https://berevaan.com/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute"
        style={{ left: '22%', top: '20%', width: 'clamp(200px, 24vw, 340px)', zIndex: 10, cursor: 'none' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
      >
        <div
          className="relative overflow-hidden"
          style={{ width: '100%', aspectRatio: '3/4', background: 'transparent' }}
        >
          <Image
            src="/images/png-iphone/rebel-woman-solo.png"
            alt="Rebel With Revaan tee"
            fill
            className="object-contain img-blend"
            sizes="230px"
          />
          {/* Price pill — sticker, rotated, corner-anchored */}
          <div style={{
            position: 'absolute', top: '-6px', right: '-6px',
            background: 'rgba(200,55,26,0.90)',
            borderRadius: 999,
            padding: '4px 8px',
            transform: 'rotate(-2deg)',
            display: 'flex', alignItems: 'center', gap: 3,
          }}>
            <span className="font-body" style={{ color: '#fff', fontSize: 9, fontWeight: 500, letterSpacing: '0.05em' }}>₹2,199</span>
            <span style={{ color: '#fff', fontSize: 8 }}>↗</span>
          </div>
        </div>
      </motion.a>

      {/* Product 2 — inside A gap (~55% from left, lower start) */}
      <motion.a
        href="https://berevaan.com/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute"
        style={{ left: '52%', top: '30%', width: 'clamp(170px, 20vw, 290px)', zIndex: 10, cursor: 'none' }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.35 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
      >
        <div
          className="relative overflow-hidden"
          style={{ width: '100%', aspectRatio: '3/4', background: 'transparent' }}
        >
          <Image
            src="/images/png-iphone/wavy-duo.png"
            alt="Wavy Core tee"
            fill
            className="object-contain img-blend"
            sizes="190px"
          />
          <div style={{
            position: 'absolute', top: '-6px', right: '-6px',
            background: 'rgba(200,55,26,0.90)',
            borderRadius: 999,
            padding: '4px 8px',
            transform: 'rotate(-2deg)',
            display: 'flex', alignItems: 'center', gap: 3,
          }}>
            <span className="font-body" style={{ color: '#fff', fontSize: 9, fontWeight: 500, letterSpacing: '0.05em' }}>₹2,199</span>
            <span style={{ color: '#fff', fontSize: 8 }}>↗</span>
          </div>
        </div>
      </motion.a>

      {/* Single CTA — one brand mark, no competition */}
      <motion.a
        href="https://berevaan.com/collections/all"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body tracking-[0.18em] uppercase absolute"
        style={{
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--accent)',
          color: '#F8F4EF',
          padding: '10px 28px',
          borderRadius: 999,
          fontSize: 11,
          fontWeight: 500,
          cursor: 'none',
          whiteSpace: 'nowrap',
          zIndex: 20,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-bright)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
      >
        SHOP THE COLLECTION →
      </motion.a>
    </section>
  )
}
