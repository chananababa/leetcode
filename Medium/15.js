/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortedNums = nums.sort((a, b) => (a - b));
  const result = [];
  
  let i = 0;
  while (i < sortedNums.length) {
    let j = i + 1;
    let k = sortedNums.length - 1;
    while (j < sortedNums.length && k > i && j < k) {
      if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j = increase(j);
        k = decrease(k);
      } else if (sortedNums[i] + sortedNums[j] + sortedNums[k] < 0) {
        j = increase(j);
      } else {
        k = decrease(k);
      }
    }
    i = increase(i);
  }
  return result;
  
  function increase(i) {
    const value = nums[i];
    let result = i;
    while (result < nums.length && value === nums[result]) {
      result++;
    }
    return result;
  }
  function decrease(i) {
    const value = nums[i];
    let result = i;
    while (result >= 0 && value === nums[result]) {
      result--;
    }
    return result;
  }
};