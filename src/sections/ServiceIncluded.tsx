import { Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

interface ServiceIncludedProps {
  intro: string
  items: string[]
}

export function ServiceIncluded({ intro, items }: ServiceIncludedProps) {
  return (
    <section className="bg-brand-offwhite py-24 md:py-32">
      <div className="container-edge grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="label-mono text-brand-green">Det här ingår</span>
          </Reveal>
          <TextReveal text="Hela kedjan." as="h2" className="heading-section mt-6 text-brand-black" />
          <Reveal delay={0.15} y={30}>
            <p className="mt-6 max-w-md text-[17px] text-brand-graphite">{intro}</p>
          </Reveal>
        </div>

        <ul className="grid gap-px self-start border border-brand-gray-light bg-brand-gray-light sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.05} y={20}>
              <li className="flex items-start gap-3 bg-brand-offwhite p-6 text-[15px] text-brand-black">
                <Check size={18} className="mt-0.5 flex-none text-brand-green" />
                <span>{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
