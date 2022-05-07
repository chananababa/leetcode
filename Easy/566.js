/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  if (r * c !== mat.length * mat[0].length) return mat;
  const result = Array.from({ length: r }, (_, i) => Array(c).fill(0));
  let k = 0;
  const arr = mat.flat();
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      result[i][j] = arr[k++];
    }
  }
  return result;
};
