import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

export interface Step {
  number: string
  title: string
  body: string
}

interface ServiceProcessProps {
  steps: Step[]
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-edge">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="label-mono text-brand-green">Så här jobbar vi</span>
          </Reveal>
          <TextReveal text="Från första samtal till sista demontering." as="h2" className="heading-section mt-6 text-brand-black" />
        </div>

        <ol className="grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1} y={30}>
              <li className="flex h-full flex-col bg-brand-white p-8">
                <span className="font-display text-[80px] font-semibold leading-none tracking-tight text-brand-offwhite">
                  {s.number}
                </span>
                <h3 className="mt-6 font-display text-[22px] font-semibold leading-tight text-brand-black">{s.title}</h3>
                <p className="mt-4 text-[15px] text-brand-graphite">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
