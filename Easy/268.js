/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const visits = Array(nums.length).fill(false);
  nums.forEach(n => visits[n] = true);
  for (let i = 0; i < visits.length; i++) {
    if (!visits[i]) return i;
  }
  return nums.length;
};
