/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  const prev = {};
  let result = 0;
  let m = 0;
  for (let i = 0; i < s.length; i++) {
    m++;
    if (prev[s[i]] !== undefined) {
      m = Math.min(i - prev[s[i]], m);
    }
    prev[s[i]] = i;
    result = Math.max(m, result);
  }
  return result;
};
