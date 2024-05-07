import { canJump } from "./canJump";

describe('canJump', () => {
  it('should return false if null or empty array provided', () => {
    expect(canJump(null)).toBeFalsy();
    expect(canJump([])).toBeFalsy();
  });
  it('should return true if last array element is reachable', () => {
    expect(canJump([2, 0, 0])).toBeTruthy();
    expect(canJump([2, 3, 1, 1, 4])).toBeTruthy();
    expect(canJump([2, 3, 0, 0, 4])).toBeTruthy();
  });
  it('should return false if last array element is unreachable', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBeFalsy();
  });
});
