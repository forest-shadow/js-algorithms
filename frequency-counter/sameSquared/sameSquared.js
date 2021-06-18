/**
 * `sameSquared` checks if passed-in second array have the same squared elements as first passed one.
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const arr1Counter = {};
  const arr2Counter = {};

  for (let element of arr1) {
    if(arr1Counter[element]) {
      arr1Counter[element]++;
    } else {
      arr1Counter[element] = 1;
    }

    // or
    // arr1Counter[element] = (arr1Counter[element] || 0) + 1
  }

  for (let element of arr2) {
    if(arr2Counter[element]) {
      arr2Counter[element]++;
    } else {
      arr2Counter[element] = 1;
    }
  }

  for (let key in arr1Counter) {
    if(
      !arr2Counter[key ** 2] ||
        arr2Counter[key ** 2] !== arr1Counter[key]
    ) {
      return false;
    }
  }

  return true;
}

export default sameSquared;