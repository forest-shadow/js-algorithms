// `fib`
// Write function returning Fibonacci sequence n-th number
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, ...
const fib = n => n <= 1 ? n : fib(n - 2) + fib(n - 1);
export default fib;
