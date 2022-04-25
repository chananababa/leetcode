/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.org = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return [...this.org];
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const result = [...this.org];
  for (let i = this.org.length - 1; i >= 0; i--) {
    const rp = Math.floor(Math.random()*(i+1));
    const tmp = result[rp];
    result[rp] = result[i];
    result[i] = tmp;
  }
  return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
