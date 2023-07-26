/**
 * @param {any} val1
 * @param {any} val2
 * @return {boolean}
 */
export const isDeeplyEqual = (val1, val2) => {
  const stack = [{ val1, val2 }];

  while (stack.length > 0) {
    const { val1, val2 } = stack.pop();
    if (typeof val1 !== typeof val2) return false;
    if ((val1 === null || val2 === null) && val1 !== val2) return false;
    if (typeof val1 === 'object') {
      for(let key in val1) {
        stack.push({val1: val1[key], val2: val2[key]})
      }
      console.log('stack', stack);
    } else {
      if(val1 !== val2) return false;
    }
  }

  return true;
}
