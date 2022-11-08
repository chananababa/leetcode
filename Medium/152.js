/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maximumProduct = 1;
  let minimumProduct = 1;

  let result = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    const _maximumProduct = Math.max(minimumProduct * nums[i], maximumProduct * nums[i], nums[i]);
    const _minimumProduct = Math.min(minimumProduct * nums[i], maximumProduct * nums[i], nums[i]);
    maximumProduct = _maximumProduct
    minimumProduct = _minimumProduct
    result = Math.max(maximumProduct, result);
  }
  return result;
};

