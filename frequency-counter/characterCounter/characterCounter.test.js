import charCounter from './characterCounter'

describe('characterCounter', () => {
  test('should return character counter obj', () => {
    expect(charCounter('aaaa')).toEqual({a:4});
    expect(charCounter('a^(b4c#@d')).toEqual({a:1, b:1, 4:1, c:1, d:1});
    expect(charCounter('AaBa%^bCBdE5)')).toEqual({a:3, b:3, c: 1, d: 1, e: 1, 5:1})
    expect(charCounter('hello')).toEqual({h:1, e:1, l:2, o:1});
  })
})
