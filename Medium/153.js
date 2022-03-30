/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    function binarySearch() {
        function iterate(a, b) {
            if (a === b) return a
            const m = parseInt((a + b) / 2)
            if (nums[m] > nums[b]) {
                return iterate(m+1, b)
            }
            return iterate(a, m)
        }
        return iterate(0, nums.length - 1)
    }
    return nums[binarySearch()]
};