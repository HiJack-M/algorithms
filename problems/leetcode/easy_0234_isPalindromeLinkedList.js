// 234. Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

/** 快慢指针岂不是更好 */

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

/** 双指针方法 */

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
