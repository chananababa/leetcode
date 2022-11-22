/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let s = -1;
  let e = -1;
  for (let i = 0; i < intervals.length; i++) {
    if (e < intervals[i][0]) {
      if (s !== -1) {
        result.push([s, e]);
      }
      s = intervals[i][0];
      e = intervals[i][1];
    } else if (e >= intervals[i][0]) {
      e = Math.max(e, intervals[i][1]);
    }
  }
  result.push([s, e]);
  return result;
};
