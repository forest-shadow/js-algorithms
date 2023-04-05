import { getTargetSumIndexes } from "./getTargetSumIndexes"

describe('getTargetSumIndexes', () => {
  it('should return indexes of integer array elements which add up to target sum value', () => {
    expect(getTargetSumIndexes([2, 1, 2, 6, 4], 7)).toEqual([1, 3]);
    expect(getTargetSumIndexes([2, 1, 2, 6, 4], 5)).toEqual([1, 4]);
  })
})