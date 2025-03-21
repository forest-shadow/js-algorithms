import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
  it('should return true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for an even length palindrome', () => {
    expect(isPalindrome('ABBA')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('TART')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});