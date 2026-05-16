'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const mosaicImages = [
  { src: '/images/citybeats-2.jpg', alt: 'City Beats oversized tee', aspect: '3/4' },
  { src: '/images/pulpy-2.jpg',     alt: 'Pulpy oversized tee', aspect: '3/4' },
  { src: '/images/wavy-2.jpg',      alt: 'Wavy Core oversized tee', aspect: '3/4' },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-8 md:px-16"
      style={{ background: 'var(--bg)' }}
    >
      <motion.h2
        className="font-script select-none"
        style={{
          fontSize: 'clamp(56px, 9vw, 120px)',
          color: 'var(--accent)',
          transform: 'rotate(-3deg)',
          transformOrigin: 'top left',
          display: 'inline-block',
          marginBottom: '2rem',
        }}
        initial={{ opacity: 0, rotate: -6 }}
        animate={inView ? { opacity: 1, rotate: -3 } : {}}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        About
      </motion.h2>

      {/* 3-col mosaic */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        {mosaicImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.12 }}
            className="relative overflow-hidden"
            style={{ aspectRatio: img.aspect }}
            data-cursor-enlarge
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Subtle dark overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(10,10,10,0.2)' }}
            />
          </motion.div>
        ))}
      </div>

      {/* Copy below mosaic */}
      <div className="grid grid-cols-3 gap-3 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Revaan was born from a simple frustration — great streetwear shouldn&apos;t cost a
            fortune. Built in India, for India. Oversized tees that fit the attitude, not
            just the body. 280 GSM premium cotton that outlasts the trend.
          </p>
        </motion.div>

        <div />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.58 }}
          className="flex items-end"
        >
          <p
            className="font-body italic"
            style={{ color: 'var(--text-primary)', fontSize: 'clamp(14px, 1.3vw, 19px)', lineHeight: 1.5 }}
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
