'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'

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
      className="relative flex flex-col items-center text-center"
      style={{ background: 'var(--bg)', padding: '140px 32px', overflow: 'hidden' }}
    >
      {/* "DROP" — faint background texture only. 2% opacity. */}
      <span
        aria-hidden
        className="select-none pointer-events-none absolute"
        style={{
          fontFamily: BEBAS,
          fontSize: 'clamp(140px, 28vw, 420px)',
          color: 'rgba(20,18,16,0.04)',
          lineHeight: 1,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
      >
        DROP
      </span>

      <div className="relative z-10 w-full" style={{ maxWidth: 520 }}>
        {/* Tag */}
        <motion.span
          className="inline-block font-body text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6"
          style={{ background: 'var(--accent)', color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          NEVER MISS A DROP
        </motion.span>

        {/* Headline — utility scale, not brand-moment scale */}
        <motion.h2
          className="font-body mb-4"
          style={{
            fontSize: 'clamp(22px, 4vw, 52px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          Get first access
        </motion.h2>

        {/* Supporting copy */}
        <motion.p
          className="font-body text-sm leading-relaxed mb-8"
          style={{ color: 'var(--text-muted)', maxWidth: 360, margin: '0 auto 2rem' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.14 }}
        >
          Limited pieces. No endless restocks.
          <br />
          Get early access before the next drop goes public.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex"
          style={{ maxWidth: 420, margin: '0 auto' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {submitted ? (
            <p className="font-body text-sm w-full py-4" style={{ color: 'var(--accent)' }}>
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
                className="flex-1 px-5 py-3 font-body text-sm bg-transparent outline-none"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRight: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'none',
                  fontSize: 14,
                }}
              />
              <button
                type="submit"
                className="font-body text-xs tracking-[0.2em] uppercase px-5 py-3"
                style={{ background: 'var(--accent)', color: 'var(--text-primary)', cursor: 'none', border: '1px solid var(--accent)', whiteSpace: 'nowrap' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-bright)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)' }}
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
