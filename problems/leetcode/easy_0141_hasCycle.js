// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

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
var hasCycle = function (head) {
  if (!head || !head.next) return false

  let fast = head
  let slow = head
  while (fast) {
    if (!fast.next) return false
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      return true
    }
  }

  return fast ? true : false
}

/** 更标准写法 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCyclePref = function (head) {
  if (!head || !head.next) {
    return false
  }
  let slow = head.next
  let fast = head.next.next
  while (slow != fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
