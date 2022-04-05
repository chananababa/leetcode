/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let a = 0;
  let b = 0;
  let prod = nums[0];
  let result = 0;
  if (k === 0) return 0;
  while (b < nums.length) {
    while (a <= b && prod >= k) {
      prod /= nums[a];
      a++;
    }
    result += b - a + 1;
    b++;
    prod *= nums[b];
  }
  return result;
};
