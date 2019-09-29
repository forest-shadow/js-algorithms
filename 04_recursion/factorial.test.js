import factorial from './factorial'

describe('factorial', () => {
  it('should return `n` factorial', () => {
    expect(factorial(3)).toEqual(6)
    expect(factorial(4)).toEqual(24)
  });
});