'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", var(--font-bebas), sans-serif'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 px-8 md:px-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Mosaic container — script overlaps its top edge */}
      <div className="relative mt-16">

        {/* "About" — absolute, overlaps top of first image */}
        <motion.h2
          className="font-script absolute select-none"
          style={{
            fontSize: 'clamp(64px, 10vw, 140px)',
            color: 'var(--accent)',
            top: '-0.45em',        // sits above the grid top, overlapping img1
            left: '-4px',
            zIndex: 20,
            transform: 'rotate(-4deg)',
            transformOrigin: 'top left',
            lineHeight: 1,
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, rotate: -8, y: 16 }}
          animate={inView ? { opacity: 1, rotate: -4, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          About
        </motion.h2>

        {/*
          3-column mosaic — variable heights per column.
          Images fill the column; text floats in a 4th column gap after the grid.
        */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 8,
          }}
        >
          {/* Image 1 — tallest */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '3/5' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.05 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/citybeats-2.jpg"
              alt="City Beats oversized tee"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="33vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.15)' }} />
          </motion.div>

          {/* Image 2 — medium */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '3/4' }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/pulpy-2.jpg"
              alt="Pulpy oversized tee"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="33vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.15)' }} />
          </motion.div>

          {/* Image 3 — tall */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '2/3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/wavy-2.jpg"
              alt="Wavy Core oversized tee"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="33vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.15)' }} />
          </motion.div>
        </div>

        {/* Copy — horizontal, readable, below mosaic in two blocks */}
        <div className="grid grid-cols-2 gap-12 mt-10">
          <motion.p
            className="font-body text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)', maxWidth: 360 }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Revaan was born from a simple frustration — great streetwear shouldn't cost a
            fortune. Built in India, for India. Oversized tees that fit the attitude, not
            just the body. 280 GSM premium cotton that outlasts the trend.
          </motion.p>

          <motion.p
            className="font-body italic flex items-center"
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(15px, 1.5vw, 22px)',
              lineHeight: 1.5,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.52 }}
          >
            &ldquo;Each piece is made to last.
            <br />
            Not to trend.&rdquo;
          </motion.p>
        </div>
      </div>
    </section>
  )
}
