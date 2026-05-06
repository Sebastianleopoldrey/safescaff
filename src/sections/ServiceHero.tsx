import { motion, useScroll, useTransform } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'

interface ServiceHeroProps {
  number: string
  title: string
  tagline: string
  image: string
  imageAlt: string
}

export function ServiceHero({ number, title, tagline, image, imageAlt }: ServiceHeroProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 180])

  return (
    <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden bg-brand-black text-brand-white">
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={image} alt={imageAlt} className="h-[120%] w-full object-cover" loading="eager" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </motion.div>

      <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="label-mono mb-6 text-brand-green-light"
        >
          {number} · {title}
        </motion.span>
        <TextReveal text={tagline} as="h1" className="heading-hero text-brand-white" delay={0.3} />
      </div>
    </section>
  )
}
