/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const N = grid.length;
  const MAX = N * N + 1;
  const dp = Array.from({ length: N }, () => Array(N).fill(MAX));
  const check = (coord, queue) => {
    const _check = (x, y, val, queue) => {
      if (x < 0 || x >= N || y < 0 || y >= N) return;
      if (grid[x][y] === 1) return;
      if (dp[x][y] <= val) return;
      dp[x][y] = val;
      queue.push({ x, y, val });
    }
    const { x, y, val } = coord;
    _check(x - 1, y - 1, val + 1, queue);
    _check(x - 1, y, val + 1, queue);
    _check(x - 1, y + 1, val + 1, queue);
    _check(x, y - 1, val + 1, queue);
    _check(x, y + 1, val + 1, queue);
    _check(x + 1, y - 1, val + 1, queue);
    _check(x + 1, y, val + 1, queue);
    _check(x + 1, y + 1, val + 1, queue);
    return queue;
  };
  const bfs = (queue) => {
    if (queue.length === 0) return;
    bfs(queue.reduce((nextQueue, coord) => {
      return check(coord, nextQueue);
    }, []));
  };
  if (grid[0][0] === 1) return -1;
  dp[0][0] = 1;
  bfs([{ x: 0, y: 0, val: 1 }]);
  return dp[N - 1][N - 1] === MAX ? -1 : dp[N - 1][N - 1];
};