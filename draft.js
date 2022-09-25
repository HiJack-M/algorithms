// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head || n <= 0) return head

  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let fast = head
  let slow = dummyHead

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next

  return dummyHead.next
}
