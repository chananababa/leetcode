/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = Array.from({ length: n }, () => false);
  const search = (i) => Array.from({ length: n }, (_, j) => j).reduce((result, j) => {
    if (!isConnected[i][j]) return result || false;
    if (visited[j]) return result || false;
    visited[j] = true;
    search(j);
    return true;
  }, false);
  return Array.from({ length: n }, (_, i) => i).reduce((result, i) => {
    return result + search(i);
  }, 0);
};