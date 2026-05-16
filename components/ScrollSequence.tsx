'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

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
    glowColor: 'rgba(200,55,26,0.4)',
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
    glowColor: 'rgba(200,55,26,0.4)',
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
    glowColor: 'rgba(160,100,60,0.35)',
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

    // ONE timeline — scrubs all scene transitions
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',   // matches the wrapper's full scroll travel
        scrub: 1,
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

    // Build scene transitions
    // Timeline total: (scenes.length - 1) units, one per transition
    scenes.forEach((_, i) => {
      if (i === 0) return
      const prev = sceneRefs.current[i - 1]
      const curr = sceneRefs.current[i]
      // Each transition occupies 1 unit at position (i-1)
      if (prev) tl.to(prev, { opacity: 0, y: -50, duration: 0.5 }, i - 1)
      if (curr) tl.fromTo(curr, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.6 }, i - 1 + 0.2)
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    // Outer wrapper: provides the scroll travel height (CSS sticky handles the pin)
    <div
      ref={wrapperRef}
      style={{ height: `${scenes.length * 100}vh` }}
      id="collection"
    >
      {/* CSS sticky: stays at top while user scrolls through wrapper height */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={(el) => { sceneRefs.current[i] = el }}
            className="absolute inset-0 flex"
            style={{ opacity: i === 0 ? 1 : 0 }}
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
              {/* Vignette */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to right, rgba(10,10,10,0.25) 0%, transparent 50%, rgba(10,10,10,0.45) 100%)',
              }} />
              <div className="absolute bottom-0 left-0 right-0" style={{
                height: '35%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.6), transparent)',
              }} />

              {/* Large watermark scene number */}
              <span
                className="font-display select-none pointer-events-none absolute bottom-6 left-8"
                style={{ fontSize: 'clamp(100px, 16vw, 220px)', color: 'rgba(255,255,255,0.05)', lineHeight: 1 }}
              >
                {scene.num}
              </span>

              <p
                className="font-body tracking-[0.25em] uppercase absolute bottom-8 left-10"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10 }}
              >
                SS25 · Revaan
              </p>
            </div>

            {/* Separator */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.07)', flexShrink: 0 }} />

            {/* ── RIGHT 35%: content panel ── */}
            <div
              className="flex flex-col justify-between py-10 px-8 relative"
              style={{
                width: '35%',
                background: '#111',
                // allow headline to bleed past right edge
                overflow: 'visible',
              }}
            >
              {/* Muted scene number backdrop */}
              <span
                className="font-display select-none pointer-events-none absolute top-4 right-6"
                style={{ fontSize: '5.5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
              >
                {scene.num}
              </span>

              {/* Product image with radial glow */}
              <div className="flex-1 flex items-center justify-center mt-10">
                <div className="relative" style={{ width: 190, height: 230 }}>
                  {/* Radial glow layer behind the product */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      inset: '-40px',
                      background: `radial-gradient(ellipse at 50% 60%, ${scene.glowColor} 0%, transparent 65%)`,
                      filter: 'blur(24px)',
                    }}
                  />
                  <Image
                    src={scene.productImage}
                    alt={scene.productAlt}
                    fill
                    className="object-contain relative z-10"
                    sizes="190px"
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-3 relative z-10" style={{ overflow: 'visible' }}>
                {/* Script label */}
                <span
                  className="font-script block"
                  style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', color: 'var(--accent)', lineHeight: 1 }}
                >
                  {scene.script}
                </span>

                {/* Condensed headline — bleeds past right edge */}
                <h2
                  className="font-display leading-none"
                  style={{
                    fontSize: 'clamp(72px, 12vw, 9999px)',
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    lineHeight: 0.88,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {scene.headline[0]}
                  <br />
                  {scene.headline[1]}
                </h2>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)', maxWidth: 240 }}
                >
                  {scene.body}
                </p>

                {scene.tag && (
                  <p className="font-body" style={{ color: 'var(--text-primary)', fontSize: 18 }}>
                    {scene.tag}
                  </p>
                )}
                {scene.tagLabel && (
                  <p
                    className="font-body tracking-[0.2em] uppercase"
                    style={{ color: 'var(--text-muted)', fontSize: 9 }}
                  >
                    {scene.tagLabel}
                  </p>
                )}

                {/* CTA */}
                <div className="flex items-center gap-3 pt-1">
                  <span
                    className="font-body text-xs tracking-[0.18em] uppercase"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {scene.cta}
                  </span>
                  <span
                    style={{
                      width: 28, height: 28, borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.18)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 12, color: 'var(--text-muted)',
                    }}
                  >
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Scene dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {scenes.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeScene ? 20 : 5,
                height: 5, borderRadius: 3,
                background: i === activeScene ? 'var(--accent)' : 'rgba(255,255,255,0.18)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Right-edge progress line */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20"
          style={{ width: 2, background: 'rgba(255,255,255,0.04)' }}
        >
          <div style={{
            width: '100%',
            height: `${progress * 100}%`,
            background: 'var(--accent)',
            transition: 'height 0.1s linear',
          }} />
        </div>
      </div>
    </div>
  )
}
