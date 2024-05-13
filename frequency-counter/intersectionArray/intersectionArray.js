/**
 * intersectionArray - return array of intersected elements
 * @param {number[]} numbers1 
 * @param {number[]} numbers2 
 * @returns {number[]|null}
 */
export const intersectionArray = (numbers1, numbers2) => {
  if (!numbers1.length || !numbers2.length) return null;
  const numbers1Map = {};
  const intersections = new Set();
  for (let number of numbers1) {
    numbers1Map[number] = true;
  }
  for (let number of numbers2) {
    if (numbers1Map[number]) intersections.add(number);
  }
  return Array.from(intersections).sort();
}