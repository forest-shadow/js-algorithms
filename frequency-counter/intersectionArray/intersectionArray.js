export const intersectionArray = (arr1, arr2) => {
  if(!arr1.length || !arr2.length) return null;
  
  const state = {};
  const result = new Set();
  for(let num of arr1) {
    if(!state[num]) state[num] = true;
  }
  for(let num of arr2) {
    if(state[num]) result.add(num)
  }
  return Array.from(result).sort();
}