/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedStrs = strs
    .map((str, index) => [str.split("").sort().join(""), index])
    .sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const result = [];

  for (let i = 0; i < sortedStrs.length; i++) {
    if (i === 0) {
      result.push([sortedStrs[i]]);
      continue;
    }
    if (result[result.length - 1][0][0] === sortedStrs[i][0]) {
      result[result.length - 1].push(sortedStrs[i]);
    } else {
      result.push([sortedStrs[i]]);
    }
  }

  return result.map((arr) => arr.map((item) => strs[item[1]]));
};
