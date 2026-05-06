import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'
import { featureFlags } from '@/config/featureFlags'

interface Project {
  number: string
  title: string
  body: string
  image: string
  status: 'live' | 'soon'
}

const PROJECTS: Project[] = [
  {
    number: '01 · 04',
    title: 'Östra Sjukhuset',
    body: 'Storskaligt väderskydd i Keder XL som höll genom två kraftiga stormar. Inga avbrott. Inga försenade arbetsdagar. Bara ett färdigt jobb.',
    image: '/images/DJI_0404.jpg',
    status: featureFlags.ostraSjukhusetCase ? 'live' : 'soon',
  },
  {
    number: '02 · 04',
    title: 'Kommer snart',
    body: 'Nästa case publiceras inom kort.',
    image: '/images/byggstallning-safescaff-2100x800.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
  {
    number: '03 · 04',
    title: 'Kommer snart',
    body: 'Nästa case publiceras inom kort.',
    image: '/images/IMG_1116-scaled.jpg',
    status: featureFlags.showProjectCases ? 'live' : 'soon',
  },
  {
    number: '04 · 04',
    title: 'Kommer snart',
    body: 'Nästa case publiceras inom kort.',
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
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.number}
            data-card
            initial={{ opacity: 0.4 }}
            animate={{ opacity: i === active ? 1 : 0.6 }}
            className="flex-none snap-start"
            style={{ width: 'min(560px, 85vw)' }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-gray-light">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]" loading="lazy" />
              {p.status === 'soon' && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-black/60">
                  <span className="label-mono text-brand-white">Kommer snart</span>
                </div>
              )}
            </div>
            <div className="mt-6 flex items-baseline justify-between">
              <span className="label-mono text-brand-gray">{p.number}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-black md:text-3xl">
              {p.title}
            </h3>
            <p className="mt-3 max-w-md text-[15px] text-brand-graphite">{p.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
