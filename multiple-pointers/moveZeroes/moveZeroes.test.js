import moveZeroes from "./moveZeroes";

describe('moveZeroes', () => {
  it('should move all zeroes to the end of the provided array', () => {
    expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    expect(moveZeroes([0])).toEqual([0]);
  });
}); 