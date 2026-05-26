import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    handle: '@meher.j',
    image: '/images/insta-pulpy-woman-full.jpg',
    alt: 'Pulpy Revaan tee — street style',
    aspect: 'aspect-[3/4]',
  },
  {
    handle: '@bandra_kid',
    image: '/images/insta-being-me.jpg',
    alt: 'Revaan — be unapologetic',
    aspect: 'aspect-[4/5]',
  },
  {
    handle: '@aaravsmoke',
    image: '/images/insta-rebel-print-closeup.jpg',
    alt: 'Rebel Rebel puff print detail',
    aspect: 'aspect-square',
  },
  {
    handle: '@dilli.dani',
    image: '/images/insta-unapologetic-texture.jpg',
    alt: 'Unapologetic Tee — black on black',
    aspect: 'aspect-[4/5]',
  },
  {
    handle: '@arushistreet',
    image: '/images/insta-being-me-dark.jpg',
    alt: 'Revaan — built different',
    aspect: 'aspect-[3/4]',
  },
  {
    handle: '@rebel.syd',
    image: '/images/insta-pulpy-woman.jpg',
    alt: 'Pulpy Revaan — drop culture',
    aspect: 'aspect-[3/4]',
  },
]

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function CommunityLookbook() {
  return (
    <section className="bg-[#F8F5F2] py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-[10.5px] font-bold tracking-[0.28em] text-black/40 uppercase mb-3 flex items-center gap-3">
            <span className="block w-8 h-px bg-black/25" />
            #WornWithRevaan
          </p>
          <div className="flex items-end gap-4 sm:gap-5 flex-wrap">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[5rem] xl:text-[5.5rem] text-black uppercase leading-none tracking-wide">
              Worn by the Unapologetic
            </h2>
          </div>
          <p className="text-black/45 text-[13px] font-body mt-3">
            Real fits. Real attitude. Tag us to get featured.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 md:mb-4 relative group overflow-hidden cursor-pointer"
            >
              <div className={`relative ${post.aspect} overflow-hidden bg-[#E8E4DF]`}>
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pt-10 pb-3 px-3">
                  <span className="text-white text-[11px] font-semibold tracking-wide drop-shadow-sm">
                    {post.handle}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/8 pt-8">
          <p className="text-sm text-black/50 text-center sm:text-left font-body">
            Wear it. Tag it. Get featured.{' '}
            <span className="text-black font-semibold">#WornWithRevaan</span>
          </p>
          <Link
            href="https://instagram.com/berevaan_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-black text-black text-[11px] font-bold uppercase tracking-[0.18em] px-6 py-3.5 hover:bg-black hover:text-white transition-all duration-300 group"
          >
            <InstagramIcon />
            Follow @berevaan_official
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
