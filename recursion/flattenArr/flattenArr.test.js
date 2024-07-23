import { flattenArr } from './flattenArr';

describe('flattenArr', () => {
  it('should flatten given array', () => {
    const array = [1, [1, 2, [3, 4]], [2, 4]];
    const flattenedArray = [1, 1, 2, 3, 4, 2, 4];

    expect(flattenArr(array)).toEqual(flattenedArray);
  });
});
