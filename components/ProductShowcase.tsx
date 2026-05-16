'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const products = [
  { name: 'Rebel With Revaan — Oversized Tee', price: '₹2,199', image: '/images/rebel-1.png',    height: 320 },
  { name: 'Rebel With Revaan — Alternate',     price: '₹2,199', image: '/images/rebel-2.png',    height: 280 },
  { name: 'City Beats Oversized T-Shirt',      price: '₹1,999', image: '/images/citybeats-1.jpg', height: 360 },
  { name: 'Pulpy Oversized T-Shirt',           price: '₹1,999', image: '/images/pulpy-1.jpg',    height: 300 },
  { name: 'Wavy Core Oversized T-Shirt',       price: '₹2,099', image: '/images/wavy-1.jpg',     height: 340 },
  { name: 'F*cking Liar Oversized T-Shirt',    price: '₹2,199', image: '/images/liar-1.jpg',     height: 310 },
]

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section
      id="collection"
      ref={ref}
      className="py-20 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Heading */}
      <div className="px-8 md:px-16 flex items-end justify-between mb-12">
        <div className="relative">
          <motion.span
            className="font-script absolute -top-6 -left-2"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--accent)' }}
            initial={{ opacity: 0, rotate: -3 }}
            animate={inView ? { opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            The Drop
          </motion.span>
          <motion.h2
            className="font-display mt-6"
            style={{ fontSize: 'clamp(56px, 10vw, 9999px)', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            SS25 COLLECTION
          </motion.h2>
        </div>

        <a
          href="https://berevaan.com/collections/all"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-underline font-body text-xs tracking-[0.2em] uppercase"
          style={{ color: 'var(--text-muted)', cursor: 'none' }}
        >
          VIEW ALL ↗
        </a>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-5 px-8 md:px-16"
          style={{ x, width: 'max-content' }}
          data-cursor-enlarge
        >
          {products.map((product, i) => (
            <motion.a
              key={i}
              href="https://berevaan.com/collections/all"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 group"
              style={{ width: 'clamp(180px, 18vw, 240px)', cursor: 'none', display: 'block' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              {/* Product image */}
              <div
                className="relative overflow-hidden mb-3"
                style={{ height: product.height }}
              >
                {/* Radial glow — shows on hover */}
                <div
                  className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 70%, rgba(200,55,26,0.35) 0%, transparent 65%)',
                  }}
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="240px"
                />
                {/* Dark bottom gradient for text legibility */}
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{ height: '40%', background: 'linear-gradient(to top, rgba(10,10,10,0.6), transparent)' }}
                />
              </div>

              <p className="font-body text-sm" style={{ color: 'var(--text-primary)' }}>
                {product.price}
              </p>
              <p className="font-body text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                {product.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
