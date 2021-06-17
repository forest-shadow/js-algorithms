import fib from '../fib';

describe('fib', () => {
  it(`should return Fibonacci sequence's n-th number`, () => {
    expect(fib(7)).toEqual(13);
    expect(fib(9)).toEqual(34);
  });
});
