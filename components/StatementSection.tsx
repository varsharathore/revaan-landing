'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'

export function StatementSection() {
  const ref       = useRef<HTMLDivElement>(null)
  const line1Ref  = useRef<HTMLHeadingElement>(null)
  const line2Ref  = useRef<HTMLHeadingElement>(null)
  const imgRef    = useRef<HTMLDivElement>(null)
  const bodyRef   = useRef<HTMLDivElement>(null)
  const inView    = useInView(ref, { once: true, margin: '-10%' })

  useEffect(() => {
    const section = ref.current
    if (!section) return

    const config = {
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    }

    const sts = [
      gsap.to(line1Ref.current, { y: -120, ease: 'none', scrollTrigger: config }),
      gsap.to(line2Ref.current, { y: -70,  ease: 'none', scrollTrigger: config }),
      gsap.to(imgRef.current,   { y: -30,  ease: 'none', scrollTrigger: config }),
      gsap.to(bodyRef.current,  { y: -50,  ease: 'none', scrollTrigger: config }),
    ]

    // Kill only THIS section's ScrollTriggers — not the scroll sequence pin
    return () => sts.forEach(t => t.scrollTrigger?.kill())
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ padding: '80px 64px 10px', background: 'var(--bg)' }}
    >
      <div className="relative">
        {/* Layer 3 (display text) — moves 1.3× */}
        <motion.h2
          ref={line1Ref}
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

        {/* Layer 3b — moves 1.1× */}
        <motion.h2
          ref={line2Ref}
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
          transition={{ duration: 1, delay: 0.14, ease: [0.25, 0.1, 0.25, 1] }}
        >
          TO REBEL
        </motion.h2>

        {/* Layer 2 (product image) — sits over the display text, moves 0.7× */}
        <div
          ref={imgRef}
          className="absolute top-0 right-0"
          style={{ width: 'clamp(120px, 18vw, 260px)', zIndex: 10 }}
        >
          <div className="relative" style={{ aspectRatio: '3/4' }}>
            {/* Glow behind image */}
            <div className="absolute pointer-events-none" style={{
              inset: '-30px',
              background: 'radial-gradient(ellipse at 50% 60%, rgba(200,55,26,0.28) 0%, transparent 65%)',
              filter: 'blur(20px)',
            }} />
            <Image
              src="/images/rebel-back.png"
              alt="Revaan oversized tee — BE UNAPOLOGETIC"
              fill
              className="object-cover relative z-10"
              sizes="260px"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
      </div>

      {/* Body copy — Layer 1 (base), moves at neutral speed */}
      <div ref={bodyRef} className="mt-10 max-w-lg">
        <p
          className="font-body leading-relaxed"
          style={{ color: 'var(--text-primary)', fontSize: 'clamp(15px, 1.3vw, 20px)', opacity: 0.75 }}
        >
          Indian streets don&apos;t follow the script. Neither do we.
          <br /><br />
          Revaan is built for the unapologetic — those who wear what they mean.
          Heavyweight cotton, oversized silhouettes, loud details, and small drops
          that were never made for everyone.
        </p>
      </div>
    </section>
  )
}
