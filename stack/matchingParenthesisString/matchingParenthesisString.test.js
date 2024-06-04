import { isMatchingParenthesisString } from './matchingParenthesisString';

describe('matchingParenthesisString', () => {
  it('should return true if provided parenthesis pattern is valid', () => {
    isMatchingParenthesisString('()');
    isMatchingParenthesisString('()[]{}');
  });

  it('should return false if provided parenthesis pattern is invalid', () => {
    isMatchingParenthesisString('([)]');
    isMatchingParenthesisString('(]');
  });
})