import { useEffect } from 'react'

type DocumentMeta = {
  title?: string
  description?: string
}

/**
 * Sätter per-sida <title> och meta-description i en SPA.
 * Återställer föregående värden när sidan lämnas, så att index.html:s
 * standard-metadata gäller på de routes som inte sätter egen.
 */
export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const prevTitle = document.title
    const descEl = document.querySelector('meta[name="description"]')
    const prevDesc = descEl?.getAttribute('content') ?? null

    if (title) document.title = title
    if (description && descEl) descEl.setAttribute('content', description)

    return () => {
      document.title = prevTitle
      if (descEl && prevDesc !== null) descEl.setAttribute('content', prevDesc)
    }
  }, [title, description])
}
