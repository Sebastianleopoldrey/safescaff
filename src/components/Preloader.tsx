import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { featureFlags } from '@/config/featureFlags'

export function Preloader() {
  const [visible, setVisible] = useState<boolean>(featureFlags.preloader)

  useEffect(() => {
    if (!featureFlags.preloader) return
    const t = setTimeout(() => setVisible(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black"
        >
          <motion.div
            className="h-3 w-3 rounded-full bg-brand-green"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
