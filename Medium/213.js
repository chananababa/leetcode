/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const search = (startIndex) => {
    const arr = startIndex === 0 ? [...nums] : nums.slice(startIndex).concat(nums.slice(0, startIndex));
    const mem = Array(nums.length).fill(0);
    mem[0] = arr[0];
    mem[1] = arr[0];
    for (let i = 2; i < arr.length-1; i++) {
      mem[i] = Math.max(mem[i-1], arr[i] + mem[i-2]);
    }
    return mem[arr.length-2];
  };
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  return Math.max(search(0), search(1), search(2));
};
