export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime'
    },
    {
      name: 'blogHandle',
      title: 'Blog Handle',
      type: 'string',
    },
    {
      name: 'slidesPerView',
      title: 'Slide Per View',
      type: 'number',
      validation: Rule => Rule.integer().min(1).max(3)
    },
    {
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'left', value: 'left'},
          {title: 'center', value: 'center'},
          {title: 'right', value: 'right'}
        ]
      }
    },
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{type: 'reference', to: {type: 'testimonial'}}]
    }
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
