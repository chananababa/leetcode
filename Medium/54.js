/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 0: right, 1: down, 2: left, 3: up
  const directions = {
    0: [0, 1],
    1: [1, 0],
    2: [0, -1],
    3: [-1, 0]
  }
  const result = [];
  const m = matrix.length;
  const n = matrix[0].length;

  const isInvalid = (i, j) => {
    return i < 0 || j < 0 || i === m || j === n || matrix[i][j] === null;
  }

  const next = (i, j, di) => {
    let direction = directions[di]
    let [_i, _j] = [i + direction[0], j + direction[1]];
    let _di = di;
    if (isInvalid(_i, _j)) {
      _di = (_di + 1) % 4;
      direction = directions[_di]
      _i = i + direction[0];
      _j = j + direction[1];
    }
    return [_i, _j, _di]
  }

  const go = (i, j, di) => {
    result.push(matrix[i][j])
    matrix[i][j] = null;

    const [_i, _j, _di] = next(i, j, di);
    if (isInvalid(_i, _j)) return;

    go(_i, _j, _di)
  }
  go(0, 0, 0);

  return result;
};
