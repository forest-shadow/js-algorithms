// `flatten`
// write function which will be flatten given array

const flatten = (obj, keys = []) => {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result = { ...result, ...flatten(obj[key], [...keys, key]) };
    } else {
      result = { ...result, [[...keys, key].join(':')]: obj[key] };
    }
  }
  return result;
};

export default flatten;
