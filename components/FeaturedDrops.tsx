import { featuredProducts } from '@/lib/products'
import { ProductCard } from './ProductCard'

export function FeaturedDrops() {
  return (
    <section id="featured" className="bg-[#F8F6F3] py-14 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-black/35 uppercase mb-3">
              LATEST COLLECTION
            </p>
            <div className="flex items-end gap-3 sm:gap-4 flex-wrap">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-black uppercase tracking-wide leading-none">
                Featured Drops
              </h2>
              <span className="font-script text-[#E84A10] text-xl sm:text-2xl italic leading-none mb-1 sm:mb-2">
                Hot right now
              </span>
            </div>
            <p className="text-black/45 text-[13px] font-body mt-2.5">
              Statement pieces built for everyday rebels.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black hover:text-[#E84A10] transition-colors group flex-shrink-0 mb-1"
          >
            View All Drops
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Product grid — 4 cols desktop, 3 tablet, 2 mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-black px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            View All Drops →
          </a>
        </div>
      </div>
    </section>
  )
}
