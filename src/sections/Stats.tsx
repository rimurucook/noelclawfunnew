import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface StatItem {
  value: string
  label: string
  prefix?: string
  suffix?: string
  numericValue: number
}

const stats: StatItem[] = [
  { value: '<2s', label: 'Average Response', prefix: '<', suffix: 's', numericValue: 2 },
  { value: '43+', label: 'MCP Tools', prefix: '', suffix: '+', numericValue: 43 },
  { value: '5', label: 'Swarm Agents', prefix: '', suffix: '', numericValue: 5 },
  { value: '99.9%', label: 'Service Uptime', prefix: '', suffix: '%', numericValue: 99.9 },
]

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1500
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(eased * target)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target])

  const display = target >= 10 ? Math.round(count).toLocaleString() : count.toFixed(1).replace(/\.0$/, '')

  return <span ref={ref}>{prefix}{display}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="stats" className="relative bg-background py-14 md:py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card/60 border border-border rounded-2xl p-5 md:p-7 hover:border-primary/25 hover:shadow-[0_8px_32px_rgba(37,99,235,0.06)] transition-all duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="font-semibold text-primary" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <AnimatedCounter target={stat.numericValue} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
