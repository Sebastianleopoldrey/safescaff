import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

interface Scenario {
  title: string
  body: string
  href: string
  image: string
}

const SCENARIOS: Scenario[] = [
  {
    title: 'Fasadställning för villa',
    body: 'Aluminiumställning runt huset för putsning, målning eller fönsterbyte. Vi monterar, demonterar och städar tomten.',
    image: '/images/IMG_1457.jpg',
    href: '/byggnadsstallningar',
  },
  {
    title: 'Tak- och fasadställning för BRF',
    body: 'Modulställning runt hela fastigheten med boendepassage. Hela renoveringen kan rulla medan boende går säkert in och ut.',
    image: '/images/byggstallning-safescaff-2100x800.jpg',
    href: '/byggnadsstallningar',
  },
  {
    title: 'Ställning och byggstaket för industri och kontor',
    body: 'Byggnadsställning kombinerad med byggstaket och ID06-passage. Säker arbetsplats utan att stoppa produktion eller transporter.',
    image: '/images/IMG_1116-scaled.jpg',
    href: '/byggstaket',
  },
  {
    title: 'Väderskydd för stora renoveringar',
    body: 'Keder XL-väderskydd som täcker hela arbetsplatsen så jobbet rullar i regn, snö och kyla. Östra Sjukhuset är vår referens.',
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
            <span className="label-mono text-brand-green">Tjänster</span>
          </Reveal>
          <TextReveal
            text="Vad vi bygger."
            as="h2"
            className="heading-section mt-6 text-brand-black"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-graphite">
              Byggnadsställning, väderskydd och byggstaket — för villa, BRF, kontor och industri i Göteborgsområdet.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {SCENARIOS.map((s, i) => (
            <li key={s.title}>
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
                    <span className="label-mono text-brand-graphite">{(i + 1).toString().padStart(2, '0')}</span>
                    <h3 className="mt-4 font-display text-[22px] font-semibold leading-tight tracking-tight text-brand-black md:text-[24px]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-brand-graphite">
                      {s.body}
                    </p>
                    <div className="mt-6 flex items-center justify-end border-t border-brand-gray-light pt-5">
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
