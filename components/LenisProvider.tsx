'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      /*
       * normalizeWheel: true — the key to device-independent scroll.
       *
       * Without it: raw wheelDelta varies wildly per device.
       *   MacBook trackpad:  sends ~5-10px per event, hundreds of events (momentum)
       *   Magic Mouse:       sends ~20-50px per event
       *   USB scroll wheel:  sends ~100px per event (one click = one event)
       *   Windows touchpad:  yet another scale
       *
       * With it: Lenis clamps all deltas to a consistent ~100px equivalent.
       * Every device now speaks the same language before wheelMultiplier scales it.
       */
      normalizeWheel: true,

      /*
       * wheelMultiplier now scales a NORMALIZED value, not a device-specific one.
       * 1.0 on normalized input = consistent across all devices.
       * Tune this one number and it behaves the same everywhere.
       */
      wheelMultiplier: 1.0,

      /*
       * lerp: proportional deceleration each frame.
       * 0.07 = moves 7% of remaining distance per frame → natural momentum stop.
       */
      lerp: 0.07,

      touchMultiplier: 1.0,
      smoothWheel: true,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    })

    // Keep ScrollTrigger in sync with Lenis virtual scroll position
    lenis.on('scroll', ScrollTrigger.update)

    /*
     * CRITICAL: Store the callback in a variable so the SAME reference
     * is passed to both .add() and .remove(). Anonymous functions are
     * different references — .remove(new fn) removes nothing.
     */
    const onFrame = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onFrame)
    gsap.ticker.lagSmoothing(0)

    /*
     * Refresh ScrollTrigger after layout is fully settled.
     * Without this, pinned section heights can be calculated before
     * fonts/images finish loading → wrong trigger positions → jumpy scroll.
     */
    const refreshId = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 300)

    return () => {
      clearTimeout(refreshId)
      lenis.destroy()
      // Removes the EXACT same function reference → no accumulation
      gsap.ticker.remove(onFrame)
    }
  }, [])

  return <>{children}</>
}
