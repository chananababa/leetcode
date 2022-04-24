/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const MAX = 10**5;
  const mem = Array(amount+1).fill(-1);
  mem[0] = 0;
  const count = (a) => {
    if (a < 0) return MAX;
    if (mem[a] !== -1) return mem[a];
    return mem[a] = coins.reduce((result, c) => {
      return Math.min(count(a - c) + 1,  result);
    }, MAX);
  };
  return count(amount) === MAX ? -1 : count(amount);
};
