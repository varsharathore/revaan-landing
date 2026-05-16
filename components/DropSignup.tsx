'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

export function DropSignup() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section
      id="drop"
      ref={ref}
      className="relative py-32 px-8 md:px-16 flex flex-col items-center text-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Large muted background text */}
      <span
        className="font-display absolute inset-0 flex items-center justify-center select-none pointer-events-none"
        style={{
          fontSize: 'clamp(120px, 25vw, 360px)',
          color: 'rgba(255,255,255,0.03)',
          lineHeight: 1,
          zIndex: 0,
        }}
      >
        DROP
      </span>

      <div className="relative z-10 max-w-lg w-full">
        {/* Tag */}
        <motion.span
          className="inline-block font-body text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6"
          style={{ background: 'var(--accent)', color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          NEVER MISS A DROP
        </motion.span>

        {/* Headline */}
        <motion.h2
          className="font-display leading-none mb-8"
          style={{ fontSize: 'clamp(72px, 14vw, 9999px)', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          GET FIRST ACCESS
        </motion.h2>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <p
              className="font-body text-sm w-full py-4"
              style={{ color: 'var(--accent)' }}
            >
              You&apos;re in. We&apos;ll hit you first.
            </p>
          ) : (
            <>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 font-body text-sm bg-transparent outline-none"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRight: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'none',
                }}
              />
              <button
                type="submit"
                className="font-body text-xs tracking-[0.2em] uppercase px-6 py-4 transition-colors duration-300"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--text-primary)',
                  cursor: 'none',
                  border: '1px solid var(--accent)',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--accent-bright)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--accent)'
                }}
              >
                JOIN
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  )
}
