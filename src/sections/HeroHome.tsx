import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { TextReveal } from '@/components/TextReveal'

export function HeroHome() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 240])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-brand-black text-brand-white">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src="/images/DJI_0404.jpg"
          alt=""
          className="h-[120%] w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </motion.div>

      <motion.div
        className="container-edge relative z-10 flex h-full flex-col justify-end pb-24 md:pb-32"
        style={{ opacity }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="label-mono mb-6 block text-brand-green-light"
        >
          Göteborg · Sedan 2017
        </motion.span>

        <TextReveal
          text="Vi bygger säkra ställningar."
          as="h1"
          className="heading-hero text-brand-white"
          delay={0.4}
          stagger={0.08}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 max-w-xl text-[18px] text-white/80"
        >
          Litet företag med stora muskler. STIB-medlem och Göteborgs mest pålitliga ställningsleverantör.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link to="/kontakt" className="btn-primary group">
            Begär offert
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="#tjanster" className="btn-ghost text-brand-white">
            Våra tjänster
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center text-brand-white"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="label-mono text-[11px]">Scrolla</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
