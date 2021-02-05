export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
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
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'content'},
          {type: 'heroBanner'},
          {type: 'productGrid'},
          {type: 'sideBySide'},
          {type: 'testimonials'},
          {type: 'testimonial'}
        ]
      }]
    }
  ],

  preview: {
    select: {
      title: 'title',
    }
  }
}
