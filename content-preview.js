export default function resolvePreviewUrl(document) {
  // replace with your Preview Site's URL
  const baseUrl = 'https://prairie-wind-apparel-demo-preview.netlify.app'

  const handle = (document.handleValue && document.handleValue.current) || ''

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
