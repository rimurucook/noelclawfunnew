import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export interface Agent {
  name: string
  category: string
  description: string
  fullDescription?: string
  iconGradient: string
  skills: string[]
  examples?: string[]
}

interface AgentModalProps {
  agent: Agent | null
  onClose: () => void
}

export default function AgentModal({ agent, onClose }: AgentModalProps) {
  return (
    <AnimatePresence>
      {agent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            onClick={e => e.stopPropagation()}
            className="bg-secondary border border-border rounded-3xl p-10 md:p-12 max-w-[640px] w-full relative max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 transition-all duration-200"
            >
              <X size={20} />
            </button>

            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-semibold"
              style={{ background: agent.iconGradient }}
            >
              {agent.name.charAt(0)}
            </div>

            <h3 className="text-foreground font-medium mt-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
              {agent.name}
            </h3>

            <span className="inline-block mt-3 px-4 py-1.5 rounded-full bg-card border border-border text-xs text-muted-foreground">
              {agent.category}
            </span>

            <p className="text-muted-foreground text-base leading-relaxed mt-5">
              {agent.fullDescription || agent.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {agent.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {agent.examples && agent.examples.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground mb-3">Example Commands</h4>
                <div className="space-y-2">
                  {agent.examples.map((ex, i) => (
                    <div key={i} className="bg-muted border border-border rounded-lg p-3 font-mono text-sm text-muted-foreground">
                      <span className="text-green-500">$</span>{' '}{ex}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button className="mt-8 w-full py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(37,99,235,0.2)]">
              Launch Agent
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
