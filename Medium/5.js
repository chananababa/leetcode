/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const mem = Array.from({ length: s.length }, () => Array(s.length).fill(-1));
  const run = (a, b) => {
    if (a > b) return 1;
    if (mem[a][b] >= 0) return mem[a][b];
    if (a === b) mem[a][b] = 1;
    if (s[a] === s[b]) mem[a][b] = run(a+1, b-1);
    else mem[a][b] = 0;
    return mem[a][b];
  };
  const result = [0, 0];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (run(i, j) && result[1] - result[0] < j - i) {
        result[0] = i;
        result[1] = j;
      }
    }
  }
  return s.slice(result[0], result[1]+1);
};
