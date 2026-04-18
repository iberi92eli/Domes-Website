type PublicProfileLike = {
  slug?: string | null
  fullName?: string | null
}

export function isPlaceholderProfile(profile?: PublicProfileLike | null) {
  if (!profile) return false

  const slug = profile.slug?.toLowerCase() || ''
  const fullName = profile.fullName?.toLowerCase() || ''

  return slug.startsWith('placeholder-') || fullName.includes('placeholder')
}

export function getPublicAuthorLabel(profile?: PublicProfileLike | null) {
  return isPlaceholderProfile(profile) ? 'Domes Legal Editorial Desk' : profile?.fullName || 'Domes Legal'
}
