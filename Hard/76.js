/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const sCounts = {};
  const tCounts = {};

  for (let i = 0; i < t.length; i++) {
    tCounts[t[i]] = tCounts[t[i]] === undefined ? 1 : tCounts[t[i]] + 1;
  }

  const required = Object.keys(tCounts).length;
  let satisfied = 0;

  let left = 0;
  let right = 0;
  let result = [0, -1];

  while (right < s.length) {
    sCounts[s[right]] =
      sCounts[s[right]] === undefined ? 1 : sCounts[s[right]] + 1;

    if (sCounts[s[right]] === tCounts[s[right]]) satisfied += 1;
    if (required === satisfied) {
      while (true) {
        sCounts[s[left]] -= 1;
        if (sCounts[s[left]] < tCounts[s[left]]) {
          sCounts[s[left]] += 1;
          break;
        }
        left += 1;
      }
      if (result[1] === -1 || result[1] - result[0] + 1 > right - left + 1) {
        result[0] = left;
        result[1] = right + 1;
      }
    }

    right += 1;
  }

  if (result[1] === -1) {
    return "";
  }
  return s.slice(result[0], result[1]);
};
