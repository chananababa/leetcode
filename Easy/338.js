/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const count = (v) => {
    let result = 0;
    while (v > 0) {
      result += v % 2;
      v = Math.floor(v / 2);
    }
    return result;
  };
  return Array.from({ length: n + 1 }, (_, index) => count(index));
};
