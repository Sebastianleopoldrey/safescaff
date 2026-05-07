import { Mail, Phone } from 'lucide-react'
import { Reveal } from './Reveal'
import { TextReveal } from './TextReveal'
import { ImageReveal } from './ImageReveal'

interface TeamMember {
  name: string
  role: string
  phone: string
  phoneTel: string
  email: string
  image: string
  bio?: string
}

interface TeamGridProps {
  members: readonly TeamMember[]
  eyebrow?: string
  heading?: string
  intro?: string
}

export function TeamGrid({
  members,
  eyebrow = 'Vårt team',
  heading = 'Två som tar ansvar.',
  intro = 'Hos oss pratar du direkt med den som planerar — och med den som är ute på bygget. Inga växlar, inga leads-formulär, inga säljare.',
}: TeamGridProps) {
  return (
    <section className="bg-brand-white py-24 md:py-32">
      <div className="container-edge">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <span className="label-mono text-brand-green">{eyebrow}</span>
            </Reveal>
            <TextReveal text={heading} as="h2" className="heading-section mt-6 text-brand-black" />
            <Reveal delay={0.15} y={30}>
              <p className="mt-8 max-w-md text-[18px] text-brand-graphite">{intro}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          {members.map((m, i) => (
            <article key={m.email} className="flex flex-col">
              <ImageReveal
                src={m.image}
                alt={`${m.name}, ${m.role} på SafeScaff`}
                className="aspect-[4/5] w-full"
                delay={i * 0.1}
              />
              <Reveal delay={0.2 + i * 0.05} y={20}>
                <div className="mt-6">
                  <h3 className="font-display text-[28px] font-semibold tracking-tight text-brand-black md:text-[32px]">
                    {m.name}
                  </h3>
                  <span className="label-mono mt-2 block text-brand-green">{m.role}</span>
                  {m.bio && (
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-graphite">{m.bio}</p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[14px]">
                    <a
                      href={`tel:${m.phoneTel}`}
                      className="group inline-flex items-center gap-2 text-brand-black hover:text-brand-green"
                    >
                      <Phone size={14} className="text-brand-graphite group-hover:text-brand-green" />
                      {m.phone}
                    </a>
                    <a
                      href={`mailto:${m.email}`}
                      className="group inline-flex items-center gap-2 text-brand-black hover:text-brand-green"
                    >
                      <Mail size={14} className="text-brand-graphite group-hover:text-brand-green" />
                      {m.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
