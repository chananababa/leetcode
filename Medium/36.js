/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const checkRow = (i) => {
    const row = board[i].filter(v => v !== '.')
    return row.length === Array.from(new Set(row)).length;
  };
  const checkColumn = (j) => {
    const column = Array.from({ length: 9 }, (_, i) => board[i][j]).filter(v => v !== '.');
    return column.length === Array.from(new Set(column)).length;
  };
  const checkBlock = (i, j) => {
    const [a, b] = [Math.floor(i / 3), Math.floor(j / 3)];
    const block = [];
    for (let _i = a*3; _i < (a+1)*3; _i++) {
      for (let _j = b*3; _j < (b+1)*3; _j++) {
        if (board[_i][_j] !== '.')
          block.push(board[_i][_j]);
      }
    }
    return block.length === Array.from(new Set(block)).length;
  };
  for (let i = 0; i < 9; i++) {
    if (!checkRow(i)) return false;
  }
  for (let j = 0; j < 9; j++) {
    if (!checkColumn(j)) return false;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!checkBlock(i*3, j*3)) return false;
    }
  }
  return true;
};
