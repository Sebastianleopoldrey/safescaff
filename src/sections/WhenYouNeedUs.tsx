import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

interface Scenario {
  situation: string
  service: string
  body: string
  href: string
  image: string
}

const SCENARIOS: Scenario[] = [
  {
    situation: 'Du ska putsa om eller måla fasaden på din villa',
    service: 'Speedyscaff aluminium',
    body: 'Lätt aluminiumställning, snabb resning, ren tomt — och en fast offert utan dolda kostnader.',
    image: '/images/IMG_1457.jpg',
    href: '/byggnadsstallningar',
  },
  {
    situation: 'Din BRF ska byta tak eller renovera fasaden',
    service: 'Layher Allround + boendepassage',
    body: 'Modulställning runt hela huset med tunnel för boende. Allt fasadarbete kan rulla utan att vardagen stannar.',
    image: '/images/byggstallning-safescaff-2100x800.jpg',
    href: '/byggnadsstallningar',
  },
  {
    situation: 'Företaget ska bygga om kontoret eller industrilokalen',
    service: 'Modul + ID06-perimeter',
    body: 'Kombinerad ställning och byggstaket med åtkomstkontroll. Vi koordinerar runt produktion och leveranser.',
    image: '/images/IMG_1116-scaled.jpg',
    href: '/byggstaket',
  },
  {
    situation: 'Sjukhuset eller fastigheten ska renoveras under vintern',
    service: 'Keder XL-väderskydd',
    body: 'Helt täckt arbetsmiljö — regn, snö och stormar slutar vara projektets problem. Östra Sjukhuset är vår referens.',
    image: '/images/ostra-sjukhuset.jpg',
    href: '/vaderskydd',
  },
]

export function WhenYouNeedUs() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-32">
      <div className="container-edge">
        <div className="max-w-3xl">
          <Reveal>
            <span className="label-mono text-brand-green">När du behöver oss</span>
          </Reveal>
          <TextReveal
            text="Är detta din situation?"
            as="h2"
            className="heading-section mt-6 text-brand-black"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-graphite">
              Är du osäker på om du behöver byggnadsställning, väderskydd eller något annat?
              Här är de vanligaste situationerna — och vad vi rekommenderar.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {SCENARIOS.map((s, i) => (
            <li key={s.situation}>
              <Reveal delay={i * 0.08} y={30}>
                <Link
                  to={s.href}
                  className="group block h-full overflow-hidden border border-brand-gray-light bg-brand-white transition-colors hover:border-brand-black"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-gray-light">
                    <img
                      src={s.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 md:p-8">
                    <span className="label-mono text-brand-graphite">{`Scenario ${(i + 1)
                      .toString()
                      .padStart(2, '0')}`}</span>
                    <h3 className="mt-4 font-display text-[22px] font-semibold leading-tight tracking-tight text-brand-black md:text-[24px]">
                      {s.situation}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-brand-graphite">
                      {s.body}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-brand-gray-light pt-5">
                      <span className="label-mono text-brand-green">→ {s.service}</span>
                      <ArrowRight
                        size={16}
                        className="text-brand-graphite transition-transform group-hover:translate-x-1 group-hover:text-brand-green"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
