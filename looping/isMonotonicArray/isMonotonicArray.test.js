import { isMonotonicArray } from "./isMonotonicArray";

describe('isMonotonicArray', () => { 
  it('should return `true` if provided `nums` array is monotonic', () => {
    expect(isMonotonicArray([1, 2, 2, 3])).toBe(true);
    expect(isMonotonicArray([6, 5, 4, 4, 3])).toBe(true); 
  });
  
  it('should return `false` if provided `nums` array is not monotonic', () => {
    expect(isMonotonicArray([1, 3, 2])).toBe(false);
  });
})