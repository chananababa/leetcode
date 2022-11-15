/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  const m = Array.from({ length: heights.length }, () => Array(heights[0].length).fill(0));
  // 1 (001): visited
  // 3 (011): pacific
  // 5 (101): atlantic
  // 7 (111): both
  const neighborPacific = (v) => (v & 2) > 0;
  const neighborAtlantic = (v) => (v & 4) > 0;

  const dfs = (m, i, j, neighbor) => {
    if (i < 0 || j < 0 || i >= heights.length || j >= heights[0].length) return
    if (neighbor === 'pacific' && (m[i][j] & 2)) return
    if (neighbor === 'pacific') m[i][j] += 2;
    if (neighbor === 'atlantic' && m[i][j] & 4) return;
    if (neighbor === 'atlantic') m[i][j] += 4;

    if (i > 0 && heights[i - 1][j] >= heights[i][j]) dfs(m, i - 1, j, neighbor)
    if (j > 0 && heights[i][j - 1] >= heights[i][j]) dfs(m, i, j - 1, neighbor)
    if (i < heights.length - 1 && heights[i + 1][j] >= heights[i][j]) dfs(m, i + 1, j, neighbor)
    if (j < heights[0].length - 1 && heights[i][j + 1] >= heights[i][j]) dfs(m, i, j + 1, neighbor)
  };
  for (let i = 0; i < heights.length; i++) {
    dfs(m, i, 0, 'pacific');
    dfs(m, i, heights[0].length - 1, 'atlantic');
  }

  for (let i = 0; i < heights[0].length; i++) {
    dfs(m, heights.length - 1, i, 'atlantic');
    dfs(m, 0, i, 'pacific');
  }

  const result = [];
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if ((m[i][j] & 2) && (m[i][j] & 4)) result.push([i, j])
    }
  }

  return result;
};
