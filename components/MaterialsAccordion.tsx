'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'motion/react'

const BEBAS  = '"Bebas Neue", "Anton", Impact, sans-serif'
const SCRIPT = '"Yellowtail", var(--font-yellowtail), cursive'

const items = [
  {
    title: 'THE FABRIC',
    content:
      '240 GSM French Terry Cotton. Ring-spun for superior softness. Pre-shrunk so the fit stays true wash after wash. Dense enough to drape, light enough to breathe.',
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
    title: 'SHIPPING, RETURNS & ORDERS',
    content:
      'Exchanges and returns within 7 days — unworn, unwashed, tags intact. Refunds as store credit (6-month gift card); shipping non-refundable. Defects covered 30 days. COD: cancel before dispatch. Prepaid: no cancellation. Size unavailable? We swap for equal value. Help: contact.revaan@gmail.com · +91 73038 69977 · Mon–Sat 11am–7pm.',
  },
]

function AccordionItem({ title, content }: { title: string; content: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(20,18,16,0.1)' }}>
      <button
        className="w-full flex items-center justify-between py-6 text-left"
        style={{ cursor: 'none' }}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: '"Bebas Neue", "Anton", Impact, sans-serif',
            fontSize: 'clamp(16px, 1.5vw, 22px)',
            letterSpacing: '0.08em',
            color: 'var(--text-primary)',
          }}
        >
          {title}
        </span>
        <span
          className="transition-transform duration-300 flex-shrink-0 ml-4"
          style={{
            color: 'var(--accent)',
            fontSize: 24,
            fontWeight: 300,
            lineHeight: 1,
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
              className="font-body leading-relaxed pb-6"
              style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 1.1vw, 16px)', maxWidth: 420 }}
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
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section
      id="craft"
      ref={ref}
      className="craft-section relative overflow-hidden"
      style={{ background: 'var(--bg)', padding: '80px 0 100px' }}
    >
      {/* ── Main grid: left image collage | right content ── */}
      <div className="craft-grid" style={{ display: 'grid', gridTemplateColumns: '44% 56%', alignItems: 'start' }}>

        {/* LEFT — editorial image stagger, matches Behance layout */}
        <motion.div
          className="craft-images relative"
          style={{ paddingLeft: 64, paddingRight: 20 }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Two images at different heights */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            {/* Tall image */}
            <div
              className="relative overflow-hidden flex-shrink-0"
              style={{ width: '56%', height: 460 }}
              data-cursor-enlarge
            >
              <Image
                src="/images/insta-unapologetic-texture.jpg"
                alt="240 GSM premium cotton — BE UNAPOLOGETIC"
                fill
                className="object-cover object-center"
                sizes="22vw"
              />
            </div>
            {/* Short image, offset down */}
            <div
              className="relative overflow-hidden flex-shrink-0"
              style={{ width: '40%', height: 300, marginTop: 80 }}
              data-cursor-enlarge
            >
              <Image
                src="/images/insta-rebel-print-detail.jpg"
                alt="Rebel With Revaan — 3D puff print detail"
                fill
                className="object-cover object-center"
                sizes="16vw"
              />
            </div>
          </div>

          {/* VIEW ALL link beneath left grid */}
          <motion.a
            href="https://berevaan.com/collections/all"
            target="_blank" rel="noopener noreferrer"
            className="hover-underline font-body tracking-[0.2em] uppercase inline-block mt-5"
            style={{ color: 'var(--text-muted)', fontSize: 10, cursor: 'none' }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            VIEW ALL ↗
          </motion.a>

        </motion.div>

        {/* RIGHT — section title + body + accordion */}
        <motion.div
          className="craft-right"
          style={{ paddingRight: 64, paddingLeft: 24, paddingTop: '1rem' }}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Yellowtail "Craft" overlaps the 240 GSM heading — editorial typographic moment */}
          <div className="relative" style={{ marginBottom: '0.5rem' }}>
            <motion.span
              className="pointer-events-none select-none"
              style={{
                fontFamily: SCRIPT,
                fontWeight: 400,
                fontSize: 'clamp(50px, 7vw, 100px)',
                color: 'var(--accent)',
                lineHeight: 1,
                opacity: 0.9,
                display: 'block',
                marginBottom: '-0.3em',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 0.9, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Craft
            </motion.span>

            {/* Bleed heading — clips right edge */}
            <div style={{ overflow: 'hidden' }}>
              <h2
                className="craft-heading"
                style={{
                  fontFamily: BEBAS,
                  fontSize: 'clamp(56px, 9vw, 9999px)',
                  color: 'var(--text-primary)',
                  lineHeight: 0.88,
                  whiteSpace: 'nowrap',
                }}
              >
                240 GSM PREMIUM
              </h2>
            </div>
          </div>

          <p
            className="font-body leading-relaxed mt-5 mb-8"
            style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 1.1vw, 16px)', maxWidth: 340 }}
          >
            Not every tee is made equal. Most streetwear brands chase margin — thinner
            fabric, looser stitching, colours that fade after five washes. We went the
            other way. 240 GSM French Terry Cotton, pre-shrunk, pigment-dyed in small batches.
          </p>

          {/* Accordion */}
          <div style={{ borderTop: '1px solid rgba(20,18,16,0.1)' }}>
            {items.map((item, i) => (
              <AccordionItem key={i} {...item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
