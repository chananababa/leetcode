/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const M = board.length;
  const N = board[0].length;
  const search = (i, j) => {
    const visited = Array.from({ length: M }, () => Array(N).fill(false));
    const recurse = (i, j, l) => {
      if (i < 0 || i >= M || j < 0 || j >= N) return false;
      if (visited[i][j]) return false;
      if (board[i][j] !== word[word.length - l]) return false;
      if (l === 1) return true;
      visited[i][j] = true;
      const result = recurse(i-1, j, l-1) || recurse(i+1, j, l-1) || recurse(i, j-1, l-1) || recurse(i, j+1, l-1);
      visited[i][j] = false;
      return result;
    };
    return recurse(i, j, word.length);
  }
  const coords = Array.from({ length: M }, (_, i) => Array.from({ length: N }, (_, j) => [i, j]));
  let result;
  coords.forEach(row => row.forEach(([i, j]) => {
    result = result || search(i, j)
  }));
  return result;
};
