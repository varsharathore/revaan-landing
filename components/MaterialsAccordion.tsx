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
      style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
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
      className="py-24 px-8 md:px-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Heading */}
      <div className="mb-16 relative">
        <motion.span
          className="font-script absolute -top-4 left-0"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: 'var(--accent)' }}
          initial={{ opacity: 0, rotate: -3 }}
          animate={inView ? { opacity: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Craft
        </motion.span>
        <motion.h2
          className="font-display mt-10"
          style={{ fontSize: 'clamp(36px, 6vw, 80px)', color: 'var(--text-primary)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          280 GSM PREMIUM
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Left — copy paragraphs */}
        <div className="space-y-8">
          <motion.p
            className="font-body text-sm leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Not every tee is made equal. Most streetwear brands chase margin — thinner
            fabric, looser stitching, colours that fade after five washes. We went the
            other way.
          </motion.p>

          <motion.p
            className="font-body text-sm leading-relaxed md:ml-8"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            280 GSM combed cotton. Pre-shrunk. Pigment-dyed in small batches. The fabric
            drapes with weight. The colours deepen with wear. These are tees you keep.
          </motion.p>
        </div>

        {/* Right — accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          {items.map((item, i) => (
            <AccordionItem key={i} {...item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
