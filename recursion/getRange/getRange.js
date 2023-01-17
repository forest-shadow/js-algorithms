// `getRange`
// Write function to get the integers in range (x, y)
const getRange = (start, end) =>
  end > start ? [...getRange(start, end - 1), end] : [start];
export default getRange;
