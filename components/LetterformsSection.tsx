'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

export function LetterformsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: '100vh', background: 'var(--bg)' }}
    >
      {/* Subtle warm glow behind the whole section */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '70%',
          height: '60%',
          top: '20%',
          left: '15%',
          background: 'radial-gradient(ellipse, rgba(200,55,26,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        className="relative select-none text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* REVAAN outlined type */}
        <h2
          className="font-display leading-none relative"
          style={{
            fontSize: 'clamp(80px, 18vw, 260px)',
            WebkitTextStroke: '1.5px rgba(245,240,232,0.7)',
            color: 'transparent',
            letterSpacing: '0.05em',
          }}
        >
          REVAAN
        </h2>

        {/* Product images layered over the letters */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-6 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Product 1 — through the V */}
          <div
            className="relative"
            style={{
              width: 'clamp(80px, 10vw, 140px)',
              height: 'clamp(110px, 15vw, 200px)',
              marginTop: '-5%',
              marginLeft: '14%',
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/rebel-1.png"
              alt="Rebel With Revaan tee"
              fill
              className="object-contain"
              sizes="140px"
            />
          </div>

          {/* Product 2 — through the A */}
          <div
            className="relative"
            style={{
              width: 'clamp(70px, 9vw, 120px)',
              height: 'clamp(95px, 13vw, 175px)',
              marginTop: '10%',
              marginLeft: '2%',
              flexShrink: 0,
            }}
          >
            <Image
              src="/images/rebel-2.png"
              alt="Rebel With Revaan tee — alternate"
              fill
              className="object-contain"
              sizes="120px"
            />
          </div>
        </div>

        {/* Script signature */}
        <motion.span
          className="font-script block mt-4"
          style={{ fontSize: 'clamp(28px, 4vw, 56px)', color: 'var(--accent)' }}
          initial={{ opacity: 0, rotate: -3 }}
          animate={inView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revaan
        </motion.span>

        <p
          className="font-body tracking-[0.3em] uppercase absolute bottom-[-40px] left-0"
          style={{ color: 'var(--text-muted)', fontSize: 11 }}
        >
          SS25
        </p>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="https://berevaan.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 font-body text-sm tracking-[0.2em] uppercase px-8 py-3 rounded-full"
        style={{ background: 'var(--accent)', color: 'var(--text-primary)', cursor: 'none' }}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ background: '#E8431F', scale: 1.02 }}
      >
        EXPLORE THE COLLECTION →
      </motion.a>
    </section>
  )
}
