import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Zap, CreditCard, Key, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const freeItems = [
  'Market data',
  'Latest signal',
  'Signal history',
  'Smart money alerts',
  'Daily recap',
]

const paidItems = [
  { name: 'Swap tokens', price: '$0.05' },
  { name: 'Send token', price: '$0.05' },
  { name: 'Research', price: '$0.10' },
  { name: 'Ask Noel', price: '$0.10' },
  { name: 'Start Swarm', price: '$0.10' },
  { name: 'Create automation', price: '$0.05' },
]

const steps = [
  {
    number: '01',
    title: 'Call any tool',
    description: 'No auth needed. Free tools respond instantly.',
  },
  {
    number: '02',
    title: 'Receive 402 + price',
    description: 'Get exact USDC amount, wallet address, and memo.',
  },
  {
    number: '03',
    title: 'Pay & retry',
    description: 'Send USDC on Base, attach X-PAYMENT header, tool executes.',
  },
]

export function X402Payments() {
  return (
    <section id="x402" className="relative bg-background py-16 md:py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="DEVELOPER PRIMITIVE"
          headline="Pay Per Call."
          description="Noelclaw supports x402 - the open standard for crypto micropayments. Use any MCP tool for as little as $0.002 USDC. No subscription needed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="bg-green-500/10 text-green-500 text-xs rounded-full px-2 py-0.5">Always free</span>
            </div>
            <h3 className="font-semibold mb-4">Free Tools</h3>
            <ul className="space-y-2">
              {freeItems.map(item => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="bg-blue-500/10 text-blue-500 text-xs rounded-full px-2 py-0.5">Pay per call</span>
            </div>
            <h3 className="font-semibold mb-4">Micro Payments</h3>
            <ul className="space-y-2">
              {paidItems.map(item => (
                <li key={item.name} className="flex justify-between">
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-primary font-mono text-xs">{item.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="bg-card border border-border rounded-2xl p-7"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <span className="bg-purple-500/10 text-purple-500 text-xs rounded-full px-2 py-0.5">Power users</span>
            </div>
            <h3 className="font-semibold mb-4">Bring Your Own Key</h3>
            <p className="text-sm text-muted-foreground">
              Connect your own Bankr API key. Heavy swarm usage charges go directly to your Bankr account — zero markup.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Enable in Settings → API Key</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row gap-4 items-center"
        >
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div className="flex-1 w-full bg-card border border-border rounded-2xl p-6">
                <span className="font-mono text-xs bg-card border border-border rounded-full px-2 py-0.5">
                  {step.number}
                </span>
                <h4 className="font-semibold mt-3 mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight className="text-muted-foreground hidden md:block flex-shrink-0" />
              )}
            </Fragment>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6"
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto">
            <p className="text-zinc-500 mb-2 whitespace-nowrap"># Install</p>
            <p className="mb-3 whitespace-nowrap">npx -y @noelclaw/research</p>
            <p className="text-zinc-500 mb-2 whitespace-nowrap"># With session token (recommended)</p>
            <p className="mb-3 whitespace-nowrap">NOELCLAW_SESSION_TOKEN=your_token npx -y @noelclaw/research</p>
            <p className="text-zinc-500 mb-2 whitespace-nowrap"># x402 auto-payment</p>
            <p className="whitespace-nowrap">NOELCLAW_PAYMENT_HEADER=base64(txHash:requestId) npx -y @noelclaw/research</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href="https://docs.noelclaw.fun/x402-pricing"
            className="bg-primary text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View pricing
          </a>
          <a
            href="https://docs.noelclaw.fun/x402-integration"
            className="border border-border rounded-xl px-6 py-2.5 text-sm font-medium hover:border-primary/40 transition-colors"
          >
            Integration guide
          </a>
        </motion.div>
      </div>
    </section>
  )
}
