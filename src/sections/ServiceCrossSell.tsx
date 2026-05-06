import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'
import { services } from '@/config/site'

interface ServiceCrossSellProps {
  excludeSlug: string
}

export function ServiceCrossSell({ excludeSlug }: ServiceCrossSellProps) {
  const others = services.filter((s) => s.slug !== excludeSlug)
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <span className="label-mono text-brand-green">Behöver du också</span>
          </Reveal>
          <TextReveal text="Övriga tjänster." as="h2" className="heading-section mt-6 text-brand-black" />
        </div>

        <ul className="grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06} y={20}>
              <li className="bg-brand-white">
                <Link
                  to={`/${s.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-brand-offwhite"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="label-mono text-brand-gray">{s.number}</span>
                    <ArrowUpRight size={18} className="text-brand-gray transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green" />
                  </div>
                  <h3 className="mt-8 font-display text-[26px] font-semibold leading-tight tracking-tight text-brand-black">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-brand-graphite">{s.short}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
