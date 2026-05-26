import Image from 'next/image'

function SignatureIcon() {
  return (
    <svg viewBox="0 0 180 60" fill="none" className="w-36 h-12">
      <path
        d="M10 45 C 30 10, 60 50, 80 30 C 100 10, 120 50, 145 25 C 155 18, 165 30, 170 20"
        stroke="#E84A10"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 50 C 40 48, 80 52, 110 49"
        stroke="#E84A10"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  )
}

export function FounderNote() {
  return (
    <section className="bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-[520px] lg:min-h-[600px]">

        {/* Left: Editorial photo */}
        <div className="relative w-full lg:w-[48%] h-[56vw] sm:h-[44vw] lg:h-auto overflow-hidden flex-shrink-0">
          {/* REPLACE: founder portrait or atelier/warehouse shoot */}
          <Image
            src="/ai-images/campaign-rebel-rebel-warehouse-v1.png"
            alt="Revaan — built in the streets"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
          {/* Overlay darkens toward right to blend into text column */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A0A0A]/80 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent lg:hidden" />

          {/* Stamp — bottom left */}
          <div className="absolute bottom-6 left-6 border border-white/20 px-4 py-2">
            <p className="font-display text-white text-sm tracking-[0.2em] uppercase">
              Indian Streetwear
            </p>
            <p className="text-white/40 text-[10px] tracking-widest uppercase mt-0.5">
              Est. 2024
            </p>
          </div>
        </div>

        {/* Right: Founder copy */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-20 py-14 lg:py-0">

          <p className="text-[10.5px] font-bold tracking-[0.28em] text-white/30 uppercase mb-5">
            THE BRAND STORY
          </p>

          {/* Headline */}
          <h2 className="font-display text-white text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[3.4rem] uppercase leading-tight tracking-wide mb-8">
            We started this for<br />
            <span className="text-[#E84A10]">everyday rebels.</span>
          </h2>

          {/* Note body */}
          <div className="space-y-4 mb-8 max-w-[480px]">
            <p className="text-white/65 text-[14px] leading-relaxed font-body">
              Revaan is Indian streetwear for people who don&apos;t shrink themselves. Built with bold graphics, oversized fits, and statement details for the ones who wear confidence loudly.
            </p>
            <p className="text-white/65 text-[14px] leading-relaxed font-body">
              We didn&apos;t start this in a Bandra studio or a Bangalore co-working space. Revaan came out of Orai — a city in UP where the culture moves fast but the brands never showed up.
            </p>
            <p className="text-white/65 text-[14px] leading-relaxed font-body">
              280 GSM. Oversized cut. Every detail earns its place. This isn&apos;t fast fashion. It never will be.
            </p>
          </div>

          {/* Signature */}
          <div className="flex flex-col gap-1 mb-8">
            <SignatureIcon />
            <p className="text-white/40 text-[11px] tracking-[0.18em] uppercase font-body">
              — Founders, REVAAN
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#E84A10] text-black hover:text-white font-bold uppercase tracking-[0.18em] text-[11px] px-7 py-3.5 transition-all duration-300 group"
            >
              Shop the Drop
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
