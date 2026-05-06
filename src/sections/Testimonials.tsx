import { Reveal } from '@/components/Reveal'
import { TextReveal } from '@/components/TextReveal'

// PLATSHÅLLAR-uttalanden — markerade tydligt. Byt ut mot riktiga citat innan lansering.
const QUOTES = [
  {
    body: 'SafeScaff levererade i tid och med en yrkesstolthet som märks. Kommunikationen var rak och problem löstes på plats. Vi anlitar dem igen utan att ens fråga om offert från andra.',
    name: 'Anders Karlsson',
    role: 'Fastighetsägare, Göteborg',
    placeholder: true,
  },
  {
    body: 'Vi anlitade SafeScaff för ett komplext fasadprojekt på 18 våningar. Säkerhetstänket gick igenom hela kedjan, från första offerten till sista demonteringen. Det här är hur ett ställningsföretag ska drivas.',
    name: 'Maria Lindberg',
    role: 'Projektledare, BRF Centrum',
    placeholder: true,
  },
  {
    body: 'Litet företag, stora muskler — det är inte bara en slogan. Patrik och hans team har den lokala förankringen och flexibiliteten som vi värdesätter. Och de svarar i telefon.',
    name: 'Johan Persson',
    role: 'Byggchef, Skanska',
    placeholder: true,
  },
]

export function Testimonials() {
  return (
    <section className="bg-brand-white py-24 md:py-40">
      <div className="container-edge">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="label-mono text-brand-green">Vad kunderna säger</span>
          </Reveal>
          <TextReveal
            text="Yrkesstolthet märks."
            as="h2"
            className="heading-section mt-6 text-brand-black"
          />
        </div>

        <ul className="grid gap-px bg-brand-gray-light md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <li key={i} className="flex flex-col bg-brand-white p-8 md:p-10">
              <Reveal delay={i * 0.08} y={30}>
                <p className="font-display text-[20px] font-medium leading-snug text-brand-black md:text-[22px]">
                  &ldquo;{q.body}&rdquo;
                </p>
                <div className="mt-8 border-t border-brand-gray-light pt-5">
                  <p className="text-[14px] font-medium text-brand-black">{q.name}</p>
                  <p className="text-[13px] text-brand-graphite">{q.role}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
