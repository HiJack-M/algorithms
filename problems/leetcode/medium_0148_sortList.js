// 148. Sort List

// Given the head of a linked list, return the list after sorting it in ascending order.

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head
  return mergeSortNode(head)
}

const mergeSortNode = (node) => {
  if (!node.next) return node

  let fast = node.next
  let slow = node
  while (fast) {
    if (!fast.next) break
    fast = fast.next.next
    slow = slow.next
  }
  let partTwo = slow.next
  slow.next = null

  let headL = mergeSortNode(node)
  let headR = mergeSortNode(partTwo)
  let newHead = mergeList(headL, headR)
  return newHead
}

const mergeList = (nodeL, nodeR) => {
  let head = new ListNode(0)
  let p = head
  while (nodeL && nodeR) {
    if (nodeL.val <= nodeR.val) {
      p.next = nodeL
      nodeL = nodeL.next
    } else {
      p.next = nodeR
      nodeR = nodeR.next
    }
    p = p.next
    p.next = null
  }

  if (nodeL) {
    p.next = nodeL
  } else if (nodeR) {
    p.next = nodeR
  }

  return head.next
}

let head1 = new ListNode(4)
head1.next = new ListNode(2)
head1.next.next = new ListNode(1)
head1.next.next.next = new ListNode(3)

console.log(sortList(head1))
