const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: 5,
    },
  },
};

export const flattenObj = (obj) => {
  let stack = [{ obj, keys: [] }];
  let result = {};

  while (stack.length > 0) {
    const { obj: currentObj, keys } = stack.pop();

    for (let key in currentObj) {
      if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
        stack.push({ obj: currentObj[key], keys: [...keys, key] });
      } else {
        result = {
          ...result,
          [[...keys, key].join(':')]: currentObj[key],
        };
      }
    }
  }
  return result;
};
