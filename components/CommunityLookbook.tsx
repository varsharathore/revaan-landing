import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    handle: '@rahul.street',
    image: '/ai-images/lookbook-rebel-man-outdoor.png',
    alt: 'Rebel With Revaan tee — outdoor editorial',
    aspect: 'aspect-[3/4]',
  },
  {
    handle: '@priya.wavs',
    image: '/images/liar-1.jpg',
    alt: 'F*cking Liar Tee — trio in red',
    aspect: 'aspect-[4/5]',
  },
  {
    handle: '@meher.j',
    image: '/images/pulpy-1.jpg',
    alt: 'Pulpy Revaan tee — orange editorial',
    aspect: 'aspect-[3/4]',
  },
  {
    handle: '@nina.acid',
    image: '/ai-images/lookbook-wavy-woman-studio.png',
    alt: 'Wavy Core tee — studio editorial',
    aspect: 'aspect-[4/5]',
  },
  {
    handle: '@deepika.dilli',
    image: '/images/citybeats-2.jpg',
    alt: 'City Beats tee — editorial pose',
    aspect: 'aspect-[3/4]',
  },
  {
    handle: '@karan.unapologetic',
    image: '/images/wavy-1.jpg',
    alt: 'Wavy Core — be unapologetic couple',
    aspect: 'aspect-[4/5]',
  },
  {
    handle: '@liar.girl',
    image: '/ai-images/lookbook-liar-woman-solo.png',
    alt: 'F*cking Liar Tee — solo editorial',
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
    <section className="bg-[#F8F5F2] py-10 md:py-14 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-10 mb-6">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[10.5px] font-bold tracking-[0.28em] text-black/40 uppercase mb-2 flex items-center gap-3">
                <span className="block w-8 h-px bg-black/25" />
                #WornWithRevaan
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-black uppercase leading-none tracking-wide">
                Worn by the Unapologetic
              </h2>
            </div>
            <Link
              href="https://instagram.com/berevaan_official"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 border border-black text-black text-[10.5px] font-bold uppercase tracking-[0.18em] px-5 py-3 hover:bg-black hover:text-white transition-all duration-300 group flex-shrink-0"
            >
              <InstagramIcon />
              Follow us
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>

        {/* Horizontal film strip */}
        <div className="flex gap-2 md:gap-2.5 overflow-x-auto pl-4 sm:pl-6 lg:pl-10 pr-4 pb-2 scrollbar-hide">
          {posts.map((post, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-44 sm:w-52 md:w-60 h-72 sm:h-80 md:h-[360px] group overflow-hidden cursor-pointer bg-[#E8E4DF]"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="240px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pb-3 px-3 pt-8">
                <span className="text-white text-[10.5px] font-semibold tracking-wide drop-shadow-sm">
                  {post.handle}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="px-4 mt-5 sm:hidden">
          <Link
            href="https://instagram.com/berevaan_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black text-black text-[10.5px] font-bold uppercase tracking-[0.18em] px-5 py-3 hover:bg-black hover:text-white transition-all duration-300 group"
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
