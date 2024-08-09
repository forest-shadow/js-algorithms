import { getFirstSubstrOccurenceIndex } from './getFirstSubstrOccurenceIndex';

describe('getFirstSubstrOccurenceIndex', () => {
  it('should return the index of the first occurence of the substring in the string', () => {
    expect(getFirstSubstrOccurenceIndex('hello', 'll')).toBe(2);
    expect(getFirstSubstrOccurenceIndex('sadbutsad', 'sad')).toBe(0);
    expect(getFirstSubstrOccurenceIndex('ohsadbutsad', 'sad')).toBe(2);
  });

  it('should return -1 if the substring is not found in the string', () => {
    expect(getFirstSubstrOccurenceIndex('hello', 'az')).toBe(-1);
    expect(getFirstSubstrOccurenceIndex('leetcode', 'leeto')).toBe(-1);
  });
});
