/**
 * createCounterFunction - should return counter function
 * @param {number} init
 * @return {Function} counter
 */
export const createCounterFunction = (init) => {
  let counter = init;
  return function() {
      return counter++;
  };
};
