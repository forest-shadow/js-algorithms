import binarySearch from './binarySearch'

const arr = [2, 5, 8, 10, 13, 15, 16]

describe('binarySearch', () => {
  it('should return searched element index inside of array', () => {
    expect(binarySearch(arr, 5)).toEqual(1)
    expect(binarySearch(arr, 15)).toEqual(5)
  });
  it('should return `-1` if there are no searched element in array', () => {
    expect(binarySearch(arr, 20)).toEqual(-1)
  });
});