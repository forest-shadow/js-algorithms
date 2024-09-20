/**
 * 
 * @param {[{}]} objArr 
 * @param {string} key 
 */
const groupObjectArray = (objArr, key) => {
  const result = {};

  for (let i = 0; i < objArr.length; i++) {
    const obj = objArr[i];
    const keyValue = obj[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(obj);
  }

  return result
}

export default groupObjectArray;