export default {
  name: 'blog',
  title: 'Blog',
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
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'article'},
          {type: 'heroBanner'},
          {type: 'productGrid'},
          {type: 'sideBySide'},
          {type: 'testimonials'}
        ]
      }]
    }
  ]
}
