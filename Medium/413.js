/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
  const check = (candidate, num) => {
    if (candidate.length <= 1) return true;
    if (candidate[candidate.length-1] - candidate[candidate.length-2] === num - candidate[candidate.length-1]) return true;
    return false;
  };
  
  let result = 0;
  const count = (i) => {
    const arr = [];
    for (let j = i; j < nums.length; j++) {
      if (check(arr, nums[j])) {
        arr.push(nums[j]);
      } else {
        return;
      }
      if (arr.length >= 3) result++;
    }
  };
  for (let i = 0; i < nums.length; i++) {
    count(i);
  }
  return result;
};
