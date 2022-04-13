/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  return nums.reduce((result, v) => result.map(r => [r, [...r, v]]).flat(1), [[]]);
};