import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import { TextReveal } from '@/components/TextReveal'
import { Reveal } from '@/components/Reveal'
import { ImageReveal } from '@/components/ImageReveal'
import { site } from '@/config/site'
import { cn } from '@/lib/cn'

const SERVICES = ['Byggnadsställningar', 'Väderskydd', 'Skyltställ', 'Byggstaket', 'Annat'] as const

const schema = z.object({
  name: z.string().min(2, 'Ange ditt namn'),
  email: z.string().email('Ogiltig e-postadress'),
  phone: z.string().min(6, 'Ange ett giltigt telefonnummer'),
  location: z.string().min(2, 'Ange plats för arbetet'),
  service: z.enum(SERVICES, { message: 'Välj typ av tjänst' }),
  startDate: z.string().optional(),
  message: z.string().min(10, 'Beskriv projektet kort'),
  consent: z.literal(true, { message: 'Du måste godkänna integritetspolicyn' }),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Kunde inte skicka')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="bg-brand-black pt-40 pb-20 text-brand-white md:pt-48 md:pb-28">
        <div className="container-edge">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="label-mono mb-6 block text-brand-green-light"
          >
            Kontakt
          </motion.span>
          <TextReveal text="Hör av dig." as="h1" className="heading-hero text-brand-white" />
          <Reveal delay={0.4}>
            <p className="mt-8 max-w-xl text-[18px] text-white/80">
              Vi återkommer inom 24 timmar på vardagar. Akut? Ring direkt på {site.phone}.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-offwhite py-24 md:py-32">
        <div className="container-edge">
          <div className="grid gap-px border border-brand-gray-light bg-brand-gray-light md:grid-cols-2">
            {site.team.map((m, i) => (
              <Reveal key={m.email} delay={i * 0.1} y={20}>
                <article className="flex h-full flex-col gap-6 bg-brand-white p-8 md:flex-row md:gap-8 md:p-10">
                  <ImageReveal src={m.image} alt={m.name} className="aspect-square w-32 flex-none md:w-40" />
                  <div className="flex flex-col">
                    <span className="label-mono text-brand-gray">{m.role}</span>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-black">{m.name}</h2>
                    <a href={`tel:${m.phoneTel}`} className="mt-6 flex items-center gap-2 text-[15px] hover:text-brand-green">
                      <Phone size={14} /> {m.phone}
                    </a>
                    <a href={`mailto:${m.email}`} className="mt-2 flex items-center gap-2 text-[15px] hover:text-brand-green">
                      <Mail size={14} /> {m.email}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-24 md:py-32">
        <div className="container-edge grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <Reveal>
              <span className="label-mono text-brand-green">Förfrågan</span>
            </Reveal>
            <TextReveal text="Berätta om projektet." as="h2" className="heading-section mt-6 text-brand-black" />
            <Reveal delay={0.2} y={30}>
              <p className="mt-8 max-w-md text-[17px] text-brand-graphite">
                Fyll i formuläret så återkommer vi inom 24 timmar med nästa steg.
              </p>
            </Reveal>

            <div className="mt-12 space-y-4 text-[15px] text-brand-graphite">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-none text-brand-green" />
                <span>
                  <strong className="block text-brand-black">Besöksadress</strong>
                  {site.address.visiting}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-none text-brand-green" />
                <a href={`mailto:${site.email}`} className="hover:text-brand-green">{site.email}</a>
              </p>
              <p className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-none text-brand-green" />
                <a href={`tel:${site.phoneTel}`} className="hover:text-brand-green">{site.phone}</a>
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Namn" error={errors.name?.message}>
                <input type="text" {...register('name')} className={inputCls} placeholder="För- och efternamn" />
              </Field>
              <Field label="E-post" error={errors.email?.message}>
                <input type="email" {...register('email')} className={inputCls} placeholder="namn@exempel.se" />
              </Field>
              <Field label="Telefon" error={errors.phone?.message}>
                <input type="tel" {...register('phone')} className={inputCls} placeholder="070-123 45 67" />
              </Field>
              <Field label="Plats" error={errors.location?.message}>
                <input type="text" {...register('location')} className={inputCls} placeholder="Adress eller område" />
              </Field>
            </div>

            <Field label="Typ av tjänst" error={errors.service?.message}>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {SERVICES.map((s) => (
                  <label key={s} className="flex cursor-pointer items-center gap-2 border border-brand-gray-light p-3 text-[14px] hover:border-brand-black has-[:checked]:border-brand-green has-[:checked]:bg-brand-green/5">
                    <input type="radio" value={s} {...register('service')} className="accent-brand-green" />
                    {s}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Önskad start (valfritt)" error={errors.startDate?.message}>
              <input type="date" {...register('startDate')} className={inputCls} />
            </Field>

            <Field label="Beskriv projektet" error={errors.message?.message}>
              <textarea {...register('message')} rows={6} className={cn(inputCls, 'min-h-[140px] resize-y')} placeholder="Storlek, höjd, längd på projektet, eventuella särskilda krav…" />
            </Field>

            <label className="flex items-start gap-3 text-[14px] text-brand-graphite">
              <input type="checkbox" {...register('consent')} className="mt-1 accent-brand-green" />
              <span>
                Jag samtycker till att mina personuppgifter behandlas enligt{' '}
                <a href="/integritetspolicy" className="underline hover:text-brand-green">integritetspolicyn</a>.
              </span>
            </label>
            {errors.consent?.message && <p className="text-[13px] text-red-600">{errors.consent.message}</p>}

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="btn-primary group disabled:opacity-60"
            >
              {status === 'sending' && <><Loader2 size={16} className="animate-spin" /> Skickar…</>}
              {status === 'success' && <><CheckCircle2 size={16} /> Tack — vi hör av oss!</>}
              {(status === 'idle' || status === 'error') && <>Skicka förfrågan <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></>}
            </button>
            {status === 'error' && (
              <p className="text-[14px] text-red-600">
                Något gick fel. Ring oss direkt på {site.phone} eller mejla {site.email}.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-brand-offwhite pb-24">
        <div className="container-edge">
          <Reveal>
            <iframe
              title="Karta över SafeScaff i Mölndal"
              src="https://www.google.com/maps?q=Kungsbackav%C3%A4gen+152,+431+90+M%C3%B6lndal&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[480px] w-full border-0 grayscale"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}

const inputCls =
  'w-full border-0 border-b border-brand-gray-light bg-transparent px-0 py-3 text-[16px] text-brand-black outline-none transition-colors focus:border-brand-black'

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="label-mono mb-2 block text-[12px] text-brand-graphite">{label}</label>
      {children}
      {error && <p className="mt-1 text-[13px] text-red-600">{error}</p>}
    </div>
  )
}
