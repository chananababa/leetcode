/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const check = (node1, node2) => {
    if (!node1 && node2) return false;
    if (node1 && !node2) return false;
    if (!node1 && !node2) return true;
    if (node1.val !== node2.val) return false;
    return check(node1.left, node2.left) && check(node1.right, node2.right);
  }
  const search = (node) => {
    if (node === null) return false;
    if (check(node, subRoot)) return true;
    return search(node.left) || search(node.right);
  }
  return search(root);
};