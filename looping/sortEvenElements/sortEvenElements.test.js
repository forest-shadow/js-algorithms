import sortEvenElements from "./sortEvenElements";

describe('sortEvenElements', () => {
  it('should sort all even elements in the provided array', () => {
    expect(sortEvenElements([1, 8, 3, 9, 12, 13, 2, 5, 6]))
      .toEqual([1, 2, 3, 9, 6, 13, 8, 5, 12]);
  });
});