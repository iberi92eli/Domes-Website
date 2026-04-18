export function getMediaUrl(media: unknown): string | null {
  if (!media || typeof media !== "object") return null
  const value = media as { url?: string | null }
  return value.url || null
}

export function getInitials(value?: string | null): string {
  if (!value) return 'DL'
  const parts = value.split(/\s+/).filter(Boolean)
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() || '').join('')
  return initials || 'DL'
}
