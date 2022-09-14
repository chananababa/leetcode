/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const stack = [];
  const r = nums.map(() => -1);
  const conv = (i) => i % nums.length;
  for (let i = 0; i < nums.length*2; i++) {
    while (stack.length > 0 && nums[stack[stack.length-1]] < nums[conv(i)]) {
      r[stack.pop()] = nums[conv(i)];
    }
    stack.push(conv(i));
  }
  return r;
};
