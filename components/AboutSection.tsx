'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Cormorant", Georgia, serif'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{ background: 'var(--bg)', padding: '80px 64px 160px' }}
    >
      {/*
       * Beauclaire-style composition:
       * The "About" script is LARGE and sits at the TOP of the section,
       * overlapping the image grid below it. No gap between script and images.
       *
       * Grid: 4 equal columns + a text column
       * [img1 tall] [text block] [img2 medium] [img3 tall]
       * Script is absolute, positioned to visually sit over img1's top edge.
       */}
      <div className="relative">
        {/* "About" script — OVERLAPS the grid from above */}
        <motion.h2
          className="select-none absolute"
          style={{
            fontFamily: SCRIPT,
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(80px, 14vw, 200px)',
            color: 'var(--accent)',
            top: '-0.28em',     // pulls it up to overlap the grid top
            left: '-8px',
            zIndex: 20,
            lineHeight: 1,
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          About
        </motion.h2>

        {/*
         * Beauclaire layout: 4 columns, images + text in same plane.
         * [img1: 3/5 tall] [text block: brand story] [img2: 3/4] [img3: 2/3]
         * The script overlaps from the top-left corner of this grid.
         */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.9fr 1.4fr 1.4fr',
            gap: 10,
            alignItems: 'start',
          }}
        >
          {/* Image 1 — tallest, sits under the script overlap */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '3/5', gridColumn: '1', marginTop: '3rem' }}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/citybeats-2.jpg"
              alt="Revaan tee — model"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="25vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.1)' }} />
          </motion.div>

          {/* Text block — in same plane as images (Beauclaire move) */}
          <motion.div
            className="flex flex-col justify-end"
            style={{ gridColumn: '2', paddingTop: '5rem', paddingBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            {/* Subheading */}
            <p
              style={{
                fontFamily: BEBAS,
                fontSize: 'clamp(14px, 1.6vw, 22px)',
                color: 'var(--text-primary)',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Premium streetwear, made for Indian streets.
            </p>

            <p
              className="font-body leading-relaxed"
              style={{ color: 'var(--text-muted)', fontSize: 'clamp(12px, 1.05vw, 15px)' }}
            >
              Revaan was born from a simple frustration — great streetwear in India
              either felt too basic or too overpriced.
              <br /><br />
              So we built tees with weight, fall, and attitude. 280 GSM premium cotton.
              Limited drops. Made for people who don&apos;t dress to disappear.
            </p>
          </motion.div>

          {/* Image 2 — medium */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '3/4', gridColumn: '3', marginTop: '6rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/pulpy-2.jpg"
              alt="Revaan tee — model"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="25vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.1)' }} />
          </motion.div>

          {/* Image 3 — tall, different starting height */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '2/3', gridColumn: '4', marginTop: '1.5rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.28 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/wavy-2.jpg"
              alt="Revaan tee — model"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
              sizes="25vw"
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.1)' }} />
          </motion.div>
        </div>

        {/* Bottom quote — anchored below grid, right side */}
        <motion.p
          className="font-body italic text-right mt-8"
          style={{
            color: 'var(--text-primary)',
            fontSize: 'clamp(14px, 1.4vw, 20px)',
            opacity: 0.75,
            lineHeight: 1.5,
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 0.75, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          &ldquo;Each piece is made to last. Not to trend.&rdquo;
        </motion.p>
      </div>
    </section>
  )
}
