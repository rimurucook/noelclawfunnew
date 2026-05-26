import { motion } from 'framer-motion'
import { Plug, MessageSquare, BrainCircuit } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const steps = [
  {
    num: '01',
    icon: Plug,
    title: 'Connect & Install',
    description: 'Sign up at noelclaw.com or install the MCP server to use Noel inside Claude, Cursor, or Windsurf. Connect your wallet to unlock DeFi on Base.',
    emphasis: true,
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Chat, Trade & Automate',
    description: 'Tell Noel what you want in plain English — swap tokens, research any crypto topic, deploy a contract, or set up a recurring DCA strategy.',
    emphasis: false,
  },
  {
    num: '03',
    icon: BrainCircuit,
    title: 'The OS Runs for You',
    description: 'Brain logs every agent action in real-time. The Swarm monitors markets 24/7. Automations execute while you\'re away.',
    emphasis: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-background py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="HOW IT WORKS"
          headline="Your Crypto OS, Running 24/7"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative p-8 rounded-[20px] border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                step.emphasis
                  ? 'bg-card/80 border-t-2 border-t-primary/40 border-border shadow-[0_4px_24px_rgba(37,99,235,0.06)]'
                  : 'bg-card/60 border-border hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)]'
              }`}
            >
              <span className="absolute top-6 right-6 text-5xl font-bold" style={{ color: 'hsl(217 91% 60% / 0.06)' }}>
                {step.num}
              </span>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/15 transition-colors duration-500">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-6">{step.title}</h3>
                <p className="text-base text-muted-foreground mt-3 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
