import { isMatchingParenthesisString } from './matchingParenthesisString';

describe('matchingParenthesisString', () => {
  it('should return true if provided parenthesis pattern is valid', () => {
    isMatchingParenthesisString('()')     // true
    isMatchingParenthesisString('()[]{}') // true
  });

  it('should return false if provided parenthesis pattern is invalid', () => {
    isMatchingParenthesisString('([)]')   // false
    isMatchingParenthesisString('(]')      // false
  });
})