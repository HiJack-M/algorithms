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

  let slow = head
  let fast = head
  let help = []

  while (fast !== null && fast.next !== null) {
    help.push(slow.val)
    slow = slow.next
    fast = fast.next.next
  }

  if (fast !== null && fast.next === null) {
    // linked list is odd
    slow = slow.next // skip center node
  }

  while (help.length > 0) {
    if (slow.val !== help.pop()) return false
    slow = slow.next
  }

  return true
}
