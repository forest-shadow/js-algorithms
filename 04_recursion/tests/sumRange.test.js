import sumRange from '../sumRange';

describe('sumRange', () => {
  it('should return sum from 1 to `num`', () => {
    expect(sumRange(5)).toEqual(15);
    expect(sumRange(4)).toEqual(10);
  });
});
