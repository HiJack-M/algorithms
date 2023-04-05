// 148. Sort List

// Given the head of a linked list, return the list after sorting it in ascending order.

import ListNode from '../../structure/linkedListNode.js'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return head

  return process(head)
}

const process = (node) => {
  if (!node.next) return node

  let fast = node.next
  let slow = node
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let node2 = slow.next
  slow.next = null
  let head1 = process(node)
  let head2 = process(node2)
  let newHead = merge(head1, head2)
  return newHead
}

const merge = (node1, node2) => {
  let dummy = new ListNode(0)
  let node = dummy
  while (node1 && node2) {
    if (node1.val <= node2.val) {
      node.next = node1
      node1 = node1.next
    } else {
      node.next = node2
      node2 = node2.next
    }
    node = node.next
    node.next = null
  }
  if (node1) {
    node.next = node1
  } else {
    node.next = node2
  }

  let newHead = dummy.next
  dummy.next = null
  return newHead
}

let head1 = new ListNode(4)
head1.next = new ListNode(2)
head1.next.next = new ListNode(1)
head1.next.next.next = new ListNode(3)

console.log(sortList(head1))
