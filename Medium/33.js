/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const findPivot = () => {
        const iterate = (a, b) => {
            if (a === b) return a
            if (nums[a] < nums[b]) return a
            const m = parseInt((a + b) / 2)
            if (nums[a] > nums[m]) {
                return iterate(a, m)
            }
            return iterate(m+1, b)
        }
        return iterate(0, nums.length-1)
    }
    const binarySearch = () => {
        const pivot = findPivot()
        const moveIndex = (i) => ((i + pivot) % nums.length)
        const iterate = (a, b) => {
            if (a === b && nums[moveIndex(a)] === target) return moveIndex(a)
            if (a === b) return -1
            if (a > b) return -1
            const m = parseInt((a + b) / 2)
            if (nums[moveIndex(m)] < target) {
                return iterate(m+1, b)
            }
            return iterate(a, m)
        }
        return iterate(0, nums.length-1)
    }
    
    return binarySearch()
};