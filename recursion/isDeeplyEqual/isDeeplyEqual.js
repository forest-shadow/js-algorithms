/**
 * @param {any} val1
 * @param {any} val2
 * @return {boolean}
 */
export const isDeeplyEqual = (val1, val2) => {
  if(typeof val1 !== typeof val2) return false;

  // test case where one value is object and other one is null
  if((val1 === null || val2 === null) && val1 !== val2) return false;

  // handling object types vs primitive types
  if(typeof val1 === 'object' || Array.isArray(val1)) {
    for(let key in val1) {
      if(!isDeeplyEqual(val1[key], val2[key])) {
        return false
      }
    }
  } else {
    return val1 === val2
  }
  return true;
}
