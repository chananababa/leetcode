/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minVal = prices[0];
  return prices.reduce((result, val) => {
    minVal = Math.min(minVal, val);
    return Math.max(result, val - minVal);
  }, 0);
};
