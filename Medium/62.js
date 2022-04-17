/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const mem = Array.from({ length: m }, () => Array(n).fill(0));
    const move = (i, j) => {
      if (i === 0 || j === 0) {
        return mem[i][j] = 1;
      }
      return mem[i][j] = mem[i-1][j] + mem[i][j-1];
    };
    Array.from({ length: m }, (_, i) => i).forEach(i => {
        Array.from({ length: n }, (_, j) => j).forEach(j => {
          move(i, j);
        });
      }
    );
    return mem[m-1][n-1];
  };