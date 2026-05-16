'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const BEBAS = '"Bebas Neue", var(--font-bebas), sans-serif'

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
      style={{ background: 'var(--bg)', paddingTop: '6rem', paddingBottom: '6rem', overflow: 'hidden' }}
    >
      {/*
        "DROP" — faint background TEXTURE only. Sits behind everything.
        Separate from the CTA headline.
      */}
      <span
        className="select-none pointer-events-none absolute"
        style={{
          fontFamily: BEBAS,
          fontSize: 'clamp(200px, 40vw, 600px)',
          color: 'rgba(255,255,255,0.025)',
          lineHeight: 1,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'nowrap',
          zIndex: 0,
        }}
        aria-hidden
      >
        DROP
      </span>

      {/* All CTA content sits above the DROP texture */}
      <div className="relative z-10 px-8" style={{ maxWidth: 640, width: '100%' }}>
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

        {/*
          "GET FIRST ACCESS" — the actual CTA headline.
          Contained with overflow visible so it reads fully.
          NOT the background texture.
        */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ overflow: 'visible' }}
        >
          <h2
            style={{
              fontFamily: BEBAS,
              fontSize: 'clamp(60px, 10vw, 140px)',
              color: 'var(--text-primary)',
              lineHeight: 0.9,
              marginBottom: '2rem',
              whiteSpace: 'nowrap',
            }}
          >
            GET FIRST ACCESS
          </h2>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: 480, margin: '0 auto' }}
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
                className="flex-1 px-5 py-4 font-body text-sm bg-transparent outline-none"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  borderRight: 'none',
                  color: 'var(--text-primary)',
                  cursor: 'none',
                }}
              />
              <button
                type="submit"
                className="font-body text-xs tracking-[0.2em] uppercase px-6 py-4 transition-colors duration-300"
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
