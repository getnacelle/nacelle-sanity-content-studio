export default {
  name: 'sideBySide',
  title: 'Side By Side',
  type: 'document',
  fields: [
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'ContentHeroBanner', value: 'ContentHeroBanner'},
          {title: 'ContentSideBySide', value: 'ContentSideBySide'},
          {title: 'ContentTestimonials', value: 'ContentTestimonials'},
          {title: 'ContentProductGrid', value: 'ContentProductGrid'}
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
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'featuredMedia',
      title: 'Featured Media',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime'
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string'
    },
    {
      name: 'ctaText',
      title: 'Call-to-action Text',
      type: 'string'
    },
    {
      name: 'ctaUrl',
      title: 'Call-to-action Url',
      type: 'url'
    },
    {
      name: 'reverseDesktop',
      title: 'Reverse Desktop',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    },
    {
      name: 'reverseMobile',
      title: 'Reverse Mobile',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'featuredMedia'
    }
  }
}
