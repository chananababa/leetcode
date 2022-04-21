/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const mem = Array(nums.length).fill(0);
  const find = (i) => {
    let result = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) continue;
      result = Math.max(result, mem[j]);
    }
    return mem[i] = result + 1;
  };
  return Array.from({ length: nums.length }, (_, i) => find(i)).reduce((result, v) => Math.max(result, v));
};
