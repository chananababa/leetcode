/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const visited = Array(nums.length).fill(false);
  const jump = (i) => {
    if (i >= nums.length) return false;
    if (i === nums.length - 1) return true;
    if (nums[i] === 0) return false;
    if (visited[i]) return false;
    visited[i] = true;
    for (let j = 1; j <= nums[i]; j++) {
      if (jump(i + j)) return true;
    }
    return false;
  };
  return jump(0);
};
