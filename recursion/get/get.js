/**
 * get - return object's property by provided path
 * @param {Object.<string, any>} obj 
 * @param {string} path 
 */
const get = (obj, path) => {
  const [firstKey, ...lastKeys] = path.split('.');
  if(typeof obj[firstKey] === 'object') {
    return get(obj[firstKey], lastKeys.join('.'))
  } else if (obj[firstKey]) {
    return obj[firstKey];
  }
  return null;
}

export default get;