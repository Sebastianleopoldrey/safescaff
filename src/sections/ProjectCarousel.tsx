import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'
import { featureFlags } from '@/config/featureFlags'

interface Project {
  number: string
  title: string
  scope: string
  body: string
  image: string
  href?: string
  status: 'live' | 'soon'
}

const PROJECTS: Project[] = [
  {
    number: '01 · 04',
    title: 'Östra Sjukhuset',
    scope: 'Keder XL · ~3 200 m² · 14 v',
    body: 'Storskaligt väderskydd över ett aktivt sjukhus. Höll genom två stormar. Noll avbrott i sjukvården. Klart i tid.',
    image: '/images/ostra-sjukhuset.jpg',
    href: '/projekt',
    status: featureFlags.ostraSjukhusetCase ? 'live' : 'soon',
  },
  {
    number: '02 · 04',
    title: 'BRF-fasad i Majorna',
    scope: 'Modul allround · 1 800 m²',
    body: 'Fasadrenovering med boendepassage genom hela byggtiden — utan att fasadarbetet stannade en dag.',
    image: '/images/byggstallning-safescaff-2100x800.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
  {
    number: '03 · 04',
    title: 'Industri i Sävenäs',
    scope: 'Fasad + tak · 2 400 m²',
    body: 'Storskaligt montage där produktionen aldrig kunde stoppas. Vi byggde i etapper, nattetid där det krävdes.',
    image: '/images/IMG_1116-scaled.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
  {
    number: '04 · 04',
    title: 'Villa i Kungsbacka',
    scope: 'Speedyscaff · 3 v',
    body: 'Aluminiumställning på begränsad tomt. Snabb resning, noll skador i trädgården, demontering på en dag.',
    image: '/images/IMG_1457.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
]

export function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]') as HTMLElement | null
    const w = card ? card.offsetWidth + 24 : 600
    track.scrollBy({ left: dir * w, behavior: 'smooth' })
    setActive((prev) => Math.max(0, Math.min(PROJECTS.length - 1, prev + dir)))
  }

  return (
    <section className="bg-brand-offwhite py-24 md:py-40">
      <div className="container-edge mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <span className="label-mono text-brand-green">Projekt</span>
          </Reveal>
          <TextReveal
            text="Senaste projekt."
            as="h2"
            className="heading-section mt-4 text-brand-black"
          />
        </div>
        <Reveal delay={0.1}>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Föregående projekt"
              className="flex h-12 w-12 items-center justify-center border border-brand-gray-light transition hover:border-brand-black hover:bg-brand-black hover:text-brand-white"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Nästa projekt"
              className="flex h-12 w-12 items-center justify-center border border-brand-gray-light transition hover:border-brand-black hover:bg-brand-black hover:text-brand-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        data-lenis-prevent
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[clamp(20px,4vw,64px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {PROJECTS.map((p, i) => {
          const isLink = !!p.href && p.status === 'live'
          const cardWidth = { width: 'min(560px, 85vw)' }
          const inner = (
            <motion.article
              data-card
              initial={{ opacity: 0.4 }}
              animate={{ opacity: i === active ? 1 : 0.6 }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-gray-light">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {p.status === 'soon' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-brand-black/60">
                    <span className="label-mono text-brand-white">Bilder kommer</span>
                  </div>
                )}
                {isLink && (
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-brand-white text-brand-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <span className="label-mono text-brand-gray">{p.number}</span>
                <span className="label-mono text-brand-gray">{p.scope}</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-black transition-colors group-hover:text-brand-green md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] text-brand-graphite">{p.body}</p>
            </motion.article>
          )

          return isLink ? (
            <Link
              key={p.number}
              to={p.href!}
              className="group block flex-none snap-start"
              style={cardWidth}
            >
              {inner}
            </Link>
          ) : (
            <div
              key={p.number}
              className="group flex-none snap-start"
              style={cardWidth}
            >
              {inner}
            </div>
          )
        })}
      </div>
    </section>
  )
}
