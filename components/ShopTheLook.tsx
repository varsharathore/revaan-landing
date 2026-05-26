'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Hotspot {
  id: number
  x: number  // % from left
  y: number  // % from top
  align: 'left' | 'right'  // which side tooltip opens
  product: {
    name: string
    price: number
    image: string
    tag: string
  }
}

// REPLACE: adjust x/y % when final campaign photo is dropped in
const hotspots: Hotspot[] = [
  {
    id: 1,
    x: 26,
    y: 48,
    align: 'right',
    product: {
      name: 'Pulpy Oversized T-Shirt',
      price: 1499,
      image: '/ai-images/product-card-pulpy-tee.png',
      tag: 'NEW',
    },
  },
  {
    id: 2,
    x: 52,
    y: 55,
    align: 'right',
    product: {
      name: 'City Beats Oversized T-Shirt',
      price: 1499,
      image: '/ai-images/product-card-art-district-tee.png',
      tag: 'NEW',
    },
  },
  {
    id: 3,
    x: 76,
    y: 44,
    align: 'left',
    product: {
      name: 'Rebel With Revaan Oversized Tee',
      price: 2199,
      image: '/ai-images/product-card-rebel-rebel-tee.png',
      tag: 'BESTSELLER',
    },
  },
]

function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function ShopTheLook() {
  const [activePin, setActivePin] = useState<number | null>(null)

  return (
    <section className="bg-[#F0ECE7] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 md:pt-18 pb-0">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 md:mb-8">
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.28em] text-black/35 uppercase mb-2">
              SHOPPABLE LOOKBOOK
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-black uppercase tracking-wide leading-none">
              Shop the Look
            </h2>
            <p className="text-black/45 text-[13px] font-body mt-2">
              Statement fits for the ones who show up loud.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase mb-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="10" />
            </svg>
            Tap the pins to shop
          </div>
        </div>
      </div>

      {/* Full-width image container */}
      <div
        className="relative w-full cursor-crosshair"
        style={{ aspectRatio: '16/7' }}
        onClick={() => setActivePin(null)}
      >
        {/* REPLACE: final campaign group editorial photo */}
        <Image
          src="/ai-images/brand-group-seven-models-crafted.png"
          alt="Shop the look — Revaan Drop 05"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlay — darkens baked text area on left, shows models */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        {/* Hotspot pins — desktop only */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="hidden md:block absolute"
            style={{
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: activePin === spot.id ? 30 : 20,
            }}
            onClick={(e) => {
              e.stopPropagation()
              setActivePin(activePin === spot.id ? null : spot.id)
            }}
          >
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-white/40 animate-ping scale-150 pointer-events-none" />

            {/* Pin button */}
            <button
              className={`relative w-9 h-9 rounded-full border-2 flex items-center justify-center shadow-xl transition-all duration-200 ${
                activePin === spot.id
                  ? 'bg-[#E84A10] border-[#E84A10] text-white scale-110'
                  : 'bg-white border-white text-black hover:bg-[#E84A10] hover:border-[#E84A10] hover:text-white hover:scale-110'
              }`}
              aria-label={`View ${spot.product.name}`}
            >
              <PlusIcon />
            </button>

            {/* Tooltip product card */}
            {activePin === spot.id && (
              <div
                className={`absolute bottom-14 bg-white shadow-2xl w-[200px] overflow-hidden ${
                  spot.align === 'left'
                    ? 'right-0'
                    : 'left-0'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Product image */}
                <div className="relative aspect-square bg-[#F0EDE9]">
                  <Image
                    src={spot.product.image}
                    alt={spot.product.name}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                  <span className="absolute top-2 left-2 bg-[#1432C8] text-white text-[9px] font-black tracking-widest px-2 py-0.5 uppercase">
                    {spot.product.tag}
                  </span>
                </div>
                {/* Info */}
                <div className="p-3">
                  <p className="text-[12px] font-semibold text-black leading-snug mb-0.5">
                    {spot.product.name}
                  </p>
                  <p className="text-[12px] font-bold text-black mb-3">
                    ₹{spot.product.price.toLocaleString('en-IN')}
                  </p>
                  <Link
                    href="#featured"
                    className="flex items-center justify-center gap-2 bg-black hover:bg-[#E84A10] text-white text-[10.5px] font-bold tracking-[0.16em] uppercase py-2.5 transition-colors duration-200"
                  >
                    Shop This Fit →
                  </Link>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Section label overlay — bottom left */}
        <div className="absolute bottom-6 left-4 sm:left-8 lg:left-12">
          <p className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase">
            Drop 05 · Summer ʼ25
          </p>
        </div>
      </div>

      {/* Mobile fallback — horizontal product scroll */}
      <div className="md:hidden px-4 py-6 bg-[#F0ECE7]">
        <p className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase mb-3">
          Products in this look
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {hotspots.map((spot) => (
            <div key={spot.id} className="flex-shrink-0 w-36 bg-white">
              <div className="relative aspect-square bg-[#EDEBE8]">
                <Image
                  src={spot.product.image}
                  alt={spot.product.name}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <div className="p-2.5">
                <p className="text-[11px] font-semibold text-black leading-snug">{spot.product.name}</p>
                <p className="text-[11px] font-bold text-black mt-0.5">₹{spot.product.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
