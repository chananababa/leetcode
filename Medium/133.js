/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;
  const result = new Node(node.val, []);
  const nodes = Array(101).fill(null);

  const dfs = (targetNode, sourceNode) => {
    nodes[sourceNode.val] = targetNode;
    for (const neighbor of sourceNode.neighbors) {
      if (nodes[neighbor.val]) {
        targetNode.neighbors.push(nodes[neighbor.val]);
      } else {
        const newTargetNode = new Node(neighbor.val, []);
        targetNode.neighbors.push(newTargetNode);
        dfs(newTargetNode, neighbor);
      }
    }
  };
  dfs(result, node);
  return result;
};
