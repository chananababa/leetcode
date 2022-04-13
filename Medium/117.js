/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const iterate = (queue) => {
    const [_, nextQueue] = queue.reduce(([prevNode, nextQueue], currentNode) => {
      if (prevNode) prevNode.next = currentNode;
      if (currentNode.left) nextQueue.push(currentNode.left);
      if (currentNode.right) nextQueue.push(currentNode.right);
      return [currentNode, nextQueue];
    }, [null, []]);
    if (nextQueue.length > 0) iterate(nextQueue);
  }
  if (root !== null) iterate([root]);
  return root;
};