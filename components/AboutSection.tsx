'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-8 md:px-16"
      style={{ background: 'var(--bg)' }}
    >
      {/*
        Layout: 5-column grid
        [img1]  [copy1]  [img2]  [copy2]  [img3]
        "About" script positioned absolutely, overlapping the top-left of img1
      */}
      <div
        className="relative"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.8fr 0.7fr 1.8fr 0.7fr 1.8fr',
          gap: 10,
          alignItems: 'stretch',
          minHeight: '62vh',
        }}
      >
        {/* "About" script — overlaps top of img1 */}
        <motion.h2
          className="font-script select-none absolute"
          style={{
            fontSize: 'clamp(56px, 9vw, 130px)',
            color: 'var(--accent)',
            top: '-0.35em',
            left: '-8px',
            zIndex: 20,
            transform: 'rotate(-4deg)',
            transformOrigin: 'top left',
            lineHeight: 1,
            pointerEvents: 'none',
          }}
          initial={{ opacity: 0, rotate: -8, y: 20 }}
          animate={inView ? { opacity: 1, rotate: -4, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          About
        </motion.h2>

        {/* Image 1 */}
        <motion.div
          className="relative overflow-hidden"
          style={{ gridColumn: '1' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          data-cursor-enlarge
        >
          <Image
            src="/images/citybeats-2.jpg"
            alt="Revaan City Beats tee"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            sizes="30vw"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.15)' }} />
        </motion.div>

        {/* Copy 1 — between img1 and img2 */}
        <motion.div
          className="flex flex-col justify-end pb-4"
          style={{ gridColumn: '2' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p
            className="font-body text-xs leading-relaxed"
            style={{ color: 'var(--text-muted)', writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)', lineHeight: 1.7 }}
          >
            Revaan was born from a simple frustration — great streetwear shouldn't cost a fortune. Built in India, for India. 280 GSM cotton that outlasts the trend.
          </p>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="relative overflow-hidden"
          style={{ gridColumn: '3' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          data-cursor-enlarge
        >
          <Image
            src="/images/pulpy-2.jpg"
            alt="Revaan Pulpy tee"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            sizes="30vw"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.15)' }} />
        </motion.div>

        {/* Copy 2 — between img2 and img3 */}
        <motion.div
          className="flex flex-col justify-center"
          style={{ gridColumn: '4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <p
            className="font-body italic"
            style={{
              color: 'var(--text-primary)',
              fontSize: 'clamp(12px, 1.1vw, 16px)',
              lineHeight: 1.6,
              writingMode: 'vertical-lr',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
            }}
          >
            Each piece is made to last. Not to trend.
          </p>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          className="relative overflow-hidden"
          style={{ gridColumn: '5' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          data-cursor-enlarge
        >
          <Image
            src="/images/wavy-2.jpg"
            alt="Revaan Wavy Core tee"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
            sizes="30vw"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,10,0.15)' }} />
        </motion.div>
      </div>
    </section>
  )
}
