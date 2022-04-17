/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    const MAX = nums.length + 1;
    const mem = Array(nums.length).fill(MAX);
    
    const run = (i) => {
      if (i >= nums.length) return MAX;
      if (i === nums.length - 1) return 0;
      if (mem[i] < MAX) return mem[i];
      return mem[i] = Array.from({ length: nums[i] }, (_, j) => j + 1).reduce((result, j) => {
        return Math.min(result, 1 + run(i+j));
      }, mem[i]);
    };
    return run(0);
  };