import { isHappyNumber } from './isHappyNumber.js';

describe('isHappyNumber()', () => { 
  it('should return true for happy number', () => {
    expect(isHappyNumber(19)).toBe(true);
  });
  it('should return false for unhappy number', () => {
    expect(isHappyNumber(2)).toBe(false);
  });
});