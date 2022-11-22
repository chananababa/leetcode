/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  const overlap = (interval1, interval2) => {
    if (interval1[0] >= interval2[1] || interval1[1] <= interval2[0]) return false;
    return true;
  }
  const tmp = [];
  intervals.forEach(interval => {
    if (tmp.length === 0) tmp.push(interval);
    else if (!overlap(tmp[tmp.length - 1], interval)) tmp.push(interval);
  });
  return intervals.length - tmp.length;
};
