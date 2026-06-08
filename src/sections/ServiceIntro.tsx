import { Reveal } from '@/components/Reveal'
import { Prose } from '@/components/site/prose'

interface ServiceIntroProps {
  lead: string
  body: string
}

export function ServiceIntro({ lead, body }: ServiceIntroProps) {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-edge grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <Reveal>
          <p className="font-display text-[28px] font-medium leading-snug tracking-tight text-brand-black md:text-[32px]">
            {lead}
          </p>
        </Reveal>
        <Reveal delay={0.1} y={30}>
          <Prose className="text-[17px] leading-relaxed text-brand-graphite" text={body} />
        </Reveal>
      </div>
    </section>
  )
}
