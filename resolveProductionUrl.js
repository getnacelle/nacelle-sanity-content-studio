// Refer to Sanity's docs on using the preview plugin
// https://www.sanity.io/docs/preview-content-on-site

export default function resolveProductionUrl(document) {
  return `https://nacelle-nextjs-sanity-demo.vercel.app/api/preview?path=/pages/${document.handle.current}`
}
