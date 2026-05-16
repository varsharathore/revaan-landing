'use client'
import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let mouseX = 0
    let mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const onEnterImage = () => dot.classList.add('enlarged')
    const onLeaveImage = () => dot.classList.remove('enlarged')

    document.addEventListener('mousemove', onMove)

    const images = document.querySelectorAll('img, [data-cursor-enlarge]')
    images.forEach(img => {
      img.addEventListener('mouseenter', onEnterImage)
      img.addEventListener('mouseleave', onLeaveImage)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      images.forEach(img => {
        img.removeEventListener('mouseenter', onEnterImage)
        img.removeEventListener('mouseleave', onLeaveImage)
      })
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
}
