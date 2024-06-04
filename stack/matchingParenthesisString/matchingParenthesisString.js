/**
 * isMatchingParenthesisString - return true if the parenthesisString consists of matching parenthesis
 * @param {string} parenthesisString - string containing only parenthesis of different types
 * @returns {boolean} - true if the parenthesisString consists of matching parenthesis
 */
export const isMatchingParenthesisString = (parenthesisString) =>  {
  const parenthesisStack = [];
  const parenthesisCollection = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for(let char of parenthesisString) {
    if(parenthesisCollection[char]) {
      parenthesisStack.push(char);
    } else if (
      parenthesisCollection[parenthesisStack.pop()] !== char
    ) {
      return false;
    }
  }

  return parenthesisStack.length === 0;
}