import authorSchema from './author'

describe('Author Schema', () => {
  describe('preview.prepare()', () => {
    it('should format a title', () => {
      const firstName = 'Bruce'
      const lastName = 'Wayne'
      const media = 'featuredMedia'

      const result = authorSchema.preview.prepare({
        firstName,
        lastName,
        media
      })
      expect(result).toEqual({
        title: `${firstName} ${lastName}`,
        media
      })
    })
  })
})
