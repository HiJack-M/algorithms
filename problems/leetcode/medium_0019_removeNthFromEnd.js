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

  let length = 0 // 总长度
  let fast = head
  while (fast) {
    length++
    fast = fast.next
  }
  toDel = length - n

  // 删除的是头节点
  if (toDel <= 0) {
    if (length == 1) return null
    else {
      let dummyHead = head.next
      head.next = null
      return dummyHead
    }
  }

  let count = 0
  let slow = head
  while (count < toDel - 1) {
    slow = slow.next
    count++
  }
  slow.next = slow.next ? slow.next.next : null
  return head
}
