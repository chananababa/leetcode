/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const findParent = (heap, i) => {
  if (i === 0) return null;
  return Math.floor((i - 1) / 2);
};

const heapPush = (heap, el) => {
  heap.push(el);
  let ei = heap.length - 1;
  let pi = findParent(heap, ei);
  while (pi !== null && heap[pi] > heap[ei]) {
    const tmp = heap[pi];
    heap[pi] = heap[ei];
    heap[ei] = tmp;
    ei = pi;
    pi = findParent(heap, ei);
  }
};

const heapPop = (heap) => {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  const result = heap[0];
  heap[0] = heap.pop();
  let i = 0;
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  while (true) {
    if (left >= heap.length) {
      break;
    }
    if (right >= heap.length) {
      if (heap[i] > heap[left]) {
        const tmp = heap[i];
        heap[i] = heap[left];
        heap[left] = tmp;
      }
      break;
    }
    if (heap[left] >= heap[i] && heap[right] >= heap[i]) break;
    if (heap[left] < heap[right]) {
      const tmp = heap[i];
      heap[i] = heap[left];
      heap[left] = tmp;
      i = left;
    } else {
      const tmp = heap[i];
      heap[i] = heap[right];
      heap[right] = tmp;
      i = right;
    }
    left = i * 2 + 1;
    right = i * 2 + 2;
  }
  return result;
}

var mergeKLists = function(lists) {
  const heap = [];
  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node !== null) {
      heapPush(heap, node.val);
      node = node.next;
    }
  }

  let result = null;
  let currentNode = null;
  while (heap.length) {
    const node = new ListNode(heapPop(heap), null);
    if (currentNode === null) {
      currentNode = node;
      result = node;
    } else {
      currentNode.next = node;
      currentNode = node;
    }
  }
  return result;
};
