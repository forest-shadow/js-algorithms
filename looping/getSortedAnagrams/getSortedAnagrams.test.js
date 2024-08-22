import getSortedAnagrams from './getSortedAnagrams';

describe('getSortedAnagrams', () => {
  it('should return array of sorted by frequency anagrams', () => {
    expect(
      getSortedAnagrams(['гора', 'раки', 'киар', 'пора', 'ирак', 'игра'])
    ).toEqual(['аикр', 'агор', 'аопр', 'агир']);
  });
});
