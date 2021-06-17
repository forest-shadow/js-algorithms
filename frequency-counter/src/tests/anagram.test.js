import anagram from '../anagram'

describe('anagram', () => {
  test('should return true if second string parameter is anagram of first one', () => {
    expect(anagram('', '')).toBe(true);
    expect(anagram('qwerty', 'weyqrt')).toBe(true);
    expect(anagram('anagram', 'nagaram')).toBe(true);
  })
  test('should return false if second string parameter is not anagram of first one', () => {
    expect(anagram('aaz', 'zza')).toBe(false);
    expect(anagram('rat', 'car')).toBe(false);
    expect(anagram('awesome', 'awesom')).toBe(false);
  })
})