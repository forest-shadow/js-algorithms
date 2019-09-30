import naiveStringSearch from './naiveStringSearch'

const string = 'abcabcab'

describe('naiveStringSearch', () => {
  it('should return count of repeating substrings in string', () => {
    expect(naiveStringSearch(string, 'abc')).toEqual(2)
    expect(naiveStringSearch(string, 'de')).toEqual(0)
  });
});