import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  headline: string
  description?: string
  maxWidth?: string
}

export default function SectionHeader({ label, headline, description, maxWidth = '800px' }: SectionHeaderProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 mb-4"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="text-xs font-medium uppercase tracking-[0.05em] text-primary">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-foreground font-medium leading-[1.0] tracking-[-0.02em]"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          maxWidth,
        }}
      >
        {headline}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed mt-4"
          style={{ maxWidth: '560px' }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
