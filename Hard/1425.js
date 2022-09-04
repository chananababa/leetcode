/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function(nums, k) {
  const q = [];
  const dp = [];
  let r = nums[0];
  for (let i = 0; i < nums.length; i++) {
    dp.push((q.length > 0 ? q[0] : 0) + nums[i]);
    if (dp[i] > 0) {
      while (q.length > 0 && q[q.length-1] < dp[i]) {
        q.pop();
      }
      q.push(dp[i]);
      r = Math.max(r, q[0]);
    }
    if (i >= k && q[0] === dp[i-k]) {
      q.shift();
    }
  }
  return r;
};
