import Image from 'next/image'

function CircularBadge() {
  return (
    <svg viewBox="0 0 180 180" className="w-full h-full" aria-label="Indian Streetwear For The Culture">
      <defs>
        <path
          id="revaan-circle"
          d="M 90,90 m -66,0 a 66,66 0 1,1 132,0 a 66,66 0 1,1 -132,0"
        />
      </defs>
      <circle cx="90" cy="90" r="78" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx="90" cy="90" r="66" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <text fontSize="11.5" fontFamily="'DM Sans', system-ui, sans-serif" fill="white" letterSpacing="3" fontWeight="700">
        <textPath href="#revaan-circle" startOffset="3%">
          • INDIAN STREETWEAR • FOR THE CULTURE
        </textPath>
      </text>
      <text x="90" y="97" textAnchor="middle" fill="white" fontSize="26" fontWeight="700" fontFamily="sans-serif">→</text>
    </svg>
  )
}

function SmileyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 13s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[90vh] bg-[#0E1FA8] overflow-hidden flex items-stretch">

      {/* Full-bleed campaign photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-images/brand-group-seven-models-crafted.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1FA8]/97 via-[#1432C8]/82 lg:via-[#1432C8]/60 to-[#1432C8]/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
      </div>

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 w-full flex flex-col lg:flex-row items-stretch min-h-[88vh]">

        {/* Left: Text column */}
        <div className="flex flex-col justify-center pt-14 pb-8 lg:py-0 lg:w-[48%] xl:w-[44%]">

          {/* Eyebrow */}
          <p className="text-[10px] font-bold tracking-[0.32em] text-white/50 uppercase mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-white/30" />
            Bold · Fearless · Authentic
          </p>

          {/* Headline */}
          <h1 className="leading-none">
            <span className="font-display block text-white text-[22vw] sm:text-[17vw] lg:text-[10.5vw] xl:text-[11vw] leading-[0.88]">
              BE
            </span>
            <span className="font-display block text-white text-[13.5vw] sm:text-[10.5vw] lg:text-[6.2vw] xl:text-[6.6vw] leading-[0.92]">
              UNAPOLOGETIC.
            </span>
          </h1>

          <p className="text-white/65 text-sm sm:text-[15px] leading-relaxed mt-5 mb-8 max-w-[280px] font-body">
            Street-built. Culture-driven.<br />Made to stand out.
          </p>

          {/* CTA */}
          <a
            href="#featured"
            className="inline-flex items-center gap-3 bg-[#E84A10] hover:bg-[#C83200] text-white font-bold uppercase tracking-[0.18em] text-[12px] px-8 py-4 transition-all duration-300 group self-start"
          >
            Shop New Drop
            <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-200 text-base leading-none">
              →
            </span>
          </a>

          {/* Built Different sticker — desktop */}
          <div
            className="hidden lg:inline-flex items-center gap-2.5 mt-12 bg-white px-4 py-2.5 shadow-lg w-fit"
            style={{ transform: 'rotate(-2.5deg)' }}
          >
            <span className="text-black"><SmileyIcon /></span>
            <span className="font-display text-black text-xl tracking-[0.15em]">BUILT DIFFERENT</span>
          </div>
        </div>

        {/* Right: model portrait — clean, no floating cards */}
        <div className="relative flex-1 flex items-end justify-center lg:justify-end overflow-visible mt-6 lg:mt-0">

          <div className="relative w-[72vw] sm:w-[54vw] lg:w-[46%] xl:w-[44%] h-[70vw] sm:h-[56vw] lg:h-[90%] self-end">
            <Image
              src="/ai-images/hero-model-pulpy-woman-orange.png"
              alt="REVAAN — Be Unapologetic"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 72vw, (max-width: 1024px) 54vw, 44vw"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0E1FA8]/70 to-transparent" />
          </div>

          {/* Built Different sticker — mobile only */}
          <div
            className="lg:hidden absolute top-3 left-1 inline-flex items-center gap-1.5 bg-white px-2.5 py-2 shadow-lg"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <span className="text-black text-sm"><SmileyIcon /></span>
            <span className="font-display text-black text-[13px] tracking-[0.12em]">BUILT DIFFERENT</span>
          </div>

          {/* Circular badge — top right */}
          <div className="absolute top-4 right-1 sm:right-3 lg:top-8 lg:right-5 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] lg:w-[104px] lg:h-[104px]">
            <CircularBadge />
          </div>

          {/* Not Fast Fashion tag — anchors to bottom right */}
          <div className="absolute bottom-8 right-2 sm:right-4 lg:right-8 bg-[#E84A10] px-3 py-2 hidden sm:block"
            style={{ transform: 'rotate(1.5deg)' }}
          >
            <span className="font-display text-white text-[11px] tracking-[0.18em] uppercase block leading-snug">
              NOT FAST<br />FASHION
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
