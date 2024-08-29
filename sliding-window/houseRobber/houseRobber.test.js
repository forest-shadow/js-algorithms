import rob from './houseRobber';

describe('rob', () => {
  it('should return maximum amount of gold that could be robbed without worrying the police', () => {
    expect(rob([5])).toEqual(5);
    expect(rob([1, 8, 3, 7, 9, 10])).toEqual(25);
    expect(rob([1, 2, 3, 1])).toEqual(4);
    expect(rob([2, 7, 9, 3, 1])).toEqual(12);
    expect(rob([9, 1, 1, 1, 10])).toEqual(20);
  });
  it('should return zero if no input or empty array was', () => {
    expect(rob()).toEqual(0);
    expect(rob([])).toEqual(0);
  });
})