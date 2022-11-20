/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const next = (coord, n) => {
    return [coord[1], n - 1 - coord[0]]
  };
  const rotate = (coord) => {
    let tmp, tmp2;
    tmp = matrix[coord[0]][coord[1]];

    coord = next(coord, n);
    tmp2 = matrix[coord[0]][coord[1]];
    matrix[coord[0]][coord[1]] = tmp;
    tmp = tmp2;

    coord = next(coord, n);
    tmp2 = matrix[coord[0]][coord[1]];
    matrix[coord[0]][coord[1]] = tmp;
    tmp = tmp2;

    coord = next(coord, n);
    tmp2 = matrix[coord[0]][coord[1]];
    matrix[coord[0]][coord[1]] = tmp;
    tmp = tmp2;

    coord = next(coord, n);
    matrix[coord[0]][coord[1]] = tmp;
  };
  const rotateLine = (i) => {
    for (let j = i; j < n - i - 1; j++) {
      rotate([i, j]);
    }
  };

  const n = matrix.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    rotateLine(i);
  }

};
