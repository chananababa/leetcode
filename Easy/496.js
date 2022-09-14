/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [];
  const ri = Array.from({ length: 10001 }).fill(-1);
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      ri[stack.pop()] = nums2[i];
    }
    stack.push(nums2[i]);
  }
  return nums1.map(v => ri[v]);
};
