import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { site } from '@/config/site'

const TRUST = ['STIB-medlem', '8 år', '20 000 kvm', 'Östra Sjukhuset', '24h svar']

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
            Skicka en förfrågan eller ring direkt. Du får svar inom 24 timmar — eller samma dag om du
            ringer Patrik.
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
        <Reveal delay={0.4}>
          <ul className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-brand-gray">
            {TRUST.map((t) => (
              <li key={t} className="label-mono text-[12px]">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
