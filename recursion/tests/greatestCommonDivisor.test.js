import greatestCommonDivisor from '../greatestCommonDivisor';

describe('greatestCommonDivisor', () => {
  it('should return greatest common divisor of two numbers', () => {
    expect(greatestCommonDivisor(2154, 458)).toEqual(2);
    expect(greatestCommonDivisor(458, 2154)).toEqual(2);
  });
});
