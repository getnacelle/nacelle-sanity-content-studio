// Refer to Sanity's docs on using the preview plugin
// https://www.sanity.io/docs/preview-content-on-site

export default function resolveProductionUrl(document) {
  const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL
  const handle = document && document.handle && document.handle.current
  const type = document && document._type

  if (type === 'page') {
    // limit previewing to pages

    if (handle === 'homepage') {
      return previewUrl
    } else if (handle) {
      return `${previewUrl}pages/${handle}`
    }
  }
}
