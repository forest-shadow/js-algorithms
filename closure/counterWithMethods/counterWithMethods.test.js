import { createCounterWithMehtods } from './counterWithMethods';

describe('createCounterWithMehtods', () => {
  it('should create counter with useful methods', () => {
    const counter = createCounterWithMehtods(5);
    expect(counter.increment()).toBe(6);
    expect(counter.increment()).toBe(7);
    expect(counter.decrement()).toBe(6);
    expect(counter.reset()).toBe(5);
  });
});