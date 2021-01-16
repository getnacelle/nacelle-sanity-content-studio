import NacelleLinker from '../../components/NacelleLinker'

export default {
  name: 'productGrid',
  title: 'Product Grid',
  type: 'document',
  fields: [
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'ContentHeroBanner', value: 'ContentHeroBanner' },
          { title: 'ContentSideBySide', value: 'ContentSideBySide' },
          { title: 'ContentTestimonials', value: 'ContentTestimonials' },
          { title: 'ContentProductGrid', value: 'ContentProductGrid' }
        ]
      }
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
      validation: (Rule) => Rule.required()
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        range: { min: 0, max: 10, step: 0.2 }
      },
      validation: (Rule) => Rule.integer().min(1).max(12)
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime'
    },
    {
      name: 'collectionHandle',
      title: 'Collection',
      type: 'string',
      inputComponent: NacelleLinker,
      options: {
        dataType: ['collections']
      }
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
