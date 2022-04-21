/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  const mem1 = Array(nums.length).fill(0);
  const mem2 = Array(nums.length).fill(0);
  const find = (i) => {
    let result = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) continue;
      result = Math.max(result, mem1[j]);
    }
    mem1[i] = result + 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] >= nums[i]) continue;
      if (mem1[i] === mem1[j] + 1) {
        mem2[i] += mem2[j];
      }
    }
    mem2[i] = mem2[i] === 0 ? 1 : mem2[i];
  };
  for (let i = 0; i < nums.length; i++) {
    find(i);
  }
  const longest = Math.max(...mem1);
  return mem1.reduce((result, v, i) => {
    if (v !== longest) return result;
    return result + mem2[i];
  }, 0);
};
