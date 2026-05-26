import Image from 'next/image'

function CrownIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 21l2-8 5 4 3-9 3 9 5-4 2 8H2z" />
      <rect x="2" y="21" width="20" height="2" />
    </svg>
  )
}

export function CampaignBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0E0202] min-h-[440px] lg:min-h-[520px]">

      {/* Full-bleed Rebel Rebel campaign photo — dark warehouse, man in tee, puff print tag */}
      {/* REPLACE: use final campaign photo when ready */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ai-images/campaign-rebel-rebel-warehouse-v2.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay — heavier on left for headline legibility, lighter on right to let image breathe */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/20" />
        {/* Bottom gradient to anchor the section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center min-h-[440px] lg:min-h-[520px] py-14 lg:py-0 gap-10 lg:gap-0">

        {/* Left text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[#E84A10] text-[10px] font-black tracking-[0.3em] uppercase mb-4">
            <CrownIcon />
            New Drop · Live Now
          </div>

          <h2 className="font-display text-white leading-none mb-5">
            <span className="block text-[17vw] sm:text-[12vw] lg:text-[7.5vw] xl:text-[8vw]">REBEL</span>
            <span className="block text-[17vw] sm:text-[12vw] lg:text-[7.5vw] xl:text-[8vw]">REBEL</span>
          </h2>

          <p className="text-white/65 text-sm sm:text-[15px] font-body mb-8 max-w-[300px] leading-relaxed">
            Puff print. Bold texture. Bigger impact.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#E84A10] hover:bg-[#C83200] text-white font-bold uppercase tracking-[0.18em] text-[12px] px-7 py-[15px] transition-all duration-300 group"
          >
            Explore Drop
            <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-200 text-base leading-none">
              →
            </span>
          </a>
        </div>

        {/* Right side: empty — the campaign photo already has tee + sticker + puff-print tag composed in */}
        <div className="hidden lg:block flex-1" />
      </div>
    </section>
  )
}
