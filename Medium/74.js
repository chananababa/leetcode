/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const checkColumn = (m, nums) => {
        if (nums[m] <= target && (m+1 === nums.length || nums[m+1] > target)) return 0
        if (nums[m] < target) return 1
        return -1
    }
    const checkRow = (m, nums) => {
        if (nums[m] === target) return 0
        if (nums[m] < target) return 1
        if (nums[m] > target) return -1
    }
    const binarySearch = (nums, check) => {
        const iterate = (a, b) => {
            if (a === b && check(a, nums) === 0) return a
            if (a === b) return -1
            const m = parseInt((a + b) / 2)
            if (check(m, nums) === 0) return m
            if (check(m, nums) < 0) return iterate(a, m)
            return iterate(m+1, b)
        }
        return iterate(0, nums.length-1)
    }
    const rowIndex = binarySearch(matrix.map(row => row[0]), checkColumn)
    if (rowIndex === -1) return false
    const columnIndex = binarySearch(matrix[rowIndex], checkRow)
    if (columnIndex === -1) return false
    return true
};