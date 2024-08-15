import twoStringsDifference from './twoStringsDifference';

describe('twoStringsDifference', () => {
  it('should return difference letter between two stings', () => {
    expect(twoStringsDifference('abcd', 'abcde')).toEqual('e');
    expect(twoStringsDifference('', 'y')).toEqual('y');
  });
})
