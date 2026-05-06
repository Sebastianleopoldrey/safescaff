import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  loading?: 'lazy' | 'eager'
  delay?: number
}

export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  loading = 'lazy',
  delay = 0,
}: ImageRevealProps) {
  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={cn('h-full w-full object-cover', imgClassName)}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </motion.div>
  )
}
