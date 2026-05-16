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
    leftAlt: 'City Beats oversized tee — model shot',
    productImage: '/images/rebel-1.png',
    productAlt: 'Rebel With Revaan oversized tee',
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
    leftAlt: 'Pulpy oversized tee — model shot',
    productImage: '/images/rebel-2.png',
    productAlt: 'Rebel With Revaan oversized tee — alternate',
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
    productAlt: 'Revaan oversized tee — flat lay',
    tag: undefined as string | undefined,
    tagLabel: 'LIGHTWEIGHT YET DURABLE',
  },
]

export function ScrollSequence() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeScene, setActiveScene] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const container = containerRef.current
    if (!wrapper || !container) return

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top top',
      end: `+=${scenes.length * 100}vh`,
      pin: container,
      anticipatePin: 1,
      onUpdate: (self) => {
        setProgress(self.progress)
        const idx = Math.min(Math.floor(self.progress * scenes.length), scenes.length - 1)
        setActiveScene(idx)
      },
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: `+=${scenes.length * 100}vh`,
        scrub: 1.2,
      },
    })

    sceneRefs.current.forEach((scene, i) => {
      if (i === 0 || !scene) return
      const prev = sceneRefs.current[i - 1]
      const pos = i / scenes.length

      tl.fromTo(
        scene,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        pos - 0.3
      )
      if (prev) {
        tl.to(prev, { opacity: 0, y: -30, duration: 0.4 }, pos - 0.3)
      }
    })

    return () => {
      st.kill()
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${(scenes.length + 1) * 100}vh` }}
      id="collection"
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        {scenes.map((scene, i) => (
          <div
            key={i}
            ref={(el) => { sceneRefs.current[i] = el }}
            className="absolute inset-0 flex"
            style={{ opacity: i === 0 ? 1 : 0 }}
          >
            {/* ── LEFT: lifestyle image ── */}
            <div
              className="relative overflow-hidden"
              style={{ width: '65%' }}
            >
              <Image
                src={scene.leftImage}
                alt={scene.leftAlt}
                fill
                className="object-cover object-center"
                sizes="65vw"
                priority={i === 0}
              />
              {/* Dark overlay so text on top stays readable */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 60%, rgba(10,10,10,0.4) 100%)' }}
              />

              {/* Scene number watermark */}
              <span
                className="font-display select-none pointer-events-none absolute bottom-8 left-10"
                style={{
                  fontSize: 'clamp(80px, 14vw, 180px)',
                  color: 'rgba(255,255,255,0.06)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {scene.num}
              </span>

              {/* Bottom label */}
              <div className="absolute bottom-10 left-10">
                <p
                  className="font-body tracking-[0.25em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                >
                  SS25 · Revaan
                </p>
              </div>

              {/* Subtle bottom vignette */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{ height: '30%', background: 'linear-gradient(to top, rgba(10,10,10,0.5), transparent)' }}
              />
            </div>

            {/* Separator */}
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />

            {/* ── RIGHT: content panel ── */}
            <div
              className="flex flex-col justify-between py-10 px-8 relative overflow-hidden"
              style={{ width: '35%', background: '#111111' }}
            >
              {/* Muted scene number */}
              <span
                className="font-display absolute top-5 right-6 select-none pointer-events-none"
                style={{ fontSize: '6rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}
              >
                {scene.num}
              </span>

              {/* Product image */}
              <div className="flex-1 flex items-center justify-center mt-8">
                <div
                  className="relative"
                  style={{ width: 180, height: 220 }}
                >
                  <Image
                    src={scene.productImage}
                    alt={scene.productAlt}
                    fill
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span
                  className="font-script block"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 40px)', color: 'var(--accent)', lineHeight: 1.1 }}
                >
                  {scene.script}
                </span>

                <h2
                  className="font-display leading-none"
                  style={{ fontSize: 'clamp(32px, 4vw, 58px)', color: 'var(--text-primary)' }}
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

                <div className="flex items-center gap-3 pt-1">
                  <span
                    className="font-body text-xs tracking-[0.18em] uppercase"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {scene.cta}
                  </span>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      color: 'var(--text-muted)',
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
                height: 5,
                borderRadius: 3,
                background: i === activeScene ? 'var(--accent)' : 'rgba(255,255,255,0.18)',
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>

        {/* Right-edge progress */}
        <div
          className="absolute right-0 top-0 bottom-0 z-20"
          style={{ width: 2, background: 'rgba(255,255,255,0.04)' }}
        >
          <div
            style={{
              width: '100%',
              height: `${progress * 100}%`,
              background: 'var(--accent)',
              transition: 'height 0.1s linear',
            }}
          />
        </div>
      </div>
    </div>
  )
}
