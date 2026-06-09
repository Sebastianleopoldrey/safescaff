import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'
import { ImageReveal } from '@/components/ImageReveal'
import { Prose } from '@/components/site/prose'

const STATS = ['8 ÅR', '20 000 KVM', 'STIB SEDAN 2024', 'GÖTEBORG']

export function IntroBlock() {
  return (
    <section className="bg-brand-offwhite py-24 md:py-40">
      <div className="container-edge grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <span className="label-mono text-brand-green">Om SafeScaff</span>
          </Reveal>
          <TextReveal
            text="Göteborgs ställningsexperter."
            as="h2"
            className="heading-section mt-6 text-brand-black"
          />
          <Reveal delay={0.15} y={30}>
            <Prose
              className="mt-8 max-w-xl text-[18px] text-brand-graphite"
              text={
                'Vi utför **montering och demontering** samt **uthyrning** av byggnadsställningar och väderskydd.\n' +
                'Våra ambitioner är **säkerhet, god service och kvalitet** vilket leder till en nöjd kund.\n' +
                'Hyr du ställningar utav oss ordnar vi **allt med transport, montering/demontering** och vi ser framörallt till att du har en **säker och trygg arbetsplats** att jobba ifrån.'
              }
            />
          </Reveal>

          <Reveal delay={0.25} y={30}>
            <ul className="mt-12 grid grid-cols-2 gap-px border border-brand-gray-light bg-brand-gray-light sm:grid-cols-4">
              {STATS.map((s) => (
                <li key={s} className="flex items-center justify-center bg-brand-white px-4 py-6 text-center">
                  <span className="label-mono text-brand-black">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.35} y={20}>
            <Link
              to="/om-safescaff"
              className="group mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-brand-black hover:text-brand-green"
            >
              Vår historia
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="lg:sticky lg:top-32">
          <ImageReveal
            src="/images/IMG_1116-scaled.jpg"
            alt="Storskalig fasadställning byggd av SafeScaff i Göteborg"
            className="aspect-[4/5] w-full"
          />
          <Reveal delay={0.2}>
            <div className="mt-4 flex items-baseline justify-between text-[13px] text-brand-graphite">
              <span>Pågående projekt</span>
              <span className="label-mono">Göteborg · 2024</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
