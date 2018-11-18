import charCount from '../characterCounter'

describe('characterCounter', () => {
  test('should return character counter obj', () => {
    expect(charCount('aaaa')).toEqual({a:4})
    expect(charCount('hello')).toEqual({h:1, e:1, l:2, o:1})
  })
})
