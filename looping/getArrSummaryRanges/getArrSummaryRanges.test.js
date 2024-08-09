import { getArrSummaryRanges } from './getArrSummaryRanges';

describe('getArrSummaryRanges', () => {
  it('should return ranges summary in the provided array', () => {
    expect(getArrSummaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
    expect(getArrSummaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(['0', '2->4', '6', '8->9']);
  });
});