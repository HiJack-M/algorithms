// 160. Intersection of Two Linked Lists

// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null

  let p1 = headA
  let p2 = headB
  let count = 0
  while (p1) {
    p1 = p1.next
    count++
  }
  while (p2) {
    p2 = p2.next
    count--
  }

  p1 = headA
  p2 = headB
  if (count > 0) {
    while (count > 0) {
      p1 = p1.next
      count--
    }
  } else if (count < 0) {
    while (count < 0) {
      p2 = p2.next
      count++
    }
  }

  while (p1 != p2) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1
}
