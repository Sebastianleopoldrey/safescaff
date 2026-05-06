import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/cn'

interface TextRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

const container: Variants = {
  hidden: {},
  show: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
}

const word: Variants = {
  hidden: { y: '100%', opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function TextReveal({
  text,
  as = 'h1',
  className,
  delay = 0,
  stagger = 0.08,
  once = true,
}: TextRevealProps) {
  const Tag = motion[as] as typeof motion.h1
  const words = text.split(' ')

  return (
    <Tag
      className={cn('inline-block', className)}
      variants={container}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pr-[0.25em] last:pr-0">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
