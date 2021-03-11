// Refer to Sanity's docs on using the preview plugin
// https://www.sanity.io/docs/preview-content-on-site

export default function resolveProductionUrl(document) {
  return `${process.env.PREVIEW_URL}${document.handle.current}`
}
