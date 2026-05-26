import { motion } from 'framer-motion'
import { ArrowLeftRight, Telescope, Rocket, Timer } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const useCases = [
  { icon: ArrowLeftRight, title: 'Token Swaps', description: 'Swap any token pair on Base via 0x Permit2. Best routing, minimal slippage, signed locally on your machine.' },
  { icon: Telescope, title: 'Crypto Research', description: 'Ask Noel to research any token, protocol, or market event. Get structured AI analysis backed by live web search in seconds.' },
  { icon: Rocket, title: 'Token Deployment', description: 'Deploy your own token on Base with customizable parameters, initial supply, and distribution strategies.' },
  { icon: Timer, title: 'Automated Strategies', description: 'Set DCA strategies, conditional buys, and price alerts that run autonomously in the background while you sleep.' },
]

export default function UseCases() {
  return (
    <section className="relative bg-background py-32 lg:py-40 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader label="USE CASES" headline="Real Problems, Real Solutions" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {useCases.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-card/60 border border-border rounded-[20px] p-8 hover:-translate-y-2 hover:border-primary/25 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)]"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-[52px] h-[52px] rounded-2xl flex items-center justify-center bg-primary/8 group-hover:bg-primary/12 transition-colors duration-500">
                <item.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mt-5 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
