import mergeIntervals from './mergeIntervals';

describe('mergeIntervals', () => {
  it('should merge overlapping intervals', () => {
    expect(mergeIntervals([[1, 3], [2, 4], [5, 7], [6, 8]])).toEqual([[1, 4], [5, 8]]);
  });

  it('should handle intervals that touch at the endpoints', () => {
    expect(mergeIntervals([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  });

  it('should handle nested intervals', () => {
    expect(mergeIntervals([[1, 10], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 10], [15, 18]]);
  });

  it('should merge multiple overlapping intervals', () => {
    expect(mergeIntervals([[1, 4], [0, 2], [3, 5]])).toEqual([[0, 5]]);
  });

  it('should return the same intervals if no overlap exists', () => {
    expect(mergeIntervals([[1, 2], [3, 4]])).toEqual([[1, 2], [3, 4]]);
  });
});