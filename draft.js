// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

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
var reverseList = function (head) {
  if (!head) return null
  let p = head
  let prev, next
  while (p) {
    next = p.next
    p.next = prev
    prev = p
    p = next
  }

  return prev
}
