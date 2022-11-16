/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;
  nums = Array.from(new Set(nums));
  nums.sort((a, b) => a - b);
  let result = 1;
  let c = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) c++;
    else c = 1;
    result = Math.max(result, c);
  }
  return result;
};
