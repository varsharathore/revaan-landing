'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", var(--font-bebas), sans-serif'

export function StatementSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      className="relative py-24 px-8 md:px-16 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <div className="relative">
        {/* Line 1 */}
        <motion.h2
          style={{
            fontFamily: BEBAS,
            fontSize: 'clamp(80px, 18vw, 9999px)',
            color: 'var(--text-primary)',
            lineHeight: 0.88,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          DESIGNED
        </motion.h2>

        {/* Line 2 — muted */}
        <motion.h2
          style={{
            fontFamily: BEBAS,
            fontSize: 'clamp(80px, 18vw, 9999px)',
            color: 'var(--text-muted)',
            lineHeight: 0.88,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1, delay: 0.14, ease: [0.25, 0.1, 0.25, 1] }}
        >
          TO REBEL
        </motion.h2>

        {/* Product image top-right, overlapping the D */}
        <motion.div
          className="absolute top-0 right-0"
          style={{ width: 'clamp(120px, 18vw, 260px)', zIndex: 10 }}
          initial={{ opacity: 0, y: -24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="relative" style={{ aspectRatio: '3/4' }}>
            {/* Glow behind the product */}
            <div className="absolute pointer-events-none" style={{
              inset: '-30px',
              background: 'radial-gradient(ellipse at 50% 60%, rgba(200,55,26,0.35) 0%, transparent 65%)',
              filter: 'blur(20px)',
            }} />
            <Image
              src="/images/liar-2.jpg"
              alt="Revaan oversized tee"
              fill
              className="object-cover relative z-10"
              sizes="260px"
              // mix-blend-mode: multiply dissolves white background into dark canvas
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Body copy — visible size and contrast */}
      <motion.div
        className="mt-10 max-w-sm"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <p
          className="font-body leading-relaxed"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(14px, 1.2vw, 18px)', opacity: 0.7 }}
        >
          Indian streets don't follow the script.
          <br />
          Neither do we. Revaan is built for the
          unapologetic — those who wear what they mean.
        </p>
      </motion.div>
    </section>
  )
}
