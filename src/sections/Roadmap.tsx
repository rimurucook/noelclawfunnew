import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

interface RoadmapItem {
  title: string
  status: 'Completed' | 'In Progress' | 'Upcoming'
  description: string
}

const items: RoadmapItem[] = [
  { title: 'Noel Swarm', status: 'Completed', description: '5-agent autonomous swarm with self-improvement scoring, shared memory, and Sentinel safety gate.' },
  { title: 'x402 Payments', status: 'Completed', description: 'Pay-per-call micropayments on Base. No subscription — pay only for what you use, starting at $0.01 USDC.' },
  { title: 'Upload Skill', status: 'In Progress', description: 'Create and publish custom agent skills to the Noel OS skill registry.' },
  { title: 'Base App', status: 'Upcoming', description: 'Native mobile app — full Noel OS on iOS and Android.' },
]

const statusConfig = {
  'Completed': { bg: 'rgba(0, 201, 167, 0.15)', text: '#00C9A7' },
  'In Progress': { bg: 'hsl(217 91% 60% / 0.15)', text: 'hsl(217 91% 60%)' },
  'Upcoming': { bg: 'rgba(255, 255, 255, 0.06)', text: 'hsl(215 20% 65%)' },
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-muted py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="ROADMAP"
          headline="Where We Are. Where We're Going."
          maxWidth="700px"
        />

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px" style={{ backgroundColor: 'hsl(217 91% 60% / 0.12)' }} />

          <div className="space-y-16">
            {items.map((item, i) => {
              const isLeft = i % 2 === 0
              const config = statusConfig[item.status]

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}
                >
                  <div className={`hidden md:block md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="group inline-block">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                        style={{ backgroundColor: config.bg, color: config.text }}
                      >
                        {item.status}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mt-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-[360px]" style={{ marginLeft: isLeft ? 'auto' : undefined, marginRight: isLeft ? undefined : 'auto' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
                  </div>

                  <div className="pl-8 md:hidden">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: config.bg, color: config.text }}
                    >
                      {item.status}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
