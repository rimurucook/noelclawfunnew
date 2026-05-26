import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-[60] h-9 bg-primary flex items-center justify-center"
        >
          <span className="text-[13px] font-medium text-primary-foreground">
            Noel OS is live — Brain, Build, Swarm &amp; DeFi in one platform
          </span>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-4 w-6 h-6 rounded-full flex items-center justify-center text-primary-foreground hover:bg-black/10 transition-colors"
          >
            <span className="text-sm leading-none">&times;</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
