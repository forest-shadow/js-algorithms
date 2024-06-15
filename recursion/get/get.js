/**
 * get - retunr object's property by provided path
 * @param {Object.<string, any>} obj 
 * @param {string} path 
 */
export const get = (obj, path) => {
  const [firstKey, ...lastKey] = path.split('.');

  if(firstKey) {
    if (typeof obj[firstKey] === 'object') {
      return get(obj[firstKey], lastKey.join('.'))
    } else if (obj[firstKey]) {
      return obj[firstKey];
    } else {
      return null;
    }
  }
}
