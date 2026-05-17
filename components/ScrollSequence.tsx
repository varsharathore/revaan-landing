'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const BEBAS = '"Bebas Neue", "Anton", Impact, sans-serif'

const scenes = [
  {
    num: '01',
    script: 'Rebellion',
    headline: ['BE', 'UNAPOLOGETIC'],
    body: 'Designed for the streets. Worn by those who don\'t ask for permission.',
    cta: 'View Collection',
    leftImage: '/images/citybeats-1.jpg',
    leftAlt: 'City Beats oversized tee',
    productImage: '/images/rebel-1.png',
    productAlt: 'Rebel With Revaan tee',
    glowColor: 'rgba(200,55,26,0.40)',
    tag: undefined as string | undefined,
    tagLabel: undefined as string | undefined,
  },
  {
    num: '02',
    script: 'The Drop',
    headline: ['REBEL WITH', 'REVAAN'],
    body: '280 GSM · Superior fall. The weight you feel. The statement you make.',
    cta: 'Shop Now',
    leftImage: '/images/pulpy-1.jpg',
    leftAlt: 'Pulpy oversized tee — model',
    productImage: '/images/rebel-2.png',
    productAlt: 'Rebel With Revaan tee — alt',
    glowColor: 'rgba(200,55,26,0.40)',
    tag: '₹2,199',
    tagLabel: '280 GSM · SUPERIOR FALL',
  },
  {
    num: '03',
    script: 'Craft',
    headline: ['BUILT', 'TO LAST'],
    body: 'Lightweight yet durable. Every thread engineered for the long run.',
    cta: 'Our Story',
    leftImage: '/images/wavy-1.jpg',
    leftAlt: 'Wavy Core oversized tee — lifestyle',
    productImage: '/images/liar-1.jpg',
    productAlt: 'Revaan oversized tee flat lay',
    glowColor: 'rgba(140,80,40,0.35)',
    tag: undefined as string | undefined,
    tagLabel: 'LIGHTWEIGHT YET DURABLE',
  },
]

