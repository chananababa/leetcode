/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const [l1, l2] = [word1.length, word2.length];
  const mem = Array.from({ length: l1 }, () => Array(l2).fill(0));
  const cost = (i, j) => word1[i] === word2[j] ? 2 : 1;
  
  const compute = (i, j) => {
    if (i < 0 || j < 0) return 0;
    if (mem[i][j] > 0) return mem[i][j];
    if (i === 0 && j === 0) mem[i][j] = cost(i, j);
    else if (i === 0) mem[i][j] = Math.max(cost(i, j), compute(i, j-1));
    else if (j === 0) mem[i][j] = Math.max(cost(i, j), compute(i-1, j));
    else mem[i][j] = Math.max(cost(i, j) + compute(i-1, j-1), compute(i, j-1), compute(i-1, j));
    return mem[i][j];
  }
  return l1 + l2 - compute(l1-1, l2-1);
};
