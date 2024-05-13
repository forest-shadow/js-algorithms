import {intersectionArray} from './intersectionArray';

describe('intersectionArray', () => {
  it('should return null if at leash one empty number array will be provided', () => {
    expect(intersectionArray([], [])).toEqual(null);
    expect(intersectionArray([1,2], [])).toEqual(null);
    expect(intersectionArray([], [1,2])).toEqual(null);
  })
  it('should return array of intersection elements', () => {
    const arr1 = [2, 5, 7, 6, 2, 4, 4];
    const arr2 = [3, 4, 6, 7, 2, 1, 2];
    expect(intersectionArray(arr1, arr2)).toEqual([2, 4, 6, 7]);
  });
});