'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const BEBAS   = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT  = '"Yellowtail", var(--font-yellowtail), cursive'

// Single panel bg — matches page --bg exactly so left/right read as one surface
const PANEL = '#F8F4EF'

const scenes = [
  {
    num: '01',
    script: 'Rebellion',
    showScript: true,
    headline: ['BE', 'UNAPOLOGETIC'],
    body: 'Designed for the streets. Worn by those who don\'t ask for permission.',
    cta: 'View Collection',
    leftImage: '/images/insta-rebel-warehouse.jpg',
    leftAlt: 'Rebel With Revaan tee — warehouse editorial',
    leftFit: 'cover' as const,
    productImage: '/images/png-iphone/rebel-woman-solo.png',
    productAlt: 'Rebel With Revaan tee — model',
    panelBg: PANEL,
    textHead: '#141210',
    textBody: '#6A6460',
    scriptColor: '#C8371A',
    tag: undefined as string | undefined,
    tagLabel: undefined as string | undefined,
  },
  {
    num: '02',
    script: 'The Drop',
    showScript: true,
    headline: ['REBEL WITH', 'REVAAN'],
    body: '240 GSM French Terry Cotton · Superior fall. The weight you feel. The statement you make.',
    cta: 'Shop Now',
    leftImage: '/images/png-iphone/wavy-duo.png',
    leftAlt: 'Wavy Core tee — duo',
    leftFit: 'contain' as const,
    productImage: '/images/insta-pulpy-woman.jpg',
    productAlt: 'Pulpy Revaan tee — model',
    panelBg: PANEL,
    textHead: '#141210',
    textBody: '#6A6460',
    scriptColor: '#C8371A',
    tag: '₹2,199',
    tagLabel: '240 GSM FRENCH TERRY · SUPERIOR FALL',
  },
  {
    num: '03',
    script: '',
    showScript: false,
    headline: ['BUILT', 'TO LAST'],
    body: 'Lightweight yet durable. Every thread engineered for the long run.',
    cta: 'Our Story',
    leftImage: '/images/png-iphone/liar-group.png',
    leftAlt: 'F*cking Liar tee — group',
    leftFit: 'contain' as const,
    productImage: '/images/insta-rebel-hanger.jpg',
    productAlt: 'Rebel With Revaan — hot drop',
    panelBg: PANEL,
    textHead: '#141210',
    textBody: '#6A6460',
    scriptColor: '#C8371A',
    tag: undefined as string | undefined,
    tagLabel: 'LIGHTWEIGHT YET DURABLE',
  },
]

