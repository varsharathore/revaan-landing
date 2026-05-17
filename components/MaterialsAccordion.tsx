'use client'
import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'

const items = [
  {
    title: 'THE FABRIC',
    content:
      '280 GSM combed cotton. Ring-spun for superior softness. Pre-shrunk so the fit stays true wash after wash. Dense enough to drape, light enough to breathe.',
  },
  {
    title: 'THE FIT',
    content:
      'Dropped shoulders. Extended length. Relaxed through the body. Built for layering or wearing alone — the silhouette works either way.',
  },
  {
    title: 'CARE & WASH',
    content:
      'Cold wash inside out. No tumble dry. Hang dry in shade. No bleach. Treat it right and it lasts years, not seasons.',
  },
  {
    title: 'SHIPPING & RETURNS',
    content:
      'We offer exchanges and returns within 7 days of delivery. Items must be unworn, unwashed, and in original condition with tags intact. Refunds are issued as store credit (gift card) valid for 6 months — shipping charges are non-refundable. Reverse pickup is arranged; if unavailable at your pincode, self-ship to our warehouse. Manufacturing defects (colour bleeding, stitching) are covered within 30 days. For help: contact.revaan@gmail.com · +91 73038 69977 · Mon–Sat 11am–7pm.',
  },
  {
    title: 'ORDER & CANCELLATION',
    content:
      'COD orders can be cancelled before dispatch — write to us immediately. Prepaid orders cannot be cancelled once placed. For size exchanges, if your size is unavailable, we will swap it for another product of equal value.',
  },
]

function AccordionItem({ title, content, index }: { title: string; content: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{ borderBottom: '1px solid rgba(20,18,16,0.1)' }}
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ cursor: 'none' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-body text-sm tracking-[0.15em] uppercase"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </span>
        <span
          className="font-body text-lg transition-transform duration-300"
          style={{
            color: 'var(--text-muted)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              className="font-body text-sm leading-relaxed pb-5"
              style={{ color: 'var(--text-muted)', maxWidth: 420 }}
            >
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MaterialsAccordion() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      id="craft"
      ref={ref}
      className="px-8 md:px-16"
      style={{ background: 'var(--bg)', padding: '60px 64px 80px' }}
    >
      {/* Heading — 11vw so it clips the right edge. Overlaps into the grid below via negative margin-bottom. */}
      <div style={{ marginBottom: '-1.5rem', overflow: 'hidden' }}>
        <motion.p
          className="font-body tracking-[0.3em] uppercase mb-2"
          style={{ color: 'var(--accent)', fontSize: 11 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Craft
        </motion.p>
        <motion.h2
          style={{
            fontFamily: '"Bebas Neue", "Anton", Impact, sans-serif',
            // 11vw: clips right edge of section intentionally (philosophy §4)
            fontSize: 'clamp(60px, 11vw, 9999px)',
            color: 'var(--text-primary)',
            lineHeight: 0.9,
            whiteSpace: 'nowrap',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          280 GSM PREMIUM
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — updated copy + proof bullets */}
        <div className="space-y-6">
          <motion.p
            className="font-body leading-relaxed"
            style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.2vw, 17px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Not every tee is made equal. Most streetwear brands chase margin — thinner
            fabric, looser stitching, colours that fade after five washes. We went the
            other way.
          </motion.p>

          <motion.p
            className="font-body leading-relaxed"
            style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.2vw, 17px)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            280 GSM combed cotton. Pre-shrunk. Pigment-dyed in small batches.
            Built to hold shape, weight, and colour.
          </motion.p>

          {/* Proof bullets */}
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.36 }}
          >
            {[
              'Heavyweight without feeling stiff',
              'Oversized fall with structure',
              'Pigment-dyed for deeper colour',
            ].map((point, i) => (
              <li key={i} className="font-body flex items-start gap-3"
                style={{ color: 'var(--text-primary)', fontSize: 'clamp(13px, 1.1vw, 16px)' }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>·</span>
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.p
            className="font-body leading-relaxed md:ml-0"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
          </motion.p>
        </div>

        {/* Right — accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ borderTop: '1px solid rgba(20,18,16,0.1)' }}
        >
          {items.map((item, i) => (
            <AccordionItem key={i} {...item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
