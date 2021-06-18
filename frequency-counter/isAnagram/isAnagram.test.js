import isAnagram from './isAnagram'

describe('isAnagram', () => {
  test('should return true if second string parameter is an anagram of first one', () => {
    expect(isAnagram('', '')).toBe(true);
    expect(isAnagram('qwerty', 'weyqrt')).toBe(true);
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });
  test('should return false if second string parameter is not isAnagram of first one', () => {
    expect(isAnagram('aaz', 'zza')).toBe(false);
    expect(isAnagram('rat', 'car')).toBe(false);
    expect(isAnagram('awesome', 'awesom')).toBe(false);
  })
});
