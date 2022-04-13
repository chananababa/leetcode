/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const count = (v) => nums.filter(_v => v === _v).length;
  const numSet = Array.from(new Set(nums)).map(v => [v, count(v)]);
  const numSubset = (v, c) => Array.from({ length: c }, (_, i) => Array(i + 1).fill(v)).filter(_r => _r.length);
  return numSet.reduce(
    (result, [v, c]) => result.concat(
      result.map(r => numSubset(v, c).map((_r) => r.concat(_r))).flat(1)
    ), [[]]);
};