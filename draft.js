// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || head.length < 2) return true

  let p = head
  let tail = null
  while (p) {
    if (p.next) {
      p.next.prev = p
    } else {
      tail = p
    }
    p = p.next
  }

  p = head
  while (p != tail && p.next != tail) {
    if (p.val != tail.val) return false
    else {
      p = p.next
      tail = tail.prev
    }
  }
  if (p == tail) return true
  if (p.next == tail) {
    if (p.val == tail.val) return true
    else return false
  }
}
