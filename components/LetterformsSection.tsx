'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'

export function LetterformsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center"
      style={{
        height: '100vh',
        background: 'var(--bg)',
        // overflow:hidden clips R edge of N and L edge of R
        overflow: 'hidden',
        padding: 0,
      }}
    >
      {/* Very subtle warm glow — not a blob, just ambient atmosphere */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 50% at 50% 50%, rgba(200,55,26,0.07) 0%, transparent 65%)',
      }} />

      <motion.div
        className="relative w-full text-center"
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/*
          28vw font-size. At 1440px: each character ≈ 403px, 6 chars ≈ 2420px.
          Viewport 1440px wide. margin: 0 -15vw pushes past both edges.
          R clips left edge, N clips right edge.
        */}
        <h2
          className="select-none block"
          style={{
            fontFamily: BEBAS,
            fontSize: 'clamp(140px, 28vw, 9999px)',
            WebkitTextStroke: '1.5px rgba(245,240,232,0.55)',
            color: 'transparent',
            letterSpacing: '0.05em',
            lineHeight: 0.85,
            whiteSpace: 'nowrap',
            margin: '0 -15vw',
          }}
        >
          REVAAN
        </h2>

        {/* Products inside the letterforms — 280px wide each */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Product 1 — positioned through V */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 280,
              height: 360,
              marginTop: '-4%',
              marginLeft: '10%',
            }}
          >
            {/* Glow — visible but not garish */}
            <div className="absolute pointer-events-none" style={{
              inset: '-40px',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(200,55,26,0.45) 0%, transparent 62%)',
              filter: 'blur(28px)',
            }} />
            <Image
              src="/images/rebel-1.png"
              alt="Rebel tee through letterform"
              fill
              className="object-contain relative z-10"
              sizes="280px"
            />
          </div>

          {/* Product 2 — positioned through A */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 240,
              height: 310,
              marginTop: '11%',
              marginLeft: '3%',
            }}
          >
            <div className="absolute pointer-events-none" style={{
              inset: '-35px',
              background: 'radial-gradient(ellipse at 50% 55%, rgba(200,55,26,0.4) 0%, transparent 62%)',
              filter: 'blur(24px)',
            }} />
            <Image
              src="/images/rebel-2.png"
              alt="Rebel tee — alt"
              fill
              className="object-contain relative z-10"
              sizes="240px"
            />
          </div>
        </div>
      </motion.div>

      {/* Script signature */}
      <motion.span
        className="font-script relative z-10 mt-6"
        style={{ fontSize: 'clamp(30px, 4vw, 60px)', color: 'var(--accent)' }}
        initial={{ opacity: 0, rotate: -3 }}
        animate={inView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Revaan
      </motion.span>

      {/* SS25 bottom-left */}
      <p className="font-body tracking-[0.3em] uppercase absolute bottom-10 left-10"
        style={{ color: 'var(--text-muted)', fontSize: 10 }}>
        SS25
      </p>

      {/* CTA pill bottom-center */}
      <motion.a
        href="https://berevaan.com"
        target="_blank" rel="noopener noreferrer"
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
