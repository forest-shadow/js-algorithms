import { getMinimizedStringLength } from './getMinimizedStringLength';

describe('Name of the group', () => {
  it('should return minimized string length', () => {
    expect(getMinimizedStringLength('aaabc')).toBe(3);
    expect(getMinimizedStringLength('cbbd')).toBe(3);
    expect(getMinimizedStringLength('dddaaa')).toBe(2);
    expect(getMinimizedStringLength('aabbbbbcccdddaaa')).toBe(4);
  });
});
