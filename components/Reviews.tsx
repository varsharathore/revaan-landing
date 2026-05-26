import Image from 'next/image'

const reviews = [
  {
    name: 'Aryan K.',
    location: 'Mumbai',
    rating: 5,
    product: 'Rebel With Revaan Oversized Tee',
    productImage: '/ai-images/product-card-rebel-rebel-tee.png',
    text: 'The puff print is actually raised. Like physically 3D. Everyone at the gig asked where I got it. Zero apologies about wearing this loud.',
    verified: true,
  },
  {
    name: 'Priya S.',
    location: 'Bengaluru',
    rating: 5,
    product: 'Pulpy Oversized Tee',
    productImage: '/ai-images/product-card-pulpy-tee.png',
    text: 'Ordered two colours. The blue hits different in person. 280 GSM feels heavy in your hands the moment you pick it up. This isn\'t fast fashion and you can tell.',
    verified: true,
  },
  {
    name: 'Karan M.',
    location: 'Delhi',
    rating: 5,
    product: 'City Beats Oversized T-Shirt',
    productImage: '/ai-images/product-card-art-district-tee.png',
    text: 'Fit is oversized but structured — doesn\'t look sloppy. Washed it 6 times, print hasn\'t cracked once. Built different is not just copy.',
    verified: true,
  },
]

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#E84A10' : 'none'} stroke="#E84A10" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="currentColor" className="text-[#E84A10]/20">
      <path d="M0 22V13.2C0 9.6 0.933333 6.6 2.8 4.2C4.66667 1.8 7.2 0.4 10.4 0L11.6 2.4C9.73333 2.8 8.2 3.73333 7 5.2C5.8 6.66667 5.2 8.26667 5.2 10H10.4V22H0ZM16.4 22V13.2C16.4 9.6 17.3333 6.6 19.2 4.2C21.0667 1.8 23.6 0.4 26.8 0L28 2.4C26.1333 2.8 24.6 3.73333 23.4 5.2C22.2 6.66667 21.6 8.26667 21.6 10H26.8V22H16.4Z" />
    </svg>
  )
}

export function Reviews() {
  const avgRating = 4.9
  const totalReviews = 1240

  return (
    <section className="bg-[#0A0A0A] py-14 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-white/30 uppercase mb-3">
              SOCIAL PROOF
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-white uppercase tracking-wide leading-none">
              The Cult Speaks
            </h2>
            <p className="text-white/35 text-[13px] font-body mt-2">
              Real words from people who wear it loud.
            </p>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-3 pb-1">
            <div className="font-display text-5xl text-white leading-none">{avgRating}</div>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} filled={s <= Math.floor(avgRating)} />)}
              </div>
              <div className="text-white/35 text-[10px] tracking-wide mt-1">
                {totalReviews.toLocaleString('en-IN')} verified reviews
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-5 md:p-6 flex flex-col">
              {/* Stars + verified */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} filled={s <= r.rating} />)}
                </div>
                {r.verified && (
                  <span className="text-[9px] font-black tracking-[0.18em] text-[#1432C8] uppercase border border-[#1432C8]/30 px-2 py-0.5">
                    VERIFIED BUYER
                  </span>
                )}
              </div>

              {/* Quote */}
              <div className="flex-1 mb-5">
                <QuoteIcon />
                <p className="text-[13.5px] text-gray-800 leading-relaxed mt-2 font-body">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              {/* Reviewer + product */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-[12.5px] font-bold text-black">{r.name}</p>
                  <p className="text-[11px] text-gray-400 tracking-wide">{r.location}</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* REPLACE: product thumbnail */}
                  <div className="relative w-10 h-10 bg-[#F0EDE9] overflow-hidden flex-shrink-0">
                    <Image
                      src={r.productImage}
                      alt={r.product}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <p className="text-[10.5px] text-gray-500 max-w-[90px] leading-tight">{r.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#featured"
            className="inline-flex items-center gap-3 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group"
          >
            Shop What They Love
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
