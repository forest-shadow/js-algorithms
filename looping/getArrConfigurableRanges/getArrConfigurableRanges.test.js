import getArrConfigurableRanges from './getArrConfigurableRanges';

describe('getArrSummaryRanges', () => {
  it('should return ranges summary in the provided array', () => {
    expect(getArrConfigurableRanges([0,1,3,4,5])).toEqual("0,1,3->5");
    expect(getArrConfigurableRanges([-10, -9, -8, -7, -3, -2, -1, 0, 1, 3, 4, 5, 14, 15, 17, 18, 19, 20])).toEqual("-10->-7,-3->1,3->5,14,15,17->20");
  });
});

// const range = [-10, -9, -8, -7, -3, -2, -1, 0, 1, 3, 4, 5, 14, 15, 17, 18, 19, 20];
// console.info(rangeExtraction(range) === "-10--7,-3-1,3-5,14,15,17-20");