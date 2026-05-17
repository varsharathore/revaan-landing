'use client'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const BEBAS  = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Yellowtail", var(--font-yellowtail), cursive'

const stats = [
  { value: '240 GSM',     label: 'French Terry Cotton' },
  { value: 'SS26',        label: 'Limited Drop' },
  { value: 'NOT FAST',    label: 'Fashion.' },
]

export function Drop01Section() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: '#0F0D0C', padding: '100px 64px 80px' }}
    >
      {/* Faint brand texture — cow art as ghost bg */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/insta-being-me-dark.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
          zIndex: 0,
        }}
      />

      <div className="relative" style={{ zIndex: 1 }}>

        {/* Bleed display type */}
        <div className="overflow-hidden" style={{ marginBottom: '-0.15em' }}>
          <motion.h2
            style={{
              fontFamily: BEBAS,
              fontSize: 'clamp(100px, 22vw, 9999px)',
              color: 'var(--text-primary)',
              lineHeight: 0.85,
              whiteSpace: 'nowrap',
              WebkitTextStroke: '1px rgba(245,240,232,0.15)',
            }}
            initial={{ y: '110%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            DROP 01
          </motion.h2>
        </div>

        {/* Yellowtail script — overlaps the display type */}
        <motion.span
          className="block select-none pointer-events-none"
          style={{
            fontFamily: SCRIPT,
            fontWeight: 400,
            fontSize: 'clamp(52px, 9vw, 130px)',
            color: 'var(--accent)',
            lineHeight: 1,
            marginTop: '-0.1em',
            marginLeft: '0.04em',
          }}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Unapolegetic.
        </motion.span>

        {/* Subhead */}
        <motion.p
          className="font-body tracking-[0.3em] uppercase mt-6"
          style={{ color: 'rgba(245,240,232,0.45)', fontSize: 12 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Not Fast Fashion.
        </motion.p>

        {/* Divider */}
        <motion.div
          style={{ height: 1, background: 'rgba(245,240,232,0.1)', marginTop: 40, marginBottom: 40 }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Stats row */}
        <motion.div
          style={{ display: 'flex', gap: '4vw' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 16 }}>
              <p
                style={{
                  fontFamily: BEBAS,
                  fontSize: 'clamp(28px, 4vw, 52px)',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                className="font-body tracking-[0.18em] uppercase mt-1"
                style={{ color: 'rgba(245,240,232,0.45)', fontSize: 11 }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
