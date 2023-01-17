import arrSum from './arrSum';

describe('arrSum', () => {
  it('should return zero if provided array was empty', () => {
    expect(arrSum([])).toEqual(0);
  });
  it('should return sum of array elements', () => {
    expect(arrSum([1, 2, 3, 4, 5])).toEqual(15);
    expect(arrSum([5, 6, 7, 8])).toEqual(26);
  });
});
