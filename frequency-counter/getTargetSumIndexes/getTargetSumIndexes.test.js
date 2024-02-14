import { getTargetSumIndexes } from "./getTargetSumIndexes"

describe('getTargetSumIndexes', () => {
  it('should return indexes of integer array elements which add up to target sum value', () => {
    expect(getTargetSumIndexes([2, 1, 2, 6, 4], 7)).toEqual([1, 3]);
    expect(getTargetSumIndexes([2, 1, 2, 6, 4], 5)).toEqual([1, 4]);
    expect(getTargetSumIndexes([3, 2, 4], 6)).toEqual([1, 2]);
    expect(getTargetSumIndexes([3, 3], 6)).toEqual([0, 1]);
  })
})