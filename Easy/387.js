/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const m = {};
  s.split('').forEach((c, i) => {
    if (m[c] !== undefined) m[c] = -1;
    else m[c] = i;
  });
  let result = s.length;
  for (const c in m) {
    if (m[c] > -1) {
      result = Math.min(result, m[c]);
    }
  }
  if (result === s.length) return -1;
  return result;
};
