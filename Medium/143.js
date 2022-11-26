/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  // find the middle
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow.next;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  slow.next = null


  let p1 = head;
  let p2 = prev;
  while (p2 !== null) {
    const p1next = p1.next;
    const p2next = p2.next;
    p1.next = p2;
    p2.next = p1next;
    p1 = p1next;
    p2 = p2next;
  }
};
