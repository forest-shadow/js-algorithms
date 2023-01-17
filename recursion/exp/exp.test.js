import exp from './exp';

describe('exp', () => {
  it('should return powered value', () => {
    expect(exp(2, 3)).toEqual(8);
    expect(exp(5, 3)).toEqual(125);
    expect(exp(5, 5)).toEqual(3125);
  });
});
