import { motion } from 'framer-motion'
import { TrendingUp, Radio, Zap, Brain, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const agents = [
  {
    icon: TrendingUp,
    color: 'blue',
    name: 'Market Monitor',
    description: 'Tracks live prices and detects market moves via Bankr in real-time.',
  },
  {
    icon: Radio,
    color: 'purple',
    name: 'Sentiment Tracker',
    description: 'Analyzes on-chain and social signals to score market sentiment.',
  },
  {
    icon: Zap,
    color: 'amber',
    name: 'Workflow Executor',
    description: 'Executes your automations with built-in risk verification before every action.',
  },
  {
    icon: Brain,
    color: 'cyan',
    name: 'Memory Manager',
    description: 'Compresses and organizes swarm context, keeping agents sharp over time.',
  },
  {
    icon: Shield,
    color: 'green',
    name: 'Risk Verifier',
    description: 'Gates every action with AI-powered risk scoring. Nothing executes without approval.',
  },
]

const pills = ['Remembers failures', 'Optimises routing', 'Adapts thresholds']

export function AgentSwarm() {
  return (
    <section id="agent-swarm" className="relative bg-muted py-16 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="AUTONOMOUS SYSTEM"
          headline="Agent Swarm"
          description="5 specialized agents that coordinate, learn, and improve together running 24/7 so you don't have to."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:border-primary/20 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl bg-${agent.color}-500/10 text-${agent.color}-500 flex items-center justify-center mb-4`}>
                <agent.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{agent.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{agent.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 bg-primary/5 border border-primary/20 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Execution Self-Improvement</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Agents remember failed executions, learn which workflows perform better, and adapt thresholds over time. Not model training — execution intelligence that compounds.
            </p>
            <div className="flex gap-2 flex-wrap mt-3 sm:hidden">
              {pills.map(pill => (
                <span key={pill} className="text-xs bg-card border border-border rounded-full px-3 py-1">
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex gap-2 flex-wrap sm:ml-auto">
            {pills.map(pill => (
              <span key={pill} className="text-xs bg-card border border-border rounded-full px-3 py-1">
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href="https://noelclaw.com"
            className="bg-primary text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Launch Swarm
          </a>
          <a
            href="https://docs.noelclaw.fun"
            className="border border-border rounded-xl px-6 py-2.5 text-sm font-medium hover:border-primary/40 transition-colors"
          >
            Read docs
          </a>
        </motion.div>
      </div>
    </section>
  )
}
