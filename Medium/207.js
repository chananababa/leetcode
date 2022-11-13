/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const g = Array.from({ length: numCourses }, () => []);
  for (const prerequisite of prerequisites) {
    g[prerequisite[0]].push(prerequisite[1]);
  }
  const visited = Array(numCourses).fill(false);
  const mem = Array(numCourses).fill(null);
  const dfs = (i) => {
    if (mem[i] !== null) return mem[i];
    if (visited[i]) return true;
    visited[i] = true;
    let result = false;
    for (const n of g[i]) {
      result = result || dfs(n);
    }
    visited[i] = false;
    mem[i] = result;
    return result;
  };
  let result = false;
  for (let i = 0; i < numCourses; i++){
    result = result || dfs(i);
  }
  return !result;
};
