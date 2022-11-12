/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const mem = Array(target + 1).fill(-1);
  const compute = (j) => {
    if (mem[j] >= 0) return mem[j];
    if (j < 0) return 0;
    if (j === 0) return 1;
    let r = 0;
    for (let i = 0; i < nums.length; i++) {
      r += compute(j - nums[i]);
    }
    mem[j] = r;
    return mem[j];
  };
  return compute(target);
};
