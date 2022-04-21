/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const [l1, l2] = [word1.length, word2.length];
  const mem = Array.from({ length: l1 }, () => Array(l2).fill(0));
  const isEqual = (i, j) => word1[i] === word2[j] ? 1 : 0;
  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (i === 0 && j === 0) mem[i][j] = isEqual(i, j);
      else if (i === 0) mem[i][j] = Math.max(mem[i][j-1], isEqual(i, j));
      else if (j === 0) mem[i][j] = Math.max(mem[i-1][j], isEqual(i, j));
      else mem[i][j] = Math.max(mem[i-1][j-1] + isEqual(i, j), mem[i-1][j], mem[i][j-1]);
    }
  }
  return l1 + l2 - mem[l1-1][l2-1]*2;
};
