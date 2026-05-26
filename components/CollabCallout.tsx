'use client'

import { useState } from 'react'

export function CollabCallout() {
  const [registered, setRegistered] = useState(false)

  return (
    <section className="bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, white 3px, white 4px), repeating-linear-gradient(90deg, transparent, transparent 3px, white 3px, white 4px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24 text-center">

        {/* Label */}
        <p className="inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[0.3em] text-[#E84A10] uppercase mb-6">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Dropping Soon · Artist Capsule
        </p>

        {/* Headline */}
        <h2 className="font-display text-white leading-none tracking-wide mb-5">
          <span className="block" style={{ fontSize: 'clamp(52px, 10vw, 130px)' }}>
            COMING SOON
          </span>
        </h2>

        {/* Sub */}
        <p className="font-display text-white/20 text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider mb-10">
          An Artist-Led Capsule
        </p>

        {/* Details row */}
        <div className="flex items-center justify-center gap-8 sm:gap-14 mb-10 flex-wrap">
          {[
            { label: 'PIECES', value: '3' },
            { label: 'EDITION', value: 'LIMITED' },
            { label: 'ACCESS', value: 'EARLY ONLY' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-display text-white text-3xl sm:text-4xl leading-none">{item.value}</div>
              <div className="text-white/30 text-[10px] tracking-[0.22em] uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-white/40 text-sm font-body leading-relaxed max-w-[360px] mx-auto mb-10">
          Limited pieces. Built to stand out.<br />Not for everyone — and that&apos;s the point.
        </p>

        {/* CTA */}
        {registered ? (
          <div className="inline-flex items-center gap-3 border border-[#E84A10]/40 text-[#E84A10] text-sm font-bold tracking-widest uppercase px-8 py-4">
            You&apos;re on the list. Stay ready.
          </div>
        ) : (
          <button
            onClick={() => setRegistered(true)}
            className="inline-flex items-center gap-3 bg-white hover:bg-[#E84A10] text-black hover:text-white font-bold uppercase tracking-[0.18em] text-[12px] px-10 py-4 transition-all duration-300 group"
          >
            Get Early Access
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-base leading-none">→</span>
          </button>
        )}

        <p className="text-white/20 text-[10px] tracking-wide uppercase mt-4">
          Registered members get first access.
        </p>
      </div>
    </section>
  )
}
