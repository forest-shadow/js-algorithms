export const containsDuplicate = (numbers) => {
  if (!numbers || !numbers.length) return false;
  const numbersCache = {};
  for (let number of numbers) {
    if (numbersCache[number]) {
      return true;
    } else {
      numbersCache[number] = true;
    }
  }
  return false;
}
