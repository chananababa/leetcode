/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const mem = Array.from({ length: s.length }, () =>
    Array(s.length).fill(null)
  );
  const run = (i, j) => {
    if (mem[i][j] !== null) return mem[i][j];
    if (i === j) return true;
    if (i + 1 === j) {
      mem[i][j] = s[i] === s[j];
      return mem[i][j];
    }
    mem[i][j] = s[i] === s[j] && run(i + 1, j - 1);
    return mem[i][j];
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (run(i, j)) {
        result += 1;
      }
    }
  }
  return result;
};
