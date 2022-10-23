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

  let help = []
  let p = head
  while (p) {
    help.push(p.val)
    p = p.next
  }

  while (help.length > 0) {
    if (help.length == 1) return true
    let left = help.shift()
    let right = help.pop()
    if (left != right) {
      return false
    } else if (help.length == 0) return true
  }
}
