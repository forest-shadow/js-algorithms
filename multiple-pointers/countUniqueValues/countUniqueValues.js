/**
 * Returns count of unique numbers in sorted number array
 * @param {number[]} nums 
 * @returns {number}
 */
const countUniqueValues = nums => {
  if(!nums.length) return 0;
  let result = 1;

  for(let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) result++;
  }

  return result;
}

// or
// const countUniqueValues = nums => {
//   if (nums.length === 0) return 0;
//   let low = 0;
//   let high = low + 1;

//   while(high < nums.length) {
//     if(nums[low] !== nums[high]) {
//       low++;
//       nums[low] = nums[high];

//       // or
//       // nums[low + 1] = nums[high];
//       // low++;
//     }
//     high++;
//   }

//   return low + 1
// }


export default countUniqueValues;
