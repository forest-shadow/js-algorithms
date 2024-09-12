import isSameArray from "./isSameArray";

describe('isSameArray', () => {
  it('return `true` if provided arraus are equal', () => {
    expect(isSameArray([0, 1, 2], [2, 1, 0])).toEqual(true);
    expect(isSameArray([0, 5, 1], [0, 1, 5])).toEqual(true);
  });
  it('return `false` if provided arrays are not equal', () => {
    expect(isSameArray([0, 1], [2, 1, 0])).toEqual(false);
    expect(isSameArray([0, 5, 1], [0, 1, 6])).toEqual(false);
  });
});
 