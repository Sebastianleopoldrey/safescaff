import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { TextReveal } from '@/components/TextReveal'
import { Prose } from '@/components/site/prose'

// On mobile: HERO_TOP sits under the heading (over the video), HERO_REST goes
// in the light section below the video. On desktop the full body shows in the hero.
const HERO_TOP =
  '**STIB-medlem.** **20 000 kvm** material i lager.\n' +
  'Svar på offertförfrågan **inom 24 timmar**.'
const HERO_REST =
  'Vi reser **byggnadsställningar och väderskydd** i Göteborg som klarar både **stormarna** och **inspektörens checklista**.'
const HERO_BODY = HERO_TOP + '\n' + HERO_REST

export function HeroHome() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 240])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <div>
      {/* data-hero is only on the video, so the header turns solid (dark logo)
          as soon as the light intro section reaches the top. */}
      <section
        ref={ref}
        data-hero
        className="relative h-[62svh] min-h-[460px] w-full overflow-hidden bg-brand-black text-brand-white md:h-[100svh] md:min-h-[640px]"
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <video
            className="h-[120%] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/DJI_0404.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Lighter scrim on mobile so the video stays prominent; full gradient on desktop. */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60 md:from-black/60 md:via-black/30 md:to-black/80" />
        </motion.div>

        <motion.div
          className="container-edge relative z-10 flex h-full flex-col items-center justify-center pb-0 text-center md:items-stretch md:justify-end md:pb-32 md:text-left"
          style={{ opacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="label-mono mb-6 block text-brand-green-light"
          >
            Göteborg · STIB-medlem sedan 2024
          </motion.span>

          <TextReveal
            text="Vi bygger säkra ställningar"
            as="h1"
            className="heading-hero text-brand-white"
            delay={0.4}
            stagger={0.08}
          />

          {/* Mobile: the two key facts sit right under the heading, over the video. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-6 md:hidden"
          >
            <Prose className="mx-auto max-w-md text-[16px] leading-relaxed text-white/85" text={HERO_TOP} />
          </motion.div>

          {/* Desktop: full body copy + CTAs sit in the hero overlay. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 hidden md:block"
          >
            <Prose className="max-w-xl text-[18px] text-white/80" text={HERO_BODY} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-10 hidden flex-wrap items-center gap-3 md:flex md:justify-start"
          >
            <Link to="/kontakt" className="btn-primary group">
              Få offert inom 24h
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#tjanster" className="btn-ghost text-brand-white">
              Se vad vi gör
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute inset-x-0 bottom-8 z-10 hidden flex-col items-center text-brand-white md:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="label-mono text-[11px]">Scrolla</span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </section>

      {/* PROFESS-style intro — mobile only. Keeps the hero copy readable below a
          clean, prominent video, on the same light tone as the rest of the site. */}
      <section className="bg-brand-offwhite pt-14 pb-6 text-center text-brand-graphite md:hidden">
        <div className="container-edge">
          <Prose className="mx-auto max-w-md text-[17px] leading-relaxed text-brand-graphite" text={HERO_REST} />
          <div className="mt-8 flex flex-col gap-3">
            <Link to="/kontakt" className="btn-primary group w-full justify-center">
              Få offert inom 24h
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="#tjanster" className="btn-ghost w-full justify-center bg-brand-white text-brand-black">
              Se vad vi gör
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
