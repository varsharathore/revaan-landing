'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const BEBAS  = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Yellowtail", var(--font-yellowtail), cursive'

export function AboutSection() {
  const ref  = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  // Each image gets a different scroll-tied y offset — three distinct layer speeds
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])    // slowest (feels deep)
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -90])    // mid
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120])    // fastest (feels surface)

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{ background: 'var(--bg)', padding: '80px 64px 80px' }}
    >
      <div className="relative">
        {/* Script "About" — overlaps grid top. Layer 4 (above images). */}
        <motion.h2
          className="select-none absolute"
          style={{
            fontFamily: SCRIPT,
            fontWeight: 400,
            fontSize: 'clamp(60px, 11vw, 160px)',
            color: 'var(--accent)',
            top: '-0.28em',
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
         * Beauclaire layout: 4-col grid — [img] [text] [img] [img]
         * All elements in same horizontal plane.
         * Three images move at three different scroll speeds → depth.
         */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 0.9fr 1.4fr 1.4fr',
            gap: 10,
            alignItems: 'start',
          }}
        >
          {/* Image 1 — slowest parallax (deepest layer) */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '3/5', gridColumn: '1', marginTop: '3rem', y: y1 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/citybeats-2_transparent.png"
              alt="Revaan tee"
              fill
              className="object-cover object-center"
              sizes="25vw"
            />
          </motion.div>

          {/* Text block — sits between images in same plane */}
          <motion.div
            className="flex flex-col justify-end"
            style={{ gridColumn: '2', paddingTop: '10rem', paddingBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <p style={{
              fontFamily: BEBAS,
              fontSize: 'clamp(14px, 1.6vw, 22px)',
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}>
              Premium streetwear, made for Indian streets.
            </p>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text-muted)', fontSize: 'clamp(12px, 1.05vw, 15px)' }}>
              Revaan was born from a simple frustration — great streetwear in India
              either felt too basic or too overpriced.
              <br /><br />
              So we built tees with weight, fall, and attitude. 280 GSM premium cotton.
              Limited drops. Made for people who don&apos;t dress to disappear.
            </p>
          </motion.div>

          {/* Image 2 — mid parallax */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '3/4', gridColumn: '3', marginTop: '6rem', y: y2 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.18 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/wavy-2_transparent.png"
              alt="Revaan tee"
              fill
              className="object-contain object-bottom img-blend"
              sizes="25vw"
            />
          </motion.div>

          {/* Image 3 — fastest parallax (surface layer) */}
          <motion.div
            className="relative overflow-hidden"
            style={{ aspectRatio: '2/3', gridColumn: '4', marginTop: '1.5rem', y: y3 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.28 }}
            data-cursor-enlarge
          >
            <Image
              src="/images/liar-1_transparent.png"
              alt="Revaan tee"
              fill
              className="object-contain object-bottom img-blend"
              sizes="25vw"
            />
          </motion.div>
        </div>

        {/* Quote — bottom right, below composition */}
        <motion.p
          className="font-body italic text-right mt-8"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(14px, 1.4vw, 20px)', opacity: 0.7, lineHeight: 1.5 }}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          &ldquo;Each piece is made to last. Not to trend.&rdquo;
        </motion.p>
      </div>
    </section>
  )
}
