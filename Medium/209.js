/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  const MAX = 10**9+1
  let result = MAX;
  let sum = 0;
  let right = 0;
  function findNextRight(left) {
    if (left === 0) sum = nums[0];
    else sum -= nums[left-1];
    while (sum < target && right < nums.length - 1) {      
      right++;
      sum += nums[right];
    }
    if (sum >= target) result = Math.min(result, right - left + 1);
  }
  nums.forEach((val, left) => findNextRight(left));
  return result === MAX ? 0 : result;
};