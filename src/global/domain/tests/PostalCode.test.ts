import PostalCode from '../PostalCode'

describe('Create Postal Code', () => {
  test('should not accepts characters', async () => {
    expect(() => new PostalCode('asdfsa')).toThrow(`Postal code mal formatted`)
  })

  test('length must have 5 numbers', async () => {
    const post = new PostalCode('12345')
    expect(post.getValue() === '12345')
  })
})
