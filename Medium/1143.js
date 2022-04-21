/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  const [l1, l2] = [text1.length, text2.length];
  const mem = Array.from({ length: l1 }, () => Array(l2).fill(0));
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (text1[i] === text2[j]) {
        if (i === 0 && j === 0) mem[i][j] = 1;
        else if (i === 0) mem[i][j] = Math.max(1, mem[i][j-1]);
        else if (j === 0) mem[i][j] = Math.max(1, mem[i-1][j]);
        else mem[i][j] = Math.max(1, mem[i][j-1], mem[i-1][j], mem[i-1][j-1] + 1);
      } else {
        if (i === 0 && j === 0) mem[i][j] = 0;
        else if (i === 0) mem[i][j] = mem[i][j-1];
        else if (j === 0) mem[i][j] = mem[i-1][j];
        else mem[i][j] = Math.max(mem[i][j-1], mem[i-1][j]);
      }
    }
  }
  return mem[l1-1][l2-1];
};
