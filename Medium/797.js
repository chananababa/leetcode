/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const search = (i, path) => {
    if (i === n - 1) return [path];
    return graph[i].map(j => search(j, [...path, j])).flat(1).filter(result => result.length > 0);
  };
  return search(0, [0]);
};