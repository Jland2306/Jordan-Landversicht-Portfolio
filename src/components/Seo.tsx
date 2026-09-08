import { useDocumentMeta } from '../hooks/useDocumentMeta'

interface SeoProps {
  title: string
  description: string
  image?: string
}

export default function Seo({ title, description, image }: SeoProps) {
  useDocumentMeta({ title, description, image })
  return null
}
