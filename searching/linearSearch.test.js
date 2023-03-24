import linearSearch from './linearSearch'

const arr = [5, 2, 10, 15]

describe('linearSearch', () => {
  it('should return searched element index inside of array', () => {
    expect(linearSearch(arr, 10)).toEqual(2)
    expect(linearSearch(arr, 15)).toEqual(3)
  });
  it('should return `-1` if there are no searched element in array', () => {
    expect(linearSearch(arr, 20)).toEqual(-1)
  });
});