/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const sum = (arr) => arr.reduce((result, v) => result + v, 0);
  const backtrack = (nums, comb) => {
    if (sum(comb) === target) return [comb];
    if (sum(comb) > target) return [];
    return nums.reduce((result, v, i) => {
      return result.concat(backtrack(nums.slice(i), [...comb, v]));
    }, []);
  };
  return backtrack(candidates, []);
};