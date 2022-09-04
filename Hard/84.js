/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const dp1 = [];
  const dp2 = [];
  const q1 = [];
  const q2 = [];
  for (let i = 0; i < heights.length; i++) {
    while (q1.length > 0 && heights[q1[q1.length-1]] >= heights[i]) {
      q1.pop();
    }
    if (q1.length > 0) {
      dp1.push(heights[i] * (i - q1[q1.length-1]));
    } else {
      dp1.push(heights[i] * (i + 1));
    }
    q1.push(i);
    
  }
  for (let i = heights.length - 1; i >= 0; i--) {
    while (q2.length > 0 && heights[q2[q2.length-1]] >= heights[i]) {
      q2.pop();
    }
    if (q2.length > 0) {
      dp2.push(heights[i] * (q2[q2.length-1] - i));
    } else {
      dp2.push(heights[i] * (heights.length - i));
    }
    q2.push(i);
  }
  dp2.reverse();
  let r = 0;
  for (let i = 0; i < heights.length; i++) {
    r = Math.max(r, dp1[i] + dp2[i] - heights[i]);
  }
  return r;
};
