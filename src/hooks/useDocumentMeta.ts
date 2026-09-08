import { useEffect } from 'react'

interface DocumentMetaOptions {
  title: string
  description: string
  image?: string
}

const SITE_NAME = 'Jordan Landversicht'
const DEFAULT_IMAGE = '/images/og.png'

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useDocumentMeta({ title, description, image = DEFAULT_IMAGE }: DocumentMetaOptions) {
  useEffect(() => {
    const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`
    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:image', image)
  }, [title, description, image])
}
