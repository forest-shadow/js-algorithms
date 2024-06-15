import { decompressRLElist } from './decompressRleList';

describe('decompressRLElist', () => {
  it('should decode provided rle list', () => {
    expect(decompressRLElist([1, 2, 3, 4])).toEqual([2, 4, 4, 4]);
    expect(decompressRLElist([1, 1, 2, 3])).toEqual([1, 3, 3]);
  });
});