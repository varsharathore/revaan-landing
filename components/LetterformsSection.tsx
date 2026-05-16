'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

export function LetterformsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    // No horizontal padding — letters bleed to edges
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ height: '100vh', background: 'var(--bg)', padding: 0 }}
    >
      {/* Ambient glow behind letters */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 55%, rgba(200,55,26,0.09) 0%, transparent 70%)',
        }}
      />

      {/* REVAAN — so large it clips left and right edges */}
      <motion.div
        className="relative w-full text-center"
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2
          className="font-display leading-none select-none"
          style={{
            fontSize: 'clamp(140px, 28vw, 9999px)',
            WebkitTextStroke: '1.5px rgba(245,240,232,0.65)',
            color: 'transparent',
            letterSpacing: '0.04em',
            lineHeight: 0.85,
            // Bleed past viewport edges
            margin: '0 -10vw',
            display: 'block',
          }}
        >
          REVAAN
        </h2>

        {/* Product images floating through the letterforms */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Product 1 — through V, with glow */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 'clamp(90px, 11vw, 160px)',
              height: 'clamp(120px, 16vw, 220px)',
              marginTop: '-3%',
              marginLeft: '8%',
            }}
          >
            {/* Radial glow behind product */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-35px',
                background: 'radial-gradient(ellipse at 50% 60%, rgba(200,55,26,0.4) 0%, transparent 65%)',
                filter: 'blur(20px)',
              }}
            />
            <Image
              src="/images/rebel-1.png"
              alt="Rebel With Revaan tee"
              fill
              className="object-contain relative z-10"
              sizes="160px"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Product 2 — through A, with glow */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: 'clamp(75px, 9vw, 130px)',
              height: 'clamp(100px, 13vw, 185px)',
              marginTop: '9%',
              marginLeft: '3%',
            }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                inset: '-30px',
                background: 'radial-gradient(ellipse at 50% 60%, rgba(200,55,26,0.35) 0%, transparent 65%)',
                filter: 'blur(18px)',
              }}
            />
            <Image
              src="/images/rebel-2.png"
              alt="Rebel With Revaan tee — alt"
              fill
              className="object-contain relative z-10"
              sizes="130px"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>

        {/* Script signature */}
        <motion.span
          className="font-script block mt-5 relative z-20"
          style={{ fontSize: 'clamp(28px, 4vw, 60px)', color: 'var(--accent)' }}
          initial={{ opacity: 0, rotate: -3 }}
          animate={inView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revaan
        </motion.span>
      </motion.div>

      {/* SS25 — bottom left */}
      <p
        className="font-body tracking-[0.3em] uppercase absolute bottom-10 left-8"
        style={{ color: 'var(--text-muted)', fontSize: 10 }}
      >
        SS25
      </p>

      {/* CTA */}
      <motion.a
        href="https://berevaan.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs tracking-[0.22em] uppercase px-8 py-3 rounded-full absolute bottom-10"
        style={{ background: 'var(--accent)', color: 'var(--text-primary)', cursor: 'none' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ backgroundColor: '#E8431F', scale: 1.03 }}
      >
        EXPLORE THE COLLECTION →
      </motion.a>
    </section>
  )
}
