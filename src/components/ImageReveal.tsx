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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={cn('h-full w-full object-cover', imgClassName)}
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      />
    </motion.div>
  )
}
