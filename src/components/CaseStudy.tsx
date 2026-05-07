import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from './Reveal'
import { TextReveal } from './TextReveal'
import { ImageReveal } from './ImageReveal'

export interface CaseStudyData {
  number: string
  title: string
  subtitle?: string
  location: string
  year: string
  heroImage: string
  challenge: string
  solution: string
  result: string
  facts: { label: string; value: string }[]
  quote?: { text: string; attribution: string }
  gallery?: { src: string; alt: string }[]
}

interface CaseStudyProps {
  data: CaseStudyData
}

export function CaseStudy({ data }: CaseStudyProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])

  return (
    <article>
      <section
        ref={heroRef}
        className="relative h-[88svh] min-h-[600px] overflow-hidden bg-brand-black text-brand-white"
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <img src={data.heroImage} alt="" className="h-[120%] w-full object-cover opacity-65" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/85" />
        </motion.div>

        <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-24">
          <Reveal>
            <span className="label-mono text-brand-green-light">
              {data.number} · {data.location} · {data.year}
            </span>
          </Reveal>
          <TextReveal text={data.title} as="h1" className="heading-hero mt-6 text-brand-white" />
          {data.subtitle && (
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-[18px] text-white/80">{data.subtitle}</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-brand-white py-20 md:py-28">
        <div className="container-edge grid gap-px border-y border-brand-gray-light bg-brand-gray-light md:grid-cols-2 lg:grid-cols-4">
          {data.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06}>
              <div className="bg-brand-white px-6 py-10 md:px-8 md:py-12">
                <span className="label-mono text-brand-graphite">{f.label}</span>
                <p className="mt-3 font-display text-[34px] font-semibold leading-none tracking-tight text-brand-black md:text-[42px]">
                  {f.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="container-edge space-y-20 md:space-y-28">
          <CaseBlock eyebrow="Utmaningen" heading="Det här var vi tvungna att lösa." body={data.challenge} />
          <CaseBlock eyebrow="Lösningen" heading="Så här gjorde vi det." body={data.solution} />
          <CaseBlock eyebrow="Resultatet" heading="Det här blev konsekvensen." body={data.result} />
        </div>
      </section>

      {data.quote && (
        <section className="bg-brand-black py-24 text-brand-offwhite md:py-32">
          <div className="container-edge">
            <Reveal>
              <span className="label-mono text-brand-green-light">Ord från projektet</span>
            </Reveal>
            <TextReveal
              text={`"${data.quote.text}"`}
              as="p"
              className="heading-section mt-8 max-w-4xl text-brand-white"
            />
            <Reveal delay={0.2}>
              <cite className="label-mono mt-8 block not-italic text-brand-gray">
                — {data.quote.attribution}
              </cite>
            </Reveal>
          </div>
        </section>
      )}

      {data.gallery && data.gallery.length > 0 && (
        <section className="bg-brand-white py-24 md:py-32">
          <div className="container-edge">
            <Reveal>
              <span className="label-mono text-brand-green">Galleri</span>
            </Reveal>
            <TextReveal
              text="Bilder från arbetsplatsen."
              as="h2"
              className="heading-section mt-6 text-brand-black"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.gallery.map((g, i) => (
                <ImageReveal
                  key={g.src + i}
                  src={g.src}
                  alt={g.alt}
                  className="aspect-[4/5] w-full"
                  delay={i * 0.06}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}

function CaseBlock({ eyebrow, heading, body }: { eyebrow: string; heading: string; body: string }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <div>
        <Reveal>
          <span className="label-mono text-brand-green">{eyebrow}</span>
        </Reveal>
        <TextReveal text={heading} as="h3" className="heading-section mt-4 text-brand-black" />
      </div>
      <Reveal delay={0.15} y={30}>
        <p className="max-w-2xl text-[18px] leading-relaxed text-brand-graphite">{body}</p>
      </Reveal>
    </div>
  )
}
