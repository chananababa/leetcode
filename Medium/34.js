/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch = (a, b, check) => {
        if (a > b) return -1
        const m = parseInt((a + b) / 2)
        const c = check(m)
        if (c == 0) {
            return m
        }
        if (c > 0) {
            return binarySearch(m+1, b, check)
        }
        return binarySearch(a, m-1, check)
    }
    
    const checkFirst = (m) => {
        if ((nums[m] === target) && (m === 0 || nums[m-1] !== target)) {
            return 0
        }
        if (nums[m] === target) {
            return -1
        }
        if (nums[m] > target) {
            return -1
        }
        return 1
    }
    const checkLast = (m) => {
        if ((nums[m] === target) && (m === nums.length || nums[m+1] !== target)) {
            return 0
        }
        if (nums[m] === target) {
            return 1
        }
        if (nums[m] < target) {
            return 1
        }
        return -1
    }
    const first = binarySearch(0, nums.length-1, checkFirst)
    const last = binarySearch(0, nums.length-1, checkLast)
    return [first, last]
};