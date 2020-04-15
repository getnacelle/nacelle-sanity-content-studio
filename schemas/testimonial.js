export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'quotation',
      title: 'Quotatiion',
      type: 'text'
    },
    {
      name: 'featuredMedia',
      title: 'Featured Media',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'featuredMedia'
    }
  }
}
