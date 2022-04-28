/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = {};
  nums.forEach((v, i) => {
    hash[v] = i;
  });
  return nums.reduce((result, v, i) => {
    if (result) return result;
    if (hash[target-v] && hash[target-v] !== i) {
      return [i, hash[target-v]];
    }
    return result;
  }, null);
};
