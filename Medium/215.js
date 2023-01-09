/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const buckets = Array(10 ** 4 * 2 + 1).fill(0);
  nums.forEach((v) => buckets[v + 10 ** 4]++);
  for (let i = 10 ** 4 * 2; i >= 0; i--) {
    while (k > 0 && buckets[i] > 0) {
      k--;
      buckets[i]--;
    }
    if (k === 0) return i - 10 ** 4;
  }
};
