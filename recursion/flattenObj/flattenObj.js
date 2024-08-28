/**
 * Function should flatten given object
 * @param {Record<string,any>} obj 
 * @param {string[]} keys 
 * @returns {Record<string,any>}
 */
const flattenObj = (obj, keys = []) => {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result = { ...result, ...flattenObj(obj[key], [...keys, key]) };
    } else {
      result = { ...result, [[...keys, key].join(':')]: obj[key] };
    }
  }
  return result;
};

// slightly concise but slightly less performant solution
// const flattenObj = (obj, keys = []) => Object.entries(obj).reduce((result, [key, value]) => {
//   if(value !== null && typeof value === 'object') {
//     result = { ...result, ...flattenObj(value, [...keys, key]) }
//   } else {
//     result = { ...result, [[...keys, key].join(':')]: value }
//   }
//   return result;
// }, {});

export default flattenObj;
