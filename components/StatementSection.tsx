'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

export function StatementSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      className="relative py-24 px-8 md:px-16 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Large bleed type */}
      <div className="relative">
        <motion.h2
          className="font-display leading-none overflow-hidden"
          style={{ fontSize: 'clamp(60px, 14vw, 200px)', color: 'var(--text-primary)' }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          DESIGNED
        </motion.h2>

        <motion.h2
          className="font-display leading-none overflow-hidden"
          style={{ fontSize: 'clamp(60px, 14vw, 200px)', color: 'var(--text-muted)' }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          TO REBEL
        </motion.h2>

        {/* Product image — top right, overlapping D */}
        <motion.div
          className="absolute top-0 right-0 md:right-8"
          style={{ width: 'clamp(100px, 16vw, 220px)', aspectRatio: '3/4', zIndex: 10, position: 'absolute' }}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/liar-2.jpg"
              alt="Revaan oversized tee"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>
        </motion.div>
      </div>

      {/* Body copy — bottom left */}
      <motion.div
        className="mt-12 max-w-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Indian streets don&apos;t follow the script. Neither do we. Revaan is built for the
          unapologetic — those who wear what they mean and mean what they wear.
        </p>
      </motion.div>
    </section>
  )
}
