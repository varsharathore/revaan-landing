import Image from 'next/image'
import Link from 'next/link'

// REPLACE: swap thumbnails with real Reel/TikTok video cover frames
// REPLACE: swap href with actual Instagram Reels or TikTok links
const reels = [
  {
    thumbnail: '/images/insta-rebel-print-closeup.jpg',
    caption: 'Puff Print. Up close. 🔥',
    views: '124K',
    href: 'https://instagram.com/berevaan_official',
  },
  {
    thumbnail: '/images/insta-rebel-warehouse.jpg',
    caption: 'Drop 05 — Behind the Scenes',
    views: '89K',
    href: 'https://instagram.com/berevaan_official',
  },
  {
    thumbnail: '/ai-images/hero-model-pulpy-woman-orange.png',
    caption: 'Pulpy Drop 01 — Campaign Day',
    views: '201K',
    href: 'https://instagram.com/berevaan_official',
  },
  {
    thumbnail: '/images/insta-being-me-dark.jpg',
    caption: 'Be Unapologetic. Always.',
    views: '76K',
    href: 'https://instagram.com/berevaan_official',
  },
  {
    thumbnail: '/ai-images/campaign-rebel-rebel-warehouse-v2.png',
    caption: 'Rebel Rebel — Build Day 🎨',
    views: '167K',
    href: 'https://instagram.com/berevaan_official',
  },
  {
    thumbnail: '/images/insta-pulpy-woman.jpg',
    caption: 'Street style with Drop 01',
    views: '93K',
    href: 'https://instagram.com/berevaan_official',
  },
]

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.45)" />
      <polygon points="10,8 18,12 10,16" fill="white" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function ReelsStrip() {
  return (
    <section className="bg-white py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-black/35 uppercase mb-2">
              CONTENT / CULTURE
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-black uppercase tracking-wide leading-none">
              Revaan in Motion
            </h2>
          </div>
          <Link
            href="https://instagram.com/berevaan_official"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-black hover:text-[#E84A10] transition-colors group"
          >
            <InstagramIcon />
            @berevaan_official
          </Link>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10 scrollbar-hide">
          {reels.map((reel, i) => (
            <Link
              key={i}
              href={reel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group relative overflow-hidden bg-[#EDEBE8]"
              style={{ width: 'clamp(140px, 18vw, 220px)' }}
            >
              {/* 9:16 portrait aspect — Reels format */}
              <div className="relative" style={{ aspectRatio: '9/16' }}>
                {/* REPLACE: real Reel thumbnail/cover frame */}
                <Image
                  src={reel.thumbnail}
                  alt={reel.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="220px"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                {/* Play button — center */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <polygon points="8,5 21,12 8,19" />
                    </svg>
                  </div>
                </div>

                {/* View count — top right */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-sm">
                  <span className="text-white text-[10px] font-bold tracking-wide">{reel.views}</span>
                </div>

                {/* Caption + handle — bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-3 pt-8 pb-3">
                  <p className="text-white text-[11px] font-semibold leading-snug line-clamp-2">
                    {reel.caption}
                  </p>
                  <p className="text-white/50 text-[10px] mt-0.5 tracking-wide">@berevaan_official</p>
                </div>
              </div>
            </Link>
          ))}

          {/* "See More" card */}
          <Link
            href="https://instagram.com/berevaan_official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#0A0A0A] flex flex-col items-center justify-center gap-3 hover:bg-[#E84A10] transition-colors duration-300 group"
            style={{ width: 'clamp(140px, 18vw, 220px)', aspectRatio: '9/16' }}
          >
            <InstagramIcon />
            <span className="font-display text-white text-lg tracking-widest uppercase text-center px-4 leading-tight">
              See All Reels
            </span>
            <span className="text-white/60 group-hover:text-white text-xl transition-colors duration-300">→</span>
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="https://instagram.com/berevaan_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-black border border-black px-6 py-3.5 hover:bg-black hover:text-white transition-all duration-300"
          >
            <InstagramIcon />
            Follow @berevaan_official
          </Link>
        </div>
      </div>
    </section>
  )
}
