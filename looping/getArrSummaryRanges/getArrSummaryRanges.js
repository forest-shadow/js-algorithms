/**
 * getArrSummaryRanges
 * @param {number[]} nums
 * @return {string[]}
 */
const getArrSummaryRanges = nums => {
  let startRangeEl = nums[0];
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const curEl = nums[i];
    const nextEl = nums[i + 1];
    if (curEl + 1 !== nextEl) {
      result.push(curEl === startRangeEl ? '' + curEl : `${startRangeEl}->${curEl}`);
      startRangeEl = nextEl;
    }
  }
  return result;
}

export default getArrSummaryRanges;