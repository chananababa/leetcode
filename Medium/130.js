/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  const coords = () => Array.from({ length: m }, (_, i) =>
    Array.from({ length: n }, (_, j) => [i, j])
  ).flat();
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    if (board[i][j] !== '-') return;
    board[i][j] = 'O';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  coords().forEach(([i, j]) => {
    if (board[i][j] === 'O') board[i][j] = '-';
  });

  Array.from({ length: m }, (_, i) => [i, 0]).forEach(([i, j]) => dfs(i, j));
  Array.from({ length: m }, (_, i) => [i, n - 1]).forEach(([i, j]) => dfs(i, j));
  Array.from({ length: n }, (_, j) => [0, j]).forEach(([i, j]) => dfs(i, j));
  Array.from({ length: n }, (_, j) => [m - 1, j]).forEach(([i, j]) => dfs(i, j));

  coords().forEach(([i, j]) => {
    if (board[i][j] === '-') board[i][j] = 'X';
  });

};