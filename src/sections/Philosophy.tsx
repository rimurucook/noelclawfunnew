import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const principles = [
  { num: '01', title: 'Natural Language as Interface', description: 'The command line of crypto shouldn\'t require knowing Solidity or memorizing contract addresses. Describe what you want — Noel handles the rest.' },
  { num: '02', title: 'Mechanisms Over Promises', description: 'Safety comes from mechanical rules, not AI judgment calls. The Sentinel gate enforces caps, territory, and cooldowns before any action executes — no exceptions.' },
  { num: '03', title: 'Composable by Default', description: 'Every module — Chat, Brain, Swarm, Build, Automations — is independently accessible via MCP tools. Use the full OS or just the parts you need.' },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-muted py-32 lg:py-40 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader label="OUR PHILOSOPHY" headline="Built Different" maxWidth="700px" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-sm font-bold text-primary tracking-[0.05em]">{p.num}</span>
              <div className="w-[60px] h-[2px] mt-4" style={{ background: 'linear-gradient(90deg, hsl(217 91% 60%), transparent)' }} />
              <h3 className="text-xl font-semibold text-foreground mt-5">{p.title}</h3>
              <p className="text-base text-muted-foreground mt-3 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 rounded-3xl p-12 md:p-16 text-center border border-primary/15 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.06) 0%, hsl(var(--background)) 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <h3 className="font-semibold text-foreground" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Start Running Your Crypto OS
          </h3>
          <p className="text-lg text-muted-foreground mt-4 max-w-[500px] mx-auto">
            Chat, trade, automate, research, and build — all from one platform powered by Bankr LLM.
          </p>
          <a
            href="https://noelclaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-9 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-xl hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-[1.03]"
          >
            Launch App
          </a>
        </motion.div>
      </div>
    </section>
  )
}