const DWELL = 0.8
const FADE  = 0.3

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

    sceneRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { opacity: i === 0 ? 1 : 0, zIndex: i })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: `+=${scenes.length * 100}vh`,
        pin: container,
        anticipatePin: 1,
        scrub: 1,   // was 2; Lenis lerp:0.08 already adds smoothness — no double lag
        onUpdate: (self) => {
          setProgress(self.progress)
          const idx = Math.min(Math.floor(self.progress * scenes.length), scenes.length - 1)
          setActiveScene(idx)
        },
      },
    })

    scenes.forEach((_, i) => {
      if (i === 0) return
      const prev = sceneRefs.current[i - 1]
      const curr = sceneRefs.current[i]
      const fadeStart = (i - 1) * (DWELL + FADE) + DWELL
      if (prev) tl.to(prev, { opacity: 0, duration: FADE, ease: 'linear' }, fadeStart)
      if (curr) tl.to(curr, { opacity: 1, duration: FADE, ease: 'linear' }, fadeStart)
    })

    const totalDuration = (scenes.length - 1) * (DWELL + FADE) + DWELL + FADE + DWELL
    tl.to({}, { duration: 0.01 }, totalDuration)

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <div ref={wrapperRef} id="collection">
      <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={(el) => { sceneRefs.current[i] = el }}
            className="absolute inset-0 flex"
          >
            {/* ── LEFT 65%: lifestyle image — bg matches right panel ── */}
            <div className="relative overflow-hidden" style={{ width: '65%', background: PANEL }}>
              <Image
                src={scene.leftImage}
                alt={scene.leftAlt}
                fill
                className={`object-${scene.leftFit} ${scene.leftFit === 'contain' ? 'object-bottom img-blend' : 'object-center'}`}
                sizes="65vw"
                priority={i === 0}
              />
              {/* Blend gradient: photo right edge → cream, hides the hard seam */}
              <div
                aria-hidden
                style={{
                  position: 'absolute', top: 0, right: 0, bottom: 0, width: '22%',
                  background: `linear-gradient(to right, transparent, ${PANEL})`,
                  zIndex: 2, pointerEvents: 'none',
                }}
              />
              {/* Watermark number — dark on light photos */}
              <span className="absolute bottom-6 left-8 select-none pointer-events-none" style={{
                fontFamily: BEBAS, fontSize: 'clamp(100px, 16vw, 200px)',
                color: 'rgba(20,18,16,0.06)', lineHeight: 1,
              }}>{scene.num}</span>
              <p className="absolute bottom-9 left-12 font-body tracking-[0.25em] uppercase"
                style={{ color: 'rgba(20,18,16,0.35)', fontSize: 10 }}>SS26 · Revaan</p>
            </div>

            {/* No separator — left and right share the same bg color */}

            {/* ── RIGHT 35%: bg = exact product photo background ── */}
            <div
              className="flex flex-col relative"
              style={{ width: '35%', background: scene.panelBg }}
            >
              {/* Product — fills flex-1 so model is as tall as the panel allows */}
              <div className="flex-1 relative overflow-hidden" style={{ minHeight: 0 }}>
                <Image
                  src={scene.productImage}
                  alt={scene.productAlt}
                  fill
                  className="object-contain object-bottom img-blend"
                  sizes="35vw"
                />
              </div>

              {/* Content — text colors adapted to light panel bg */}
              <div className="px-7 pb-9 space-y-3 flex-shrink-0" style={{ overflow: 'visible' }}>
                {/* Muted scene number */}
                <span className="select-none pointer-events-none absolute top-4 right-5" style={{
                  fontFamily: BEBAS, fontSize: '4rem', color: 'rgba(0,0,0,0.06)', lineHeight: 1,
                }}>{scene.num}</span>

                {scene.showScript && (
                  <span style={{
                    fontFamily: SCRIPT, fontWeight: 400,
                    fontSize: 'clamp(34px, 5vw, 72px)',
                    color: scene.scriptColor, lineHeight: 1, display: 'block',
                    opacity: 0.75,
                  }}>{scene.script}</span>
                )}

                <h2 style={{
                  fontFamily: BEBAS,
                  fontSize: 'clamp(52px, 8vw, 9999px)',
                  color: scene.textHead,
                  lineHeight: 0.88,
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.01em',
                }}>
                  {scene.headline[0]}<br />{scene.headline[1]}
                </h2>

                <p className="font-body text-sm leading-relaxed" style={{ color: scene.textBody, maxWidth: 240 }}>
                  {scene.body}
                </p>

                {scene.tag && (
                  <p style={{ fontFamily: 'DM Sans, sans-serif', color: scene.textHead, fontSize: 16 }}>
                    {scene.tag}
                  </p>
                )}
                {scene.tagLabel && (
                  <p className="font-body tracking-[0.2em] uppercase" style={{ color: scene.textBody, fontSize: 9 }}>
                    {scene.tagLabel}
                  </p>
                )}

                <div className="flex items-center gap-3 pt-1">
                  <span className="font-body text-xs tracking-[0.18em] uppercase" style={{ color: scene.textBody }}>
                    {scene.cta}
                  </span>
                  <span style={{
                    width: 26, height: 26, borderRadius: '50%',
                    border: `1px solid ${scene.textBody}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, color: scene.textBody, flexShrink: 0,
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
              background: i === activeScene ? 'var(--accent)' : 'rgba(20,18,16,0.2)',
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>

        <div className="absolute right-0 top-0 bottom-0 z-30" style={{ width: 2, background: 'rgba(20,18,16,0.06)' }}>
          <div style={{ width: '100%', height: `${progress * 100}%`, background: 'var(--accent)', transition: 'height 0.1s linear' }} />
        </div>
      </div>
    </div>
  )
}
