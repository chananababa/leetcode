/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const newHead = findNext(head);
  let currentNode = newHead;
  while (currentNode) {
    currentNode.next = findNext(currentNode.next);
    currentNode = currentNode.next;
  }
  return newHead;

  function findNext(node) {
    if (node === null || node.next === null || node.val !== node.next.val) {
      return node;
    }
    const val = node.val;
    let currentNode = node;
    while (currentNode && currentNode.val === val) {
      currentNode = currentNode.next;
    }
    return findNext(currentNode);
  }
};