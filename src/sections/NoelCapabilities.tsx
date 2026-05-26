import { motion } from 'framer-motion'
import { ArrowLeftRight, ShoppingCart, Send, Code2, Rocket, GitMerge, Bot, Coins } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const capabilities = [
  { icon: ArrowLeftRight, title: 'Swap', description: 'Execute token swaps on Base via 0x Permit2. Optimal routing, minimal slippage, signed locally on your machine.' },
  { icon: ShoppingCart, title: 'Buy / Sell', description: 'Purchase or liquidate any token on Base through natural language. No UI clicks needed.' },
  { icon: Send, title: 'Send', description: 'Transfer ETH, USDC, USDT, DAI, or WETH to any address with gas estimation and tracking.' },
  { icon: Rocket, title: 'Deploy Token', description: 'Launch a new token on Base with customizable supply, name, and symbol — guided by AI.' },
  { icon: GitMerge, title: 'Research', description: 'AI-powered crypto research via Bankr LLM — token analysis, market events, and narrative coverage returned in seconds.' },
  { icon: Bot, title: 'Agent', description: 'Deploy a personal AI agent on Base that trades, researches, and executes workflows autonomously on your behalf 24/7.' },
  { icon: Coins, title: 'Automations', description: 'DCA strategies, conditional buys, price alerts, and recurring workflows that run autonomously in the background.' },
  { icon: Code2, title: 'Build Apps', description: 'Describe a web app in plain text — Noel generates it and deploys it to yourapp.noelclaw.xyz in one click.' },
]

export default function NoelCapabilities() {
  return (
    <section id="capabilities" className="relative bg-muted py-16 md:py-28 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeader
          label="WHAT NOEL DOES"
          headline="From DeFi to Research to Building All in One Place"
          description="NoelClaw handles the full spectrum of crypto operations through natural language - DeFi, AI research, trading signals, automations, and app building."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-2xl p-5 md:p-7 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <cap.icon size={24} className="text-primary" />
              <h3 className="text-lg font-medium text-foreground mt-4">{cap.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
