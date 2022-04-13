/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => false)
  );
  const search = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
    if (visited[i][j]) return;
    if (grid[i][j] === '1') {
      visited[i][j] = true;
      search(i - 1, j);
      search(i + 1, j);
      search(i, j - 1);
      search(i, j + 1);
    }
  };
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        search(i, j);
        result++;
      }
    }
  }
  return result;
};