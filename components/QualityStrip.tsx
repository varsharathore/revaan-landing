const features = [
  {
    title: 'Premium Fabric',
    sub: '280 GSM. Heavy weight. Real quality.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Puff Print',
    sub: 'Raised. Real. Unapologetic.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2" />
      </svg>
    ),
  },
  {
    title: 'Oversized Fit',
    sub: 'Cut to move. Made to wear loud.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Made in India',
    sub: 'Proudly built for the culture.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export function QualityStrip() {
  return (
    <section className="bg-[#0A0A0A] py-14 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: headline + subtext */}
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-white/30 uppercase mb-5">
              WHY IT HITS DIFFERENT
            </p>
            <h2 className="font-display text-white leading-none tracking-wide mb-6">
              <span className="block text-[14vw] sm:text-[10vw] lg:text-[6.5vw] xl:text-[7vw]">NOT</span>
              <span className="block text-[14vw] sm:text-[10vw] lg:text-[6.5vw] xl:text-[7vw] text-[#E84A10]">FAST</span>
              <span className="block text-[14vw] sm:text-[10vw] lg:text-[6.5vw] xl:text-[7vw]">FASHION.</span>
            </h2>
            <p className="text-white/45 text-[14px] font-body leading-relaxed max-w-[400px]">
              Premium fabric. Bold graphics. Oversized comfort.<br />
              Made to stand out — not to fall apart.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/15 px-5 py-3">
              <span className="font-display text-white text-2xl leading-none">280</span>
              <div>
                <div className="text-white text-[10px] font-bold tracking-[0.18em] uppercase leading-tight">GSM</div>
                <div className="text-white/35 text-[9.5px] tracking-wide">Heavy weight</div>
              </div>
              <span className="text-white/20 px-2">|</span>
              <span className="font-display text-white text-2xl leading-none">100%</span>
              <div>
                <div className="text-white text-[10px] font-bold tracking-[0.18em] uppercase leading-tight">Cotton</div>
                <div className="text-white/35 text-[9.5px] tracking-wide">Always</div>
              </div>
            </div>
          </div>

          {/* Right: 4 feature points in 2x2 grid */}
          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {features.map((f, i) => (
              <div key={i} className="border border-white/8 p-5 hover:border-[#E84A10]/40 transition-colors duration-300">
                <div className="text-[#E84A10] mb-3">{f.icon}</div>
                <div className="text-white font-bold text-[11.5px] tracking-[0.15em] uppercase mb-1">
                  {f.title}
                </div>
                <div className="text-white/40 text-[11px] leading-relaxed">{f.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
