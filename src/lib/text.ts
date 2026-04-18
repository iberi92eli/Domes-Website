function flattenLexicalNode(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  const value = node as { text?: unknown; children?: unknown[]; root?: unknown }
  const ownText = typeof value.text === 'string' ? value.text : ''

  if (Array.isArray(value.children)) {
    return [ownText, ...value.children.map(flattenLexicalNode)].filter(Boolean).join(' ').trim()
  }

  if (value.root) {
    return flattenLexicalNode(value.root)
  }

  return ownText.trim()
}

export function getTextValue(value?: unknown): string {
  if (typeof value === 'string') return value
  if (!value) return ''
  if (typeof value === 'object') return flattenLexicalNode(value)
  return String(value)
}

export function splitParagraphs(text?: unknown) {
  return getTextValue(text)
    .split(/\n{2,}/)
    .map((entry) => entry.trim())
    .filter(Boolean)
}

export function arrayItems(items?: Array<{ item?: string | null }> | null) {
  return (items || []).map((entry) => entry?.item || '').filter(Boolean)
}
