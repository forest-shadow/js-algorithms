export const intersectionArray = (arr1, arr2) => {
  if(!arr1.length && !arr2.length) return null;
  const result = [];
  const arr1Set = new Set(arr1.sort());
  const arr2Set = new Set(arr2.sort());

  const arr1Counter = {};
  for(let el of arr1Set) {
    if(arr1Counter[el]) {
      arr1Counter[el]++;
    } else {
      arr1Counter[el] = 1;
    }
  }
  for(let el of arr2Set) {
    if(arr1Counter[el]) result.push(el);
  }
  return result.sort();
};