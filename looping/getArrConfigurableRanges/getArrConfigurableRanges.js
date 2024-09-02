/**
 * Return ranges of the sorted number with parametrized range length
 * @param {number[]} nums 
 * @param {number} rangeLength 
 */
const getArrConfigurableRanges = (nums, rangeLength = 3) => {
  const result = [];
  let startEl = nums[0];
  // will hold temp els & current range length
  let tempRange = [];
  
  for(let i = 0; i < nums.length; i++) {
    let curEl = nums[i];
    let nextEl = nums[i + 1];
    tempRange.push(curEl);

    // the case to put something in result -> when curEl + 1 !== nextEl
    if (curEl + 1 !== nextEl) {
      if (tempRange.length >= rangeLength) {
        result.push(`${startEl}->${curEl}`);
      } else {
        result.push(...tempRange)
      }
      startEl = nextEl;
      tempRange = []
    }
  }

  return result.join(',');
}

export default getArrConfigurableRanges;