'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const BEBAS = '"Bebas Neue", var(--font-bebas), sans-serif'

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
    glowColor: 'rgba(200,55,26,0.45)',
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
    glowColor: 'rgba(200,55,26,0.45)',
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
    glowColor: 'rgba(160,90,40,0.38)',
    tag: undefined as string | undefined,
    tagLabel: 'LIGHTWEIGHT YET DURABLE',
  },
]

export function ScrollSequence() {
  const wrapperRef  = useRef<HTMLDivElement>(null)
  const sceneRefs   = useRef<(HTMLDivElement | null)[]>([])
  const [activeScene, setActiveScene] = useState(0)
  const [progress,    setProgress]    = useState(0)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    // Set z-indexes so later scenes stack on top — scene 0 is always underneath
    sceneRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { zIndex: i, opacity: i === 0 ? 1 : 0 })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.4,
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

    // Crossfade: each incoming scene fades IN on top of the previous.
    // Previous scene stays fully visible underneath — no black gap ever.
    scenes.forEach((_, i) => {
      if (i === 0) return
      const curr = sceneRefs.current[i]
      if (!curr) return
      // Incoming scene fades in at timeline position (i-1)
      tl.fromTo(curr, { opacity: 0 }, { opacity: 1, duration: 0.9, ease: 'power1.inOut' }, i - 1)
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${scenes.length * 100}vh` }}
      id="collection"
    >
      {/* CSS sticky — viewport locks without GSAP pin conflicts */}
      <div style={{ position: 'sticky', top: 0, height: '100vh' }}>
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={(el) => { sceneRefs.current[i] = el }}
            className="absolute inset-0 flex"
          >
            {/* ── LEFT 65%: lifestyle image with warm red glow overlay ── */}
            <div className="relative overflow-hidden" style={{ width: '65%' }}>
              <Image
                src={scene.leftImage}
                alt={scene.leftAlt}
                fill
                className="object-cover object-center"
                sizes="65vw"
                priority={i === 0}
              />

              {/* Warm red radial glow — brands the photo to Revaan palette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 70% 80% at 40% 55%, ${scene.glowColor} 0%, transparent 65%)`,
                }}
              />

              {/* Edge vignettes */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 30%, rgba(10,10,10,0.5) 100%)',
              }} />
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
                height: '40%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.7), transparent)',
              }} />

              {/* Watermark scene number */}
              <span
                className="absolute bottom-6 left-8 select-none pointer-events-none"
                style={{
                  fontFamily: BEBAS,
                  fontSize: 'clamp(120px, 18vw, 260px)',
                  color: 'rgba(255,255,255,0.05)',
                  lineHeight: 1,
                }}
              >
                {scene.num}
              </span>

              <p className="absolute bottom-9 left-12 font-body tracking-[0.25em] uppercase"
                style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>
                SS25 · Revaan
              </p>
            </div>

            {/* Separator */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />

            {/* ── RIGHT 35%: product + content ── */}
            <div
              className="flex flex-col relative"
              style={{
                width: '35%',
                background: '#111',
                // Intentional: allow headlines to bleed past right edge
              }}
            >
              {/* Muted scene number backdrop */}
              <span
                className="select-none pointer-events-none absolute top-4 right-4"
                style={{
                  fontFamily: BEBAS,
                  fontSize: '5rem',
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                }}
              >
                {scene.num}
              </span>

              {/* ── PRODUCT IMAGE — dominant, fills top of panel ── */}
              <div
                className="relative flex items-center justify-center"
                style={{ flex: '1 1 0', minHeight: 0, padding: '40px 24px 20px' }}
              >
                {/* Radial glow behind product */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: 0,
                    background: `radial-gradient(ellipse 80% 70% at 50% 55%, ${scene.glowColor} 0%, transparent 65%)`,
                    filter: 'blur(30px)',
                  }}
                />
                <div className="relative w-full h-full">
                  <Image
                    src={scene.productImage}
                    alt={scene.productAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 35vw, 420px"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>

              {/* ── CONTENT ── */}
              <div
                className="flex-shrink-0 px-8 pb-10 space-y-3 relative z-10"
                style={{ overflow: 'visible' }}
              >
                {/* Script label */}
                <span
                  className="font-script block"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', color: 'var(--accent)', lineHeight: 1 }}
                >
                  {scene.script}
                </span>

                {/* Condensed headline — bleeds past right edge intentionally */}
                <h2
                  style={{
                    fontFamily: BEBAS,
                    fontSize: 'clamp(72px, 13vw, 9999px)',
                    color: 'var(--text-primary)',
                    lineHeight: 0.88,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    // overflow visible so it bleeds right
                  }}
                >
                  {scene.headline[0]}
                  <br />
                  {scene.headline[1]}
                </h2>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)', maxWidth: 260 }}
                >
                  {scene.body}
                </p>

                {scene.tag && (
                  <p style={{ fontFamily: 'var(--font-dm-sans)', color: 'var(--text-primary)', fontSize: 18 }}>
                    {scene.tag}
                  </p>
                )}
                {scene.tagLabel && (
                  <p className="font-body tracking-[0.2em] uppercase"
                    style={{ color: 'var(--text-muted)', fontSize: 9 }}>
                    {scene.tagLabel}
                  </p>
                )}

                {/* CTA */}
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-body text-xs tracking-[0.18em] uppercase"
                    style={{ color: 'var(--text-muted)' }}>
                    {scene.cta}
                  </span>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, color: 'var(--text-muted)',
                  }}>↗</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Scene dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 pointer-events-none">
          {scenes.map((_, i) => (
            <div key={i} style={{
              width: i === activeScene ? 20 : 5, height: 5, borderRadius: 3,
              background: i === activeScene ? 'var(--accent)' : 'rgba(255,255,255,0.18)',
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>

        {/* Right-edge progress */}
        <div className="absolute right-0 top-0 bottom-0 z-30" style={{ width: 2, background: 'rgba(255,255,255,0.04)' }}>
          <div style={{ width: '100%', height: `${progress * 100}%`, background: 'var(--accent)', transition: 'height 0.1s linear' }} />
        </div>
      </div>
    </div>
  )
}
