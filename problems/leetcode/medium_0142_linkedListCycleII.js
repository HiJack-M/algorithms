// 142. Linked List Cycle II

// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null

  // why should they move forward once?
  let fast = head.next.next
  let slow = head.next

  while (fast && fast.next) {
    if (fast == slow) break
    fast = fast.next.next
    slow = slow.next
  }

  if (!fast || !fast.next) {
    // no cycle
    return null
  }

  // has cycle
  fast = head // reset fast
  while (fast != slow) {
    fast = fast.next
    slow = slow.next
  }

  return fast
}
