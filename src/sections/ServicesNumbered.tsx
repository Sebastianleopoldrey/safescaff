import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'
import { ImageReveal } from '@/components/ImageReveal'
import { cn } from '@/lib/cn'

interface ServiceItem {
  number: string
  title: string
  tagline: string
  body: string
  image: string
  alt: string
  href: string
}

const ITEMS: ServiceItem[] = [
  {
    number: '01',
    title: 'Byggnadsställningar',
    tagline: 'Layher i alla dess former.',
    body: 'Från villarenoveringar till flervåningsfasader — vi har ställningen som passar. Modul allround för komplexa projekt, Speedyscaff aluminium för enklare jobb. Allt monteras enligt STIB:s strängaste säkerhetskrav, av montörer som lever och andas yrkesstolthet.',
    image: '/images/IMG_6978.jpeg',
    alt: 'Layher byggnadsställning monterad',
    href: '/byggnadsstallningar',
  },
  {
    number: '02',
    title: 'Väderskydd',
    tagline: 'Arbeta året runt.',
    body: 'Vårt Keder XL-system höll genom två kraftiga stormar på Östra Sjukhuset. Det säger något om kvaliteten. När väderskyddet sitter på plats slutar vädret vara ditt problem — och projektet håller tidsplanen även när Göteborgsregnet vägrar sluta.',
    image: '/images/IMG_1483-scaled.jpg',
    alt: 'Väderskydd över byggprojekt',
    href: '/vaderskydd',
  },
  {
    number: '03',
    title: 'Skyltställ',
    tagline: 'Synlighet som inte missas.',
    body: 'Skyltställ i alla storlekar och former — hyr eller köp. Vi tar även fram reklamen. Ett samtal, en leverantör, en faktura. Så enkelt ska det vara när ditt budskap ska upp.',
    image: '/images/IMG_6971-800x800.jpeg',
    alt: 'Skyltställ med reklamskylt',
    href: '/skyltstall',
  },
  {
    number: '04',
    title: 'Byggstaket',
    tagline: 'Trygg arbetsplats från dag ett.',
    body: 'Säkra, kvalitetsmärkta byggstaket — kompletterbara med ID06-passage och transportgrindar. När arbetsplatsen är säkrad kan teamet fokusera på det de är där för att göra. Det märks i resultatet.',
    image: '/images/safescaff_i51.jpg',
    alt: 'Byggstaket runt arbetsplats',
    href: '/byggstaket',
  },
]

export function ServicesNumbered() {
  return (
    <section id="tjanster" className="bg-brand-white">
      <div className="container-edge border-b border-brand-gray-light py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="label-mono text-brand-green">Våra tjänster</span>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="label-mono text-brand-gray">01 — 04</span>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={30}>
          <h2 className="heading-section mt-6 max-w-3xl text-brand-black">
            Fyra discipliner. <br className="hidden md:inline" />En enda standard.
          </h2>
        </Reveal>
      </div>

      {ITEMS.map((item, idx) => (
        <ServiceRow key={item.number} item={item} flip={idx % 2 === 1} isLast={idx === ITEMS.length - 1} />
      ))}
    </section>
  )
}

function ServiceRow({ item, flip, isLast }: { item: ServiceItem; flip: boolean; isLast: boolean }) {
  return (
    <article
      className={cn(
        'border-brand-gray-light',
        !isLast && 'border-b'
      )}
    >
      <div
        className={cn(
          'container-edge grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-24',
          flip && 'lg:[&>*:first-child]:order-2'
        )}
      >
        <div>
          <Reveal>
            <div className="flex items-baseline gap-6">
              <span className="font-display text-[14vw] font-semibold leading-none tracking-tight text-brand-offwhite md:text-[120px]">
                {item.number}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="label-mono mt-4 block text-brand-green">{item.title}</span>
          </Reveal>

          <TextReveal
            text={item.tagline}
            as="h3"
            className="heading-section mt-4 max-w-xl text-brand-black"
          />

          <Reveal delay={0.2} y={30}>
            <p className="mt-8 max-w-lg text-[17px] text-brand-graphite">{item.body}</p>
          </Reveal>

          <Reveal delay={0.3} y={20}>
            <Link
              to={item.href}
              className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-brand-black hover:text-brand-green"
            >
              Läs mer om {item.title.toLowerCase()}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <ImageReveal
          src={item.image}
          alt={item.alt}
          className="aspect-[4/5] w-full"
        />
      </div>
    </article>
  )
}
