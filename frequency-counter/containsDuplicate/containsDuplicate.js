export const containsDuplicate = (arr) => {
  if (!arr || !arr.length) return false;
  const arrHash = {};
  for (let el of arr) {
    if (arrHash[el]) return true;
    else arrHash[el] = true;
  }
  return false;
};
