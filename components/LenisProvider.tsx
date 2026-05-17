'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      /*
       * lerp: lower = slower deceleration = more liquid/YSL feel.
       * 0.06: each frame moves 6% of remaining distance to target.
       * Feels like scrolling through thick oil — natural momentum stop.
       */
      lerp: 0.06,

      /*
       * wheelMultiplier: scales incoming wheel/trackpad delta.
       * macOS trackpad generates ~300-600px cumulative delta per swipe.
       * At 0.5: a 400px swipe moves the page 200px — much more controlled.
       * Was 0.9 → 1 swipe = ~2 sections. Now 0.5 → 1 swipe = ~1 section.
       */
      wheelMultiplier: 0.5,

      // Touch feels natural at 1.0 — same sensitivity as native
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