export function ScrollSequence() {
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRefs    = useRef<(HTMLDivElement | null)[]>([])
  const [activeScene, setActiveScene] = useState(0)
  const [progress,    setProgress]    = useState(0)

  useEffect(() => {
    const wrapper   = wrapperRef.current
    const container = containerRef.current
    if (!wrapper || !container) return

    // Initialise — first scene visible, all others hidden
    sceneRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0, zIndex: i })
    })

    /*
     * SINGLE ScrollTrigger owns both the pin AND the animation.
     * pin: container — GSAP adds a pin-spacer so post-sequence content
     * follows immediately (no CSS-sticky gap).
     *
     * Crossfade rule: outgoing and incoming both animate over the SAME
     * 1-unit window.  At the midpoint both are exactly 0.5.
     * Before midpoint: outgoing > 0.5, incoming < 0.5.
     * After midpoint:  outgoing < 0.5, incoming > 0.5.
     * They are NEVER BOTH > 0.5 simultaneously.
     */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: `+=${scenes.length * 100}vh`,
        pin: container,
        anticipatePin: 1,
        scrub: 1.5,
        onUpdate: (self) => {
          setProgress(self.progress)
          const idx = Math.min(
            Math.floor(self.progress * scenes.length),
            scenes.length - 1
          )
          setActiveScene(idx)
        },
      },
    })

    // Build crossfades — each at consecutive integer positions
    scenes.forEach((_, i) => {
      if (i === 0) return
      const prev = sceneRefs.current[i - 1]
      const curr = sceneRefs.current[i]
      const pos  = i - 1   // 0, 1, 2 …

      // Both run for exactly 1 unit starting at `pos`.
      // linear ease → perfectly symmetric crossfade.
      if (prev) tl.to(prev, { opacity: 0, duration: 1, ease: 'linear' }, pos)
      if (curr) tl.to(curr, { opacity: 1, duration: 1, ease: 'linear' }, pos)
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    /*
     * Outer wrapper provides the scroll distance.
     * GSAP pin replaces CSS sticky, so the spacer math is handled by GSAP.
     */
    <div ref={wrapperRef} id="collection">
      <div
        ref={containerRef}
        style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}
      >
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={(el) => { sceneRefs.current[i] = el }}
            className="absolute inset-0 flex"
          >
            {/* ── LEFT 65%: lifestyle image ── */}
            <div className="relative overflow-hidden" style={{ width: '65%' }}>
              <Image
                src={scene.leftImage}
                alt={scene.leftAlt}
                fill
                className="object-cover object-center"
                sizes="65vw"
                priority={i === 0}
              />

              {/* Warm red atmospheric glow */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: `radial-gradient(ellipse 70% 80% at 40% 55%, ${scene.glowColor} 0%, transparent 65%)`,
              }} />

              {/* Edge vignettes */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 25%, rgba(10,10,10,0.4) 100%)',
              }} />
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
                height: '40%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.7), transparent)',
              }} />

              {/* Watermark scene number */}
              <span
                className="absolute bottom-6 left-8 select-none pointer-events-none"
                style={{ fontFamily: BEBAS, fontSize: 'clamp(120px, 18vw, 240px)', color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}
              >
                {scene.num}
              </span>
              <p className="absolute bottom-9 left-12 font-body tracking-[0.25em] uppercase"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10 }}>
                SS25 · Revaan
              </p>
            </div>

            {/* Separator */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />

            {/* ── RIGHT 35%: product + content ── */}
            <div
              className="flex flex-col relative"
              style={{ width: '35%', background: '#111' }}
            >
              {/* ── PRODUCT — explicit 280px container, fills upper half ── */}
              <div
                className="flex-1 flex items-center justify-center relative"
                style={{ minHeight: 0, padding: '48px 24px 16px' }}
              >
                {/* Radial glow behind product */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: `radial-gradient(ellipse 75% 65% at 50% 55%, ${scene.glowColor} 0%, transparent 65%)`,
                  filter: 'blur(28px)',
                }} />

                {/* Explicit 280×340 so the product image has real size */}
                <div className="relative" style={{ width: 280, height: 340, flexShrink: 0 }}>
                  <Image
                    src={scene.productImage}
                    alt={scene.productAlt}
                    fill
                    className="object-contain"
                    sizes="280px"
                  />
                </div>
              </div>

              {/* ── CONTENT — anchored to bottom ── */}
              <div className="px-8 pb-10 space-y-3 flex-shrink-0" style={{ overflow: 'visible' }}>
                {/* Muted scene number */}
                <span
                  className="select-none pointer-events-none absolute top-4 right-5"
                  style={{ fontFamily: BEBAS, fontSize: '4.5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
                >
                  {scene.num}
                </span>

                <span
                  className="font-script block"
                  style={{ fontSize: 'clamp(26px, 3vw, 44px)', color: 'var(--accent)', lineHeight: 1 }}
                >
                  {scene.script}
                </span>

                {/* Headline bleeds past right edge — intentional */}
                <h2
                  style={{
                    fontFamily: BEBAS,
                    fontSize: 'clamp(64px, 12vw, 9999px)',
                    color: 'var(--text-primary)',
                    lineHeight: 0.88,
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {scene.headline[0]}
                  <br />
                  {scene.headline[1]}
                </h2>

                <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)', maxWidth: 250 }}>
                  {scene.body}
                </p>

                {scene.tag && (
                  <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--text-primary)', fontSize: 17 }}>
                    {scene.tag}
                  </p>
                )}
                {scene.tagLabel && (
                  <p className="font-body tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)', fontSize: 9 }}>
                    {scene.tagLabel}
                  </p>
                )}

                <div className="flex items-center gap-3 pt-1">
                  <span className="font-body text-xs tracking-[0.18em] uppercase" style={{ color: 'var(--text-muted)' }}>
                    {scene.cta}
                  </span>
                  <span style={{
                    width: 26, height: 26, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, color: 'var(--text-muted)', flexShrink: 0,
                  }}>↗</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Scene dots — only official indicator, no other decorative dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 pointer-events-none">
          {scenes.map((_, i) => (
            <div key={i} style={{
              width: i === activeScene ? 20 : 5, height: 5, borderRadius: 3,
              background: i === activeScene ? 'var(--accent)' : 'rgba(255,255,255,0.18)',
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>

        {/* Right-edge progress line */}
        <div className="absolute right-0 top-0 bottom-0 z-30" style={{ width: 2, background: 'rgba(255,255,255,0.04)' }}>
          <div style={{ width: '100%', height: `${progress * 100}%`, background: 'var(--accent)', transition: 'height 0.1s linear' }} />
        </div>
      </div>
    </div>
  )
}
