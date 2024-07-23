/**
 * `flattenArr` - function for flattening provided array
 *  [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
 *  @param {*} arr
 *  @return {number[]}  
 */
export const flattenArr = arr => arr.reduce((result, element) => {
  if(Array.isArray(element)) {
    result = [...result, ...flattenArr(element)];
  } else {
    result = [...result, element]
  }
  return result;
}, []);