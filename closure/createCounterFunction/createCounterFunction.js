/**
 * createCounterFunction - should return counter function
 * @param {number} init
 * @return {Function} counter
 */
const createCounterFunction = init => {
  let counter = init;
  return () => counter++;
}

export default createCounterFunction;
