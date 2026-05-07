import { Reveal } from './Reveal'
import { TextReveal } from './TextReveal'

export interface SegmentItem {
  label: string
  body: string
}

interface WhoForProps {
  items: readonly SegmentItem[]
  eyebrow?: string
  heading?: string
}

export function WhoFor({ items, eyebrow = 'Vi bygger för', heading = 'De som litar på oss.' }: WhoForProps) {
  return (
    <section className="bg-brand-offwhite py-24 md:py-32">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <span className="label-mono text-brand-green">{eyebrow}</span>
          </Reveal>
          <TextReveal text={heading} as="h2" className="heading-section mt-6 text-brand-black" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} y={30}>
              <div className="h-full border border-brand-gray-light bg-brand-white p-8 transition-colors hover:border-brand-green">
                <h3 className="font-display text-[20px] font-semibold tracking-tight text-brand-black">
                  {item.label}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-brand-graphite">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
