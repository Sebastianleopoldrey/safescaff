import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

interface ServiceCard {
  number: string
  title: string
  simple: string
  technical: string
  image: string
  alt: string
  href: string
}

const SERVICES: ServiceCard[] = [
  {
    number: '01',
    title: 'Byggnadsställningar',
    simple:
      'Vi bygger säkra plattformar runt hus så hantverkarna kan jobba i höjd utan att ramla.',
    technical:
      'Layher Allround modul för komplexa fasader, Speedyscaff aluminium för snabbare projekt. STIB-utbildade montörer, dokumentation enligt AFS 2013:4.',
    image: '/images/IMG_6978.jpeg',
    alt: 'Byggnadsställning runt fasad',
    href: '/byggnadsstallningar',
  },
  {
    number: '02',
    title: 'Väderskydd',
    simple:
      'Vi sätter upp ett tält över byggnaden så jobbet kan fortsätta i regn, snö och kyla — året runt.',
    technical:
      'Layher Keder XL för spännvidder upp till 30 m. Stormsäker dimensionering enligt EN 12810. Bevisat på Östra Sjukhuset genom två stormar.',
    image: '/images/IMG_1483-scaled.jpg',
    alt: 'Storskaligt Keder XL-väderskydd',
    href: '/vaderskydd',
  },
  {
    number: '03',
    title: 'Skyltställ',
    simple:
      'Vi sätter upp ramar för reklamskyltar så ditt budskap syns från långt håll.',
    technical:
      'Skyltkonstruktioner i alla format med UV-stabil tryck. Vi sköter polistillstånd och markupplåtelse. Tryck, montage och demontering på en faktura.',
    image: '/images/IMG_6971-800x800.jpeg',
    alt: 'Skyltställ med reklamskylt',
    href: '/skyltstall',
  },
  {
    number: '04',
    title: 'Byggstaket',
    simple:
      'Vi sätter upp staket runt arbetsplatsen så ingen obehörig kommer in och ingen skadar sig.',
    technical:
      'Komplett perimeter med ID06-passage, transportgrindar och insynsskydd. Stadig förankring oavsett om underlaget är gjutet, asfalt eller grus.',
    image: '/images/safescaff_i51.jpg',
    alt: 'Byggstaket runt arbetsplats',
    href: '/byggstaket',
  },
]

export function WhatWeDo() {
  return (
    <section id="tjanster" className="bg-brand-white py-24 md:py-32">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="label-mono text-brand-green">Vad vi gör</span>
            </Reveal>
            <TextReveal
              text="Fyra tjänster. En leverantör."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-brand-graphite">
                Vi reser allt som behövs runt en arbetsplats — från ställning och väderskydd
                till skyltar och staket. Behöver du flera saker? Bara en kontakt, bara en
                faktura.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <span className="label-mono text-brand-gray">01 — 04</span>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <li key={s.number} className="bg-brand-white">
              <Reveal delay={i * 0.06} y={20}>
                <Link
                  to={s.href}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-brand-offwhite md:p-10"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-gray-light">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-brand-white text-brand-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <span className="label-mono text-brand-gray">{s.number}</span>
                    <span className="label-mono text-brand-gray transition-colors group-hover:text-brand-green">
                      Läs mer
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-[28px] font-semibold leading-tight tracking-tight text-brand-black transition-colors group-hover:text-brand-green md:text-[32px]">
                    {s.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-relaxed text-brand-black">
                    {s.simple}
                  </p>

                  <p className="mt-3 border-l-2 border-brand-green-light pl-4 text-[14px] leading-relaxed text-brand-graphite">
                    {s.technical}
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
