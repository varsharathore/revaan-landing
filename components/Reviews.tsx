'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'

const reviews = [
  {
    quote: 'The fabric weight is insane for the price. Wore it three days in a row. Zero guilt.',
    name: 'ARYAN K.',
    location: 'Mumbai',
  },
  {
    quote: 'Finally a brand that gets oversized right. Not just big — actually structured.',
    name: 'PRIYA S.',
    location: 'Delhi',
  },
  {
    quote: 'Ordered on a Tuesday. Wore it on Thursday. Been wearing it every week since.',
    name: 'RAHUL M.',
    location: 'Bangalore',
  },
]

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [current, setCurrent] = useState(0)

  return (
    <section
      ref={ref}
      className="px-8 md:px-16 flex flex-col items-center text-center"
      style={{ background: 'var(--bg-panel)', padding: '80px 64px' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p
            className="font-body italic leading-relaxed mb-6"
            style={{ fontSize: 'clamp(16px, 2vw, 22px)', color: 'var(--text-primary)' }}
          >
            &ldquo;{reviews[current].quote}&rdquo;
          </p>
          <p
            className="font-body tracking-[0.25em] uppercase"
            style={{ fontSize: 11, color: 'var(--text-muted)' }}
          >
            {reviews[current].name} · {reviews[current].location}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dot navigation */}
      <div className="flex gap-3 mt-10">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Review ${i + 1}`}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              cursor: 'none',
              border: 'none',
            }}
          />
        ))}
      </div>
    </section>
  )
}
