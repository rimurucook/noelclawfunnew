import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FooterCTA() {
  return (
    <section
      className="relative py-20 md:py-32 lg:py-48 text-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at center, hsl(217 91% 60% / 0.06) 0%, transparent 70%)', backgroundColor: 'hsl(var(--background))' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-[960px] mx-auto px-6 lg:px-12 relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-semibold text-foreground"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}
        >
          Boot Your Crypto OS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-muted-foreground mt-6 max-w-[600px] mx-auto leading-relaxed"
        >
          Brain, Build, Swarm, and DeFi — all in one platform powered by Bankr LLM. No coding, no complexity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mt-10 flex-wrap"
        >
          <a
            href="https://noelclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-9 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-xl hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-[1.03] inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="https://docs.noelclaw.fun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-base text-foreground hover:text-primary transition-colors duration-300">
            Read Documentation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
