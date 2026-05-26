import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const benefits = [
  { title: 'Pay Per Use', description: 'Only pay for what you consume. No monthly subscriptions or hidden fees.' },
  { title: 'Unlimited Agents', description: 'Access all specialized agents with a single credit pool.' },
  { title: 'Priority Execution', description: 'Higher credit tiers unlock faster transaction processing.' },
  { title: 'Enterprise API', description: 'Build custom integrations with our developer API at scale.' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-32 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <SectionHeader label="PRICING" headline="Simple, Transparent Pricing" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border border-t-2 border-t-primary rounded-3xl p-10"
          >
            <span className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground">CREDIT BALANCE</span>
            <div className="text-primary font-medium mt-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              1,000
            </div>
            <div className="text-base text-muted-foreground mt-1">NoelClaw Credits</div>
            <div className="w-full h-px bg-border my-8" />
            <p className="text-sm text-muted-foreground">Credits are consumed per operation. Refill anytime.</p>
            <button className="mt-6 px-7 py-3.5 border border-primary/40 text-primary font-medium rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-200">
              Buy Credits
            </button>
          </motion.div>

          <div className="space-y-7">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4"
              >
                <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-foreground">{b.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
