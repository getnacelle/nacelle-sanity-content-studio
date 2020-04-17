export default {
  name: 'heroBanner',
  title: 'Hero Banner',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
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
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'medium', value: 'medium'},
          {title: 'large', value: 'large'},
          {title: 'fullheight', value: 'fullheight'}
        ]
      }
    },
    {
      name: 'mobileFullHeight',
      title: 'Mobile Full Height',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    },
    {
      name: 'mobileBackgroundImage',
      title: 'Mobile Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'ctaText',
      title: 'Call-to-action Text',
      type: 'string'
    },
    {
      name: 'ctaUrl',
      title: 'Call-to-action Url',
      type: 'string'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string'
    },
    {
      name: 'backgroundAltTag',
      title: 'Background Alt Tag',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'featuredMedia'
    }
  }
}
