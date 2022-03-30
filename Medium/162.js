/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    function binarySearch() {
        function isPeak(i) {
            if (nums.length === 1) return true;
            if (i === 0) {
                return nums[i] > nums[i+1];
            }
            if (i === nums.length-1) {
                return nums[i] > nums[i-1];
            }
            return nums[i] > nums[i-1] && nums[i] > nums[i+1];
        }
        function iterate(a, b) {
            const m = (a + b) / 2;
            if (isPeak(a)) return a;
            if (isPeak(b)) return b;
            if (isPeak(m)) return m;
            if (nums[m] < nums[m+1]) return iterate(m+1, b);
            return iterate(a, m);
        }
        return iterate(0, nums.length - 1);
    }
    return binarySearch();
};