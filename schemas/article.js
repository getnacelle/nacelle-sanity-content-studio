export default {
  name: 'article',
  title: 'Article',
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
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredMedia'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
