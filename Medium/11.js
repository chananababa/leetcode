/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let a = 0;
  let b = height.length - 1;
  let result = computeResult(a, b);
  while (a < b) {
    if (height[a] < height[b]) {
      a = a + 1;
    } else {
      b = b - 1;
    }
    result = Math.max(result, computeResult(a, b));
  }
  return result;
  function computeResult(a, b) {
    return (b - a) * Math.min(height[a], height[b])
  }
};