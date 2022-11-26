/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const INVALID = 10 ** 5 + 1;
  let node = head;
  while (node !== null) {
    if (node.val === INVALID) return true;
    node.val = INVALID
    node = node.next;
  }
  return false;
};
