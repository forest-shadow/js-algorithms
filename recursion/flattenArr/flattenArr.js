/**
 * `flattenArr` - function for flattening provided array
 *  [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
 *  @param {number[]} nums
 *  @return {number[]}  
 */
const flattenArr = nums => {
  let result = [];
  for(let el of nums) {
    if (Array.isArray(el)) result = result.concat(flattenArr(el));
      else result.push(el);
  }
  return result
}

// const flattenArr = nums => arr.reduce((result, el) => {
//   if(Array.isArray(el)) {
//     result = [...result, ...flattenArr(el)];
//   } else {
//     result = [...result, el]
//   }
//   return result;
// }, []);

export default flattenArr;