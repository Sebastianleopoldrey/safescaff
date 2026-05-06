import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const KEY = 'safescaff:cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(KEY, 'accepted')
    setVisible(false)
  }
  const dismiss = () => {
    localStorage.setItem(KEY, 'dismissed')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-x-0 bottom-0 z-40 p-4 md:p-6"
          role="dialog"
          aria-label="Cookie-information"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 bg-brand-black p-5 text-brand-white md:flex-row md:items-center md:gap-6 md:p-6">
            <p className="flex-1 text-[14px] leading-relaxed">
              Den här sajten använder endast nödvändiga cookies. Inga spårningscookies sätts utan ditt samtycke.{' '}
              <Link to="/integritetspolicy" className="underline underline-offset-2 hover:text-brand-green-light">Läs mer</Link>.
            </p>
            <div className="flex items-center gap-2">
              <button onClick={accept} className="btn-primary">OK</button>
              <button onClick={dismiss} aria-label="Stäng" className="-mr-1 flex h-10 w-10 items-center justify-center text-brand-gray hover:text-brand-white">
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
