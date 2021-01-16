export default function resolvePreviewUrl(document) {
  // replace with your Preview Site's URL
  const baseUrl = process.env.SANITY_STUDIO_PREVIEW_SITE_URL
  const handle = (document.handleValue && document.handleValue.current) || ''

  if (!baseUrl) {
    return null
  }

  if (!handle) {
    return baseUrl
  }

  switch (document.type) {
    case 'page':
      if (handle === 'homepage') {
        return baseUrl
      }

      return `${baseUrl}/pages/${handle}`
    case 'article':
      return `${baseUrl}/articles/${handle}`
    default:
      return baseUrl
  }
}
