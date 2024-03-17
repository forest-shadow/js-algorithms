import { mergeStringsAlternately } from './mergeStringsAlternately';

describe('mergeStringsAlternately', () => {
  it('should return the resulting string, which consists of the two provided strings merged alternately', () => {
    expect(mergeStringsAlternately('abc', 'pqr')).toEqual('apbqcr');
    expect(mergeStringsAlternately('ab', 'pqrs')).toEqual('apbqrs');
    expect(mergeStringsAlternately('abcd', 'pq')).toEqual('apbqcd');
  })
})
