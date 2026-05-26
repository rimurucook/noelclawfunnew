import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const terminalLines = [
  { type: 'comment', text: '# install noelclaw research tools' },
  { type: 'command', text: '$ npx @noelclaw/research init' },
  { type: 'output', text: '✓ 43 MCP tools loaded' },
  { type: 'spacer', text: '' },
  { type: 'comment', text: '# swap tokens via AI' },
  { type: 'command', text: '$ swap 0.5 ETH for USDC' },
  { type: 'output', text: '✓ Swapped on Base — tx confirmed' },
  { type: 'spacer', text: '' },
  { type: 'comment', text: '# launch autonomous swarm' },
  { type: 'command', text: '$ start_swarm --mode full' },
  { type: 'output', text: '✓ 5 agents running 24/7' },
  { type: 'spacer', text: '' },
  { type: 'comment', text: '# check your portfolio' },
  { type: 'command', text: '$ get_portfolio' },
  { type: 'output', text: '✓ 3 positions · $1,204.38 total' },
]

const partners = [
  { name: 'Base', logo: '/base.jpg' },
  { name: 'Uniswap', logo: '/uniswap.jpg' },
  { name: 'Bankr', logo: '/bankr-logo.jpg' },
  { name: 'Gitlawb', logo: '/gitlawb.jpg' },
  { name: 'Aeon', logo: '/aeon.jpg' },
  { name: '0x', logo: '/0x.jpg' },
]

function Terminal() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount(prev => {
        if (prev >= terminalLines.length) {
          clearInterval(timer)
          return prev
        }
        return prev + 1
      })
    }, 120)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
      className="w-full max-w-[540px] rounded-2xl border border-border bg-[hsl(var(--muted))] overflow-hidden shadow-xl"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-400/60" />
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <div className="w-3 h-3 rounded-full bg-green-400/60" />
        <span className="ml-3 text-xs text-muted-foreground/50 font-mono">noel terminal</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[260px]">
        {terminalLines.slice(0, visibleCount).map((line, i) => (
          <div key={i} className={line.type === 'spacer' ? 'h-3' : 'leading-6'}>
            {line.type === 'comment' && (
              <span className="text-muted-foreground/40">{line.text}</span>
            )}
            {line.type === 'command' && (
              <span className="text-foreground">{line.text}</span>
            )}
            {line.type === 'output' && (
              <span className="text-blue-500/80">{line.text}</span>
            )}
          </div>
        ))}
        {visibleCount < terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-primary/70 animate-pulse ml-0.5" />
        )}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 pt-8 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: headline + CTAs */}
        <div className="flex-1 flex flex-col items-start text-left">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.12em] text-primary mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Powered by @bankrbot LLM &amp; Skills
          </motion.p>

          <motion.h1
            className="font-semibold text-foreground"
            style={{
              fontSize: 'clamp(2.6rem, 6.5vw, 5.5rem)',
              lineHeight: 0.96,
              letterSpacing: '-0.035em',
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            Building AI<br />
            <span className="text-primary">Operating System</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-base leading-relaxed max-w-[400px] mt-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          >
            Chat with AI agents, automate trading strategies, run an autonomous swarm, and build apps - all on Base.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          >
            <a
              href="https://noelclaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl text-sm hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(37,99,235,0.25)] transition-all duration-200 hover:scale-[1.02]"
            >
              Launch App
            </a>
            <a
              href="https://noelclaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-muted-foreground font-medium rounded-xl text-sm hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              Chat with Noel
            </a>
            <a
              href="https://docs.noelclaw.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-muted-foreground font-medium rounded-xl text-sm hover:text-foreground hover:border-primary/40 transition-all duration-200"
            >
              Docs
            </a>
          </motion.div>

          {/* Partner row */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <p className="text-xs text-muted-foreground/40 uppercase tracking-[0.1em] mb-3">Integrated with</p>
            <div className="flex flex-wrap items-center gap-3">
              {partners.map(p => (
                <div
                  key={p.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/50 hover:border-border/80 transition-colors"
                >
                  <img src={p.logo} alt={p.name} className="w-4 h-4 rounded-full object-cover" />
                  <span className="text-xs font-medium text-muted-foreground">{p.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: terminal mockup */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-[160px] pointer-events-none z-[1]"
        style={{ background: 'linear-gradient(180deg, transparent 0%, hsl(var(--background)) 100%)' }}
      />
    </section>
  )
}
