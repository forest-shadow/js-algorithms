import createCounterFunction from "./createCounterFunction";

describe('createCounterFunction', () => {
  it('should create `couter` function', () => {
    const counter = createCounterFunction(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });
});