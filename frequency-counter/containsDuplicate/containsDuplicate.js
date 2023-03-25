export const containsDuplicate = arr => {
  if(!arr || !arr.length) return false;
  const arrHash = {};
  for(let el of arr) {
    if(arrHash[el]) return true;
      else arrHash[el] = true;
  }
  return false;
};

console.log(containsDuplicate()) // false
console.log(containsDuplicate([])) // false
console.log(containsDuplicate([1,2,3,4,5])) // false
console.log(containsDuplicate([1,2,3,4,1,2,3])) // true
console.log(containsDuplicate([5, 1,2,3,4,5])) // true