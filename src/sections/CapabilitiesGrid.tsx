import { motion } from 'framer-motion'
import { MessageSquare, BrainCircuit, Bot, Zap, Code2 } from 'lucide-react'

const modules = [
  {
    icon: MessageSquare,
    title: 'Chat',
    description: 'Multi-agent AI. Execute DeFi operations, get research, and manage your portfolio through natural language on Base.',
  },
  {
    icon: BrainCircuit,
    title: 'Brain',
    description: 'Live activity log. Agents scan trending tokens, score findings in real-time, and surface on-chain signals automatically.',
  },
  {
    icon: Bot,
    title: 'Swarm',
    description: '5 autonomous agents running 24/7 — market monitoring, sentiment scoring, automation execution, memory, and risk gating.',
  },
  {
    icon: Zap,
    title: 'Automations',
    description: 'Describe your strategy in plain English. Noel parses it into triggers and actions that run while you\'re away.',
  },
  {
    icon: Code2,
    title: 'Build',
    description: 'AI webapp generator. Describe a site, Noel generates it and deploys to yourapp.noelclaw.xyz in one click.',
  },
]

export default function CapabilitiesGrid() {
  return (
    <section className="relative bg-muted py-16 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-primary">The OS</span>
          <h2
            className="font-semibold text-foreground mt-3"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Five modules. One platform.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background/70 border border-border rounded-2xl p-6 hover:-translate-y-1 hover:border-primary/25 transition-all duration-400"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 mb-4">
                <mod.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{mod.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
