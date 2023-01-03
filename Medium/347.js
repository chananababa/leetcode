/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
  const mem = Array(10 ** 4 * 2 + 1).fill(0);
  nums.forEach(v => mem[v + 10 ** 4] += 1);
  const arr = [];
  mem.forEach((v, index) => {
    if (v > 0) arr.push([v, index]);
  });
  arr.sort((a, b) => b[0] - a[0]);
  const result = arr.slice(0, k).map(v => v[1] - 10 ** 4);
  return result;
};
