import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import AgentModal from '../components/AgentModal'
import type { Agent } from '../components/AgentModal'

const categories = ['All', 'Core', 'Swarm', 'Skills'] as const

const agents: Agent[] = [
  {
    name: 'Noel',
    category: 'Core',
    iconGradient: 'linear-gradient(135deg, #2563eb, #6366f1)',
    description: 'Your main AI crypto copilot. Executes swaps, sends tokens, deploys contracts, and fetches live market data — all through natural language on Base.',
    skills: ['Swap', 'Send', 'Deploy', 'Research', 'Signals'],
    examples: [
      'swap 50% of my ETH for USDC',
      'send 100 USDC to 0x...',
      'research: what is happening with Base ecosystem?',
    ],
  },
  {
    name: 'Market Monitor',
    category: 'Swarm',
    iconGradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    description: 'Tracks live prices, 24h changes, and volume via Bankr. Fires price-change alerts to shared swarm memory when your thresholds are hit.',
    skills: ['Prices', 'Volume', '24h Change', 'Alerts'],
    examples: [
      'alert me when ETH drops below $3000',
      'what is the current BTC price and 24h change?',
    ],
  },
  {
    name: 'Sentiment Tracker',
    category: 'Swarm',
    iconGradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    description: 'Analyzes on-chain activity and social signals to score market sentiment. Updates every 15 minutes with bullish / bearish / neutral readings.',
    skills: ['On-chain', 'Social', 'Scoring', 'Sentiment'],
    examples: [
      'what is the current market sentiment?',
      'show sentiment score for SOL',
    ],
  },
  {
    name: 'Workflow Executor',
    category: 'Swarm',
    iconGradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    description: 'Runs your scheduled and conditional automations — DCA strategies, conditional buys, automatic alerts. Risk-verified before every action.',
    skills: ['DCA', 'Conditional', 'Execute', 'Automate'],
    examples: [
      'DCA $50 of ETH every day',
      'sell 50% when ETH is 2x from entry',
    ],
  },
  {
    name: 'Memory Manager',
    category: 'Swarm',
    iconGradient: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
    description: 'Manages the swarm\'s shared context. Compresses memory when it exceeds 50 entries using LLM summarization, keeping all agents sharp and context-aware.',
    skills: ['Compress', 'Summarize', 'KV Store', 'Context'],
    examples: [
      'what did the swarm track in the last hour?',
      'show swarm memory snapshot',
    ],
  },
  {
    name: 'Risk Verifier',
    category: 'Swarm',
    iconGradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    description: 'Gates every agent action with mechanical safety checks — value cap ($50), territory enforcement, and 10-minute cooldown on rejected actions.',
    skills: ['Gate', 'Sentinel', 'Safety', 'Cooldown'],
    examples: [
      'show blocked actions',
      'check risk status for workflow-executor',
    ],
  },
  {
    name: 'Gloria AI',
    category: 'Skills',
    iconGradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    description: 'AI and Web3 news intelligence. Delivers headlines, project analysis, and ecosystem trend updates on a scheduled interval.',
    skills: ['News', 'AI', 'Web3', 'Trends'],
    examples: ['Coming soon'],
  },
  {
    name: 'CoinGecko',
    category: 'Skills',
    iconGradient: 'linear-gradient(135deg, #16a34a, #15803d)',
    description: 'Periodic market data snapshots — trending coins, top movers, and price updates. Runs on a scheduled interval and logs results to agent runs.',
    skills: ['Market', 'Trending', 'Movers', 'Prices'],
    examples: [
      'show trending coins from CoinGecko',
      'get top movers in the last 24h',
    ],
  },
]

export default function Agents() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null)

  const filteredAgents = useMemo(() => {
    if (activeCategory === 'All') return agents
    return agents.filter(a => a.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="agents" className="relative bg-muted py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="THE AGENT LAYER"
          headline="Every Module Powered by a Specialist"
          description="Noel OS runs a core AI agent, a 5-agent autonomous swarm, and installable skills — each purpose-built for a specific domain."
        />

        <div className="flex flex-wrap gap-3 mt-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground font-medium shadow-[0_4px_16px_rgba(37,99,235,0.25)]'
                  : 'bg-secondary border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <AnimatePresence mode="popLayout">
            {filteredAgents.map(agent => (
              <motion.div
                key={agent.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedAgent(agent)}
                className="group relative bg-card border border-border rounded-[20px] p-8 cursor-pointer hover:-translate-y-2 hover:border-primary/25 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-lg font-semibold shadow-lg transition-transform duration-500 group-hover:scale-110"
                  style={{ background: agent.iconGradient }}
                >
                  {agent.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-5 group-hover:text-primary transition-colors duration-300">{agent.name}</h3>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground">
                  {agent.category}
                </span>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{agent.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {agent.skills.map(skill => (
                    <span key={skill} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground">
                      <Sparkles size={10} className="text-primary/60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AgentModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
    </section>
  )
}
