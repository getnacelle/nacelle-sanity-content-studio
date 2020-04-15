export default {
  name: 'content',
  title: 'Content',
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
      name: 'type',
      title: 'Type',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
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
          {type: 'testimonials'}
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
