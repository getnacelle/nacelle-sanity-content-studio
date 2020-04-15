export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string'
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string'
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'slug',
      options: {
        source: ({ firstName, lastName }) => { return firstName + ' ' + lastName },
        maxLength: 96
      }
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'featuredMedia'
    },
    prepare(selection) {
      const { firstName, lastName, media } = selection
      return {
        title: firstName + ' ' + lastName,
        media: media
      }
    }
  }
}
