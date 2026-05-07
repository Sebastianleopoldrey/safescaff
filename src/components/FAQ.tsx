import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'
import { TextReveal } from './TextReveal'
import { cn } from '@/lib/cn'

export interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  items: readonly FAQItem[]
  eyebrow?: string
  heading?: string
}

export function FAQ({ items, eyebrow = 'Vanliga frågor', heading = 'Det du undrar — innan du frågar.' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-brand-offwhite py-24 md:py-32">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="label-mono text-brand-green">{eyebrow}</span>
            </Reveal>
            <TextReveal text={heading} as="h2" className="heading-section mt-6 text-brand-black" />
          </div>

          <ul className="border-t border-brand-gray-light">
            {items.map((item, i) => {
              const isOpen = open === i
              return (
                <li key={item.q} className="border-b border-brand-gray-light">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-brand-green md:py-8"
                  >
                    <span className="font-display text-[19px] font-semibold leading-tight tracking-tight text-brand-black md:text-[22px] group-hover:text-brand-green">
                      {item.q}
                    </span>
                    <Plus
                      size={22}
                      className={cn(
                        'mt-1 shrink-0 text-brand-graphite transition-transform duration-300 group-hover:text-brand-green',
                        isOpen && 'rotate-45'
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-[16px] leading-relaxed text-brand-graphite">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
