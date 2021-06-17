import getRange from '../getRange';

describe('getRange', () => {
  it('should return array of integers from `start` to `end`', () => {
    expect(getRange(2, 7)).toEqual([2, 3, 4, 5, 6, 7]);
  });
});
