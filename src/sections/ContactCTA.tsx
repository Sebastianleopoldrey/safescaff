import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { site } from '@/config/site'

export function ContactCTA() {
  return (
    <section className="bg-brand-black py-32 text-brand-white md:py-48">
      <div className="container-edge text-center">
        <Reveal>
          <span className="label-mono text-brand-green-light">Klar att börja?</span>
        </Reveal>
        <TextReveal
          text="Låt oss bygga något säkert."
          as="h2"
          className="heading-hero mx-auto mt-8 max-w-5xl text-brand-white"
          stagger={0.06}
        />
        <Reveal delay={0.2} y={30}>
          <p className="mx-auto mt-8 max-w-xl text-[17px] text-brand-gray">
            Begär offert idag — vi återkommer inom 24 timmar.
          </p>
        </Reveal>
        <Reveal delay={0.3} y={20}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link to="/kontakt" className="btn-primary group">
              Begär offert
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`tel:${site.phoneTel}`} className="btn-ghost text-brand-white">
              <Phone size={14} />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
