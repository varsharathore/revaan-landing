'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", var(--font-bebas), sans-serif'

export function LetterformsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    // Zero padding — letters bleed to every edge
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center"
      style={{ height: '100vh', background: 'var(--bg)', overflow: 'hidden', padding: 0 }}
    >
      {/* Atmospheric glow behind letters */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(200,55,26,0.11) 0%, transparent 65%)',
      }} />

      <motion.div
        className="relative w-full"
        style={{ textAlign: 'center' }}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/*
          22vw font-size. At 1440px viewport: 316px per character × 6 chars ≈ 1900px wide.
          Viewport is 1440px. Overflow: hidden on section clips L and R edges.
          Result: R clips left edge, N clips right edge.
        */}
        <h2
          className="select-none relative"
          style={{
            fontFamily: BEBAS,
            fontSize: '22vw',
            WebkitTextStroke: '1.5px rgba(245,240,232,0.6)',
            color: 'transparent',
            letterSpacing: '0.06em',
            lineHeight: 0.85,
            whiteSpace: 'nowrap',
            // Extend past both edges so R and N clip
            margin: '0 -8vw',
            display: 'block',
          }}
        >
          REVAAN
        </h2>

        {/* Products inside the letterforms — positioned relative to the h2 */}
        <div
          className="absolute pointer-events-none"
          style={{
            // Sits over the letter row
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4vw',
          }}
        >
          {/* Product 1 — through V/E gap */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 'clamp(120px, 14vw, 210px)',
              height: 'clamp(160px, 19vw, 290px)',
              marginTop: '-4%',
              marginLeft: '6%',
            }}
          >
            {/* Glow */}
            <div className="absolute pointer-events-none" style={{
              inset: '-40px',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(200,55,26,0.5) 0%, transparent 60%)',
              filter: 'blur(24px)',
            }} />
            <Image
              src="/images/rebel-1.png"
              alt="Rebel tee through letterform"
              fill
              className="object-contain relative z-10"
              sizes="210px"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Product 2 — through A/N gap */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 'clamp(100px, 12vw, 180px)',
              height: 'clamp(135px, 17vw, 250px)',
              marginTop: '12%',
              marginLeft: '2%',
            }}
          >
            <div className="absolute pointer-events-none" style={{
              inset: '-35px',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(200,55,26,0.45) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }} />
            <Image
              src="/images/rebel-2.png"
              alt="Rebel tee — alt"
              fill
              className="object-contain relative z-10"
              sizes="180px"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Script signature — centered below letters */}
      <motion.span
        className="font-script relative z-10 mt-4"
        style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', color: 'var(--accent)' }}
        initial={{ opacity: 0, rotate: -3 }}
        animate={inView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Revaan
      </motion.span>

      {/* SS25 bottom-left */}
      <p className="font-body tracking-[0.3em] uppercase absolute bottom-10 left-8"
        style={{ color: 'var(--text-muted)', fontSize: 10 }}>
        SS25
      </p>

      {/* CTA pill bottom-center */}
      <motion.a
        href="https://berevaan.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs tracking-[0.22em] uppercase px-8 py-3 rounded-full absolute bottom-10"
        style={{ background: 'var(--accent)', color: 'var(--text-primary)', cursor: 'none' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.7 }}
        whileHover={{ backgroundColor: '#E8431F', scale: 1.03 }}
      >
        EXPLORE THE COLLECTION →
      </motion.a>
    </section>
  )
}
