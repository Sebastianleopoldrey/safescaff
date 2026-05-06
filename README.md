# SafeScaff

Hemsida för SafeScaff Göteborg AB. Vite + React 19 + TypeScript + Tailwind v4.

## Snabbstart

```bash
npm install
npm run dev
```

Öppna `http://localhost:5173`.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **Tailwind v4** (`@tailwindcss/vite`) — design tokens i `src/index.css`
- **Framer Motion** — animationer, scroll-reveals, text-reveals
- **Lenis** — global smooth scroll (`src/hooks/useLenis.ts`)
- **GSAP** — installerat, ej använt i v1
- **react-router-dom** — routing (SPA)
- **react-hook-form + zod** — kontaktformulär med validering
- **Resend** — e-post från `/api/contact`
- **Supabase** — `leads`-tabell

## Projektstruktur

```
src/
  components/   återanvändbara UI-bitar (Header, Footer, Preloader, CustomCursor, TextReveal, ImageReveal, Reveal, CookieBanner)
  sections/     sektioner som monteras till sidor (HeroHome, ImageGridHome, ServicesNumbered, ProjectCarousel, ServiceHero, m.fl.)
  pages/        Routes (Home, ServiceX, About, Projects, Contact, Privacy, NotFound)
  hooks/        useLenis, useReveal
  lib/          cn, supabase
  config/       featureFlags, site (org-info, team, services)
api/
  contact.ts    Vercel Edge function — Resend + Supabase
public/
  images/       alla skrapade bilder från safescaff.se
```

## Vad du behöver göra själv

### 1. `.env.local`

Kopiera `.env.example` till `.env.local` och fyll i:

```env
RESEND_API_KEY=re_...
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Lägg in samma värden i **Vercel → Project Settings → Environment Variables** (Production + Preview).

### 2. Resend

1. Logga in på [resend.com](https://resend.com).
2. Lägg till domänen `safescaff.se` (alt. en subdomän som `mail.safescaff.se`) och verifiera DNS (SPF/DKIM/DMARC).
3. Skapa en API-nyckel med `Send` rättigheter.
4. Lägg API-nyckeln i `RESEND_API_KEY`.

API:et skickar från `noreply@safescaff.se` till `info@safescaff.se`. Justera `from`-adressen i `api/contact.ts` om du vill.

### 3. Supabase — `leads`-tabell

Kör i SQL Editor:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  email text not null,
  phone text not null,
  location text not null,
  service text not null,
  start_date date,
  message text not null,
  consent boolean not null default false
);

alter table public.leads enable row level security;

create policy "no public read" on public.leads
  for select using (false);
```

Vi skriver med `SERVICE_ROLE_KEY` från servern (Edge function) — så RLS:en blockerar bara klienten, inte API:et.

### 4. Deploy

GitHub-repo: `Sebastianleopoldrey/safescaff` (auto-deploy main → produktion).

```bash
git push origin main   # → Vercel deploy --prod
```

## Feature flags

`src/config/featureFlags.ts`:

| Flagga | Default | Beskrivning |
|---|---|---|
| `showProjectCases` | false | Visa alla 4 projekt-kort på hemsida + projekt-sida |
| `ostraSjukhusetCase` | true | Visa Östra Sjukhuset direkt |
| `showTestimonials` | true | Visa platshållar-uttalanden |
| `careersPage` | false | Jobba hos oss-sida |
| `gaisSponsorBadge` | true | GAIS-sponsorrad på Om oss |
| `customCursor` | true | Custom cursor på desktop |
| `preloader` | true | Initial preloader |

## Innehåll som behöver bytas innan lansering

- **Testimonials** — alla tre uttalanden i `src/sections/Testimonials.tsx` är `placeholder: true`. Byt mot riktiga citat.
- **Östra Sjukhuset-bild** — använd `DJI_0404.jpg` som platshållare. Skicka in den riktiga bilden och ersätt referensen i `Home.tsx`/`Projects.tsx`.
- **OG-image** — skapa `/public/og-image.png` (1200×630, SafeScaff-logga på svart bakgrund med grön accent-linje).
