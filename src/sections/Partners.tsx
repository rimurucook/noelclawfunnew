import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const partners = [
  { name: 'Base Chain', logo: '/base-logo.jpg' },
  { name: 'Bankr', logo: '/bankr-logo.jpg' },
]

export default function Partners() {
  return (
    <section id="partners" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader label="TRUSTED BY" headline="Powered by Industry Leaders" />

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl px-14 py-10 hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-1 flex flex-col items-center gap-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-44 h-[70px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
