'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const BEBAS  = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Cormorant", Georgia, serif'

const products = [
  { name: 'Rebel With Revaan Tee',      price: '₹2,199', image: '/images/rebel-1.png',     height: 380, fit: 'contain' as const },
  { name: 'City Beats Oversized Tee',   price: '₹1,999', image: '/images/citybeats-1.jpg', height: 300, fit: 'cover' as const },
  { name: 'Pulpy Oversized Tee',        price: '₹1,999', image: '/images/pulpy-2.jpg',     height: 420, fit: 'cover' as const },
  { name: 'Wavy Core Oversized Tee',    price: '₹2,099', image: '/images/wavy-1.jpg',      height: 340, fit: 'cover' as const },
  { name: 'F*cking Liar Oversized Tee', price: '₹2,199', image: '/images/liar-1.jpg',      height: 360, fit: 'cover' as const },
  { name: 'Rebel With Revaan — Alt',    price: '₹2,199', image: '/images/rebel-2.png',     height: 290, fit: 'contain' as const },
]

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])

  return (
    <section id="collection" ref={ref} style={{ background: 'var(--bg)', padding: '160px 0 0' }}>
      {/* Heading — "The Drop" is one of the 3 allowed Cormorant script uses */}
      <div className="px-8 md:px-16 flex items-end justify-between mb-12">
        <div className="relative" style={{ paddingTop: '2.5rem' }}>
          <span
            className="absolute top-0 left-0"
            style={{
              fontFamily: SCRIPT,
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(30px, 4.5vw, 60px)',
              color: 'var(--accent)',
            }}
          >
            The Drop
          </span>
          <motion.h2
            style={{
              fontFamily: BEBAS,
              fontSize: 'clamp(40px, 6.5vw, 80px)',
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            SS25 COLLECTION
          </motion.h2>
        </div>
        <a
          href="https://berevaan.com/collections/all"
          target="_blank" rel="noopener noreferrer"
          className="hover-underline font-body text-xs tracking-[0.2em] uppercase flex-shrink-0 ml-8"
          style={{ color: 'var(--text-muted)', cursor: 'none' }}
        >
          VIEW ALL ↗
        </a>
      </div>

      {/* Horizontal scroll strip */}
      <div className="overflow-hidden pb-12">
        <motion.div
          className="flex gap-4 px-8 md:px-16"
          style={{ x, width: 'max-content', alignItems: 'flex-end' }}
          data-cursor-enlarge
        >
          {products.map((product, i) => (
            <motion.a
              key={i}
              href="https://berevaan.com/collections/all"
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 group"
              style={{ width: 'clamp(180px, 16vw, 220px)', cursor: 'none', display: 'block' }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.07 }}
            >
              {/* Product image — slightly brightened filter so tees are clearly visible */}
              <div
                className="relative overflow-hidden mb-3"
                style={{ height: product.height, background: '#0A0A0A' }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-${product.fit} object-top transition-transform duration-700 group-hover:scale-[1.03]`}
                  sizes="220px"
                  style={{ filter: 'brightness(1.08) contrast(1.02)' }}
                />
              </div>

              {/* Card info */}
              <p className="font-body text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                {product.price}
              </p>
              <p className="font-body text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {product.name}
              </p>
              <p className="font-body tracking-[0.12em] uppercase mt-0.5" style={{ color: 'var(--text-muted)', fontSize: 9 }}>
                280 GSM Oversized Fit
              </p>
              <a
                href="https://berevaan.com/collections/all"
                className="inline-block font-body text-xs tracking-[0.15em] uppercase mt-2"
                style={{ color: 'var(--accent)', cursor: 'none' }}
              >
                View Tee →
              </a>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
