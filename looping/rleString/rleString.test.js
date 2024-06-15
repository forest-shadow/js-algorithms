import { rleString } from "./rleString";

describe('rleString', () => {
  it('should return rle-encoded version of the string', () => {
    expect(rleString('A')).toBe('A');
    expect(rleString('AAAB')).toBe('A3B');
    expect(rleString('ABCCC')).toBe('ABC3');
    expect(rleString("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB")).toBe('A4B3C2XYZD4E3F3A6B26');
  });
});
