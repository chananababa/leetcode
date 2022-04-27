/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  return nums.reduce(([sum, minsum, result], v) => {
    return [sum+v, Math.min(sum+v, minsum), Math.max(result, sum+v-minsum)];
  }, [nums[0], nums[0], nums[0]])[2];
};
