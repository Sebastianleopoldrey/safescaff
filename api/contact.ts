import { z } from 'zod'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const SERVICES = ['Byggnadsställningar', 'Väderskydd', 'Skyltställ', 'Byggstaket', 'Annat'] as const

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  location: z.string().min(2),
  service: z.enum(SERVICES),
  startDate: z.string().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
})

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 422 })
  }
  const d = parsed.data

  // 1) Send email via Resend
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: 'SafeScaff <noreply@safescaff.se>',
        to: ['info@safescaff.se'],
        replyTo: d.email,
        subject: `Ny offertförfrågan — ${d.service}`,
        text: `
Namn: ${d.name}
E-post: ${d.email}
Telefon: ${d.phone}
Plats: ${d.location}
Tjänst: ${d.service}
Önskad start: ${d.startDate || 'ej angivet'}

Beskrivning:
${d.message}
        `.trim(),
      })
    } catch (err) {
      console.error('Resend failed', err)
    }
  }

  // 2) Persist to Supabase
  const supaUrl = process.env.SUPABASE_URL
  const supaKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (supaUrl && supaKey) {
    try {
      const supabase = createClient(supaUrl, supaKey)
      await supabase.from('leads').insert({
        name: d.name,
        email: d.email,
        phone: d.phone,
        location: d.location,
        service: d.service,
        start_date: d.startDate || null,
        message: d.message,
        consent: d.consent,
      })
    } catch (err) {
      console.error('Supabase insert failed', err)
    }
  }

  return Response.json({ ok: true })
}

export const config = { runtime: 'edge' }
