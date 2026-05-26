'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Product } from '@/lib/products'

const tagConfig = {
  new: { label: 'NEW', class: 'bg-[#1432C8] text-white' },
  bestseller: { label: 'BESTSELLER', class: 'bg-[#E84A10] text-white' },
  limited: { label: 'LIMITED', class: 'bg-red-700 text-white' },
}

export function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)
  const [activeColor, setActiveColor] = useState(0)

  const img = product.images[hovered && product.images.length > 1 ? 1 : 0]
  const tag = product.tag ? tagConfig[product.tag] : null

  return (
    <div
      className="group relative flex flex-col bg-[#F6F4F1] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.13)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#EDEBE8]">
        {/* REPLACE: product tee flat-lay or model photo */}
        <Image
          src={img}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Tag badge */}
        {tag && (
          <span className={`absolute top-2.5 left-2.5 text-[9.5px] font-black tracking-[0.16em] px-2.5 py-1 uppercase ${tag.class}`}>
            {tag.label}
          </span>
        )}

        {/* Hover CTA — Quick Add + View Product */}
        <div className="absolute inset-x-0 bottom-0 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex">
          <button className="flex-1 bg-black hover:bg-[#E84A10] text-white text-[10px] font-bold tracking-[0.18em] uppercase py-3 transition-colors duration-200">
            Quick Add
          </button>
          <a href="#" className="w-10 flex-shrink-0 bg-white/10 hover:bg-white/20 border-l border-white/15 flex items-center justify-center text-white text-sm transition-colors duration-200">
            →
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="px-3 pt-3 pb-3.5">
        {/* Color swatches */}
        <div className="flex gap-1.5 mb-2.5">
          {product.colors.map((c, i) => (
            <button
              key={i}
              title={c.name}
              onClick={(e) => { e.stopPropagation(); setActiveColor(i) }}
              className={`w-[14px] h-[14px] rounded-full border-[1.5px] transition-all duration-150 ${
                activeColor === i
                  ? 'border-black scale-110'
                  : 'border-gray-300 hover:border-gray-500'
              } ${c.hex === '#FFFFFF' ? 'ring-1 ring-gray-200' : ''}`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        <p className="text-[12.5px] font-medium text-gray-800 leading-snug line-clamp-1">
          {product.name}
        </p>
        <p className="text-[13px] font-bold text-black mt-1">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
      </div>
    </div>
  )
}
