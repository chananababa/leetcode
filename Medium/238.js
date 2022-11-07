/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const productOfAll = nums.reduce((result, num) => result * num, 1);
  const makeAccumulatedProducts = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.length === 0) result.push(arr[i]);
      else result.push(arr[i] * result[result.length - 1]);
    }
    return result;
  }
  const productPrefixArray = makeAccumulatedProducts(nums);
  const productSuffixArray = makeAccumulatedProducts(nums.reverse()).reverse();

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const productPrefix = i === 0 ? 1 : productPrefixArray[i - 1];
    const productSuffix = i === nums.length - 1 ? 1 : productSuffixArray[i + 1];
    result.push(productPrefix * productSuffix);
  }
  return result;
};
