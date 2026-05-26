import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const scale = useMotionValue(1)
  const springX = useSpring(x, { stiffness: 500, damping: 50 })
  const springY = useSpring(y, { stiffness: 500, damping: 50 })
  const springScale = useSpring(scale, { stiffness: 400, damping: 25 })

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (isTouchDevice) return

    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const handleMouseEnter = () => scale.set(4)
    const handleMouseLeave = () => scale.set(1)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
      return interactiveElements
    }

    document.addEventListener('mousemove', moveCursor)
    const elements = addHoverListeners()

    const observer = new MutationObserver(() => {
      addHoverListeners()
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
      observer.disconnect()
    }
  }, [x, y, scale])

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches
  if (isTouchDevice) return null

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        scale: springScale,
      }}
    >
      <div className="w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white" />
    </motion.div>
  )
}
