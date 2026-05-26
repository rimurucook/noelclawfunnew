import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Search } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const cards = [
  {
    icon: ShieldCheck,
    iconColor: 'hsl(217 91% 60%)',
    title: 'Sentinel Safety Gate',
    description: 'Every agent action passes through a mechanical pre-flight check — value cap ($50), territory enforcement, and a 10-minute cooldown on rejected actions. No LLM guessing.',
  },
  {
    icon: Zap,
    iconColor: '#00C9A7',
    title: 'Local Key Signing',
    description: 'Your private key never touches the server for MCP users. Transactions are built in Convex and signed locally in your MCP process — trustless by design.',
  },
  {
    icon: Search,
    iconColor: '#6366F1',
    title: 'Full Audit Trail',
    description: 'Brain logs every agent run, execution score, and steward decision in real-time. Review transaction hashes, gas costs, and swarm memory snapshots anytime.',
  },
]

export default function ExecutionEngine() {
  return (
    <section id="execution" className="relative bg-background py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="SECURITY & TRUST"
          headline="Safe by Mechanism, Not by Promise"
          description="Noel OS enforces rules mechanically — before execution, not after. Every action is logged, gated, and traceable."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card/60 border border-border rounded-3xl p-10 text-center hover:-translate-y-2 hover:border-primary/25 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)]"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div
                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110"
                style={{ background: `${card.iconColor}14` }}
              >
                <card.icon size={32} style={{ color: card.iconColor }} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-6">{card.title}</h3>
              <p className="text-base text-muted-foreground mt-3 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
