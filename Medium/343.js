/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  const mem = Array(n+1).fill(-1);
  mem[0] = 0;
  mem[1] = 1;
  const ib = (a) => {
    if (mem[a] !== -1) return mem[a];
    return mem[a] = Array.from({ length: a-1 }, (_, i) => i+1)
      .reduce((result, v) => {
        return Math.max(result, v * Math.max(a-v, ib(a-v)));
      }, 0);
  };
  return ib(n);
};
