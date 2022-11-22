/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const left = intervals.filter(i => i[1] < newInterval[0]);
  const right = intervals.filter(i => i[0] > newInterval[1]);

  let s = newInterval[0];
  let e = newInterval[1];

  if (left.length + right.length !== intervals.length) {
    s = Math.min(intervals[left.length][0], s);
    e = Math.max(intervals[intervals.length - 1 - right.length][1], e);
  }

  return [...left, [s, e], ...right];
};
