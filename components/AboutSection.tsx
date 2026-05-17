'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{ background: 'var(--bg)', padding: '160px 64px' }}
    >
      {/* Section label — Bebas, no script (script usage conserved to 3 places) */}
      <motion.p
        className="font-body tracking-[0.3em] uppercase mb-4"
        style={{ color: 'var(--accent)', fontSize: 11 }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Revaan
      </motion.p>

      {/* Subheading — visible and prominent */}
      <motion.h2
        style={{
          fontFamily: BEBAS,
          fontSize: 'clamp(28px, 4vw, 52px)',
          color: 'var(--text-primary)',
          lineHeight: 1,
          marginBottom: '3rem',
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.08 }}
      >
        Premium streetwear, made for Indian streets.
      </motion.h2>

      {/* 3-col mosaic — variable heights */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        <motion.div
          className="relative overflow-hidden"
          style={{ aspectRatio: '3/5' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.05 }}
          data-cursor-enlarge
        >
          <Image src="/images/citybeats-2.jpg" alt="City Beats tee" fill className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]" sizes="33vw" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.12)' }} />
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          style={{ aspectRatio: '3/4' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.14 }}
          data-cursor-enlarge
        >
          <Image src="/images/pulpy-2.jpg" alt="Pulpy tee" fill className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]" sizes="33vw" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.12)' }} />
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          style={{ aspectRatio: '2/3' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.22 }}
          data-cursor-enlarge
        >
          <Image src="/images/wavy-2.jpg" alt="Wavy Core tee" fill className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]" sizes="33vw" />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.12)' }} />
        </motion.div>
      </div>

      {/* Copy — large, readable, two-column */}
      <div className="grid grid-cols-2 gap-16 mt-10">
        <motion.p
          className="font-body leading-relaxed"
          style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.2vw, 18px)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Revaan was born from a simple frustration — great streetwear in India
          either felt too basic or too overpriced.
          <br /><br />
          So we built tees with weight, fall, and attitude. Oversized fits.
          280 GSM premium cotton. Limited drops. Made for Indian streets, Indian
          heat, and people who don&apos;t dress to disappear.
        </motion.p>

        <motion.div
          className="flex items-end"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.52 }}
        >
          <p
            className="font-body italic"
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(16px, 1.6vw, 24px)',
              lineHeight: 1.55,
              opacity: 0.85,
            }}
          >
            &ldquo;Each piece is made to last.
            <br />
            Not to trend.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
