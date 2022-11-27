/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const TMP = null;

  const fill = (i, j) => {
    matrix[i][j] = TMP;
    for (let _i = 0; _i < m; _i++) {
      if (matrix[_i][j] === 0) fill(_i, j);
      matrix[_i][j] = TMP;
    }
    for (let _j = 0; _j < n; _j++) {
      if (matrix[i][_j] === 0) fill(i, _j);
      matrix[i][_j] = TMP;
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) fill(i, j);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === TMP) matrix[i][j] = 0;
    }
  }
};
