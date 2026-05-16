'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const IMAGES = [
  '/images/rebel-1.png',
  '/images/rebel-2.png',
  '/images/citybeats-1.jpg',
  '/images/citybeats-2.jpg',
  '/images/pulpy-1.jpg',
  '/images/pulpy-2.jpg',
  '/images/wavy-1.jpg',
  '/images/wavy-2.jpg',
  '/images/liar-1.jpg',
  '/images/liar-2.jpg',
]

export function Preloader() {
  const [visible, setVisible] = useState(true)
  const [pct, setPct] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    let loaded = 0
    const total = IMAGES.length

    const onLoad = () => {
      loaded++
      setPct(Math.round((loaded / total) * 100))
      if (loaded === total && !done.current) {
        done.current = true
        // Hold at 100% briefly then exit
        setTimeout(() => setVisible(false), 400)
      }
    }

    IMAGES.forEach((src) => {
      const img = new window.Image()
      img.onload = onLoad
      img.onerror = onLoad // count errors so we don't hang
      img.src = src
    })
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#0A0A0A' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo */}
          <motion.span
            className="font-script select-none"
            style={{ fontSize: 'clamp(56px, 8vw, 100px)', color: 'var(--accent)', lineHeight: 1 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Revaan
          </motion.span>

          {/* Progress bar */}
          <motion.div
            className="mt-8 overflow-hidden"
            style={{ width: 160, height: 1, background: 'rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              style={{
                height: '100%',
                background: 'var(--accent)',
                width: `${pct}%`,
                transition: 'width 0.2s ease',
              }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.p
            className="font-body mt-3 tabular-nums"
            style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {pct}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
