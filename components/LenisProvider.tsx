'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      /*
       * lerp (linear interpolation) is the YSL/high-end scroll approach.
       * Each frame: current_pos += (target_pos - current_pos) * lerp
       * 0.08 = very smooth, slight lag → liquid feel.
       * Higher (0.15+) = snappier but less premium.
       * Lower (0.05) = dreamy but can feel unresponsive.
       */
      lerp: 0.08,

      // Prevent over-scrolling on trackpad momentum (macOS)
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,

      // Smooth wheel events (default true, being explicit)
      smoothWheel: true,

      // Orientation
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
