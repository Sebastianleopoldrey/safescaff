import { motion } from 'framer-motion'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'

export function Privacy() {
  return (
    <>
      <section className="bg-brand-black pt-40 pb-20 text-brand-white md:pt-48">
        <div className="container-edge">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="label-mono mb-6 block text-brand-green-light"
          >
            Juridik
          </motion.span>
          <TextReveal text="Integritetspolicy." as="h1" className="heading-hero text-brand-white" />
        </div>
      </section>

      <section className="bg-brand-offwhite py-24">
        <div className="container-edge max-w-3xl space-y-10 text-[16px] leading-relaxed text-brand-graphite">
          <Reveal>
            <p className="label-mono text-brand-gray">Senast uppdaterad: 2026-05-06</p>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-black">Personuppgiftsansvarig</h2>
              <p className="mt-3">
                SafeScaff Göteborg AB (org.nr 559116-5435) är personuppgiftsansvarig för behandlingen av dina personuppgifter.
                Kontakta oss på info@safescaff.se eller 031-82 82 84 vid frågor.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-black">Vilka uppgifter vi samlar in</h2>
              <p className="mt-3">
                När du fyller i kontaktformuläret samlar vi in namn, e-post, telefonnummer och de uppgifter du själv anger
                om ditt projekt. Detta sker enbart med ditt samtycke och endast i syfte att besvara din förfrågan.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-black">Hur länge sparas uppgifterna</h2>
              <p className="mt-3">
                Vi sparar dina personuppgifter så länge det är nödvändigt för att hantera din förfrågan eller fullgöra ett
                avtalsförhållande. Därefter raderas de eller anonymiseras. Faktureringsdata sparas enligt bokföringslagens krav.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-black">Dina rättigheter</h2>
              <p className="mt-3">
                Du har rätt att begära ut, rätta eller radera dina personuppgifter, samt invända mot eller begränsa behandlingen.
                Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-2xl font-semibold text-brand-black">Cookies</h2>
              <p className="mt-3">
                Sajten använder endast cookies som är nödvändiga för funktionalitet. Inga spårningscookies sätts utan ditt samtycke.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
