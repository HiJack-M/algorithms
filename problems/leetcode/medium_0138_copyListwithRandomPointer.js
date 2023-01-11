// 138. Copy List with Random Pointer

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

// Your code will only be given the head of the original linked list.

// Definition for a Node.
function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return

  let node = head
  while (node) {
    let copy = new Node(node.val, node.next)
    node.next = copy
    node = copy.next
  }

  node = head
  while (node) {
    let copy = node.next
    copy.random = node.random ? node.random.next : null

    node = copy.next
  }

  node = head
  let newNode = head.next
  while (node) {
    let copy = node.next
    node.next = copy.next
    copy.next = copy.next ? copy.next.next : null
    node = node.next
  }

  // let p = head
  // while (p) {
  //   console.log(p.val, p)
  //   p = p.next
  // }

  return newNode
}

let head1 = new Node(7) // head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
head1.next = new Node(13)
head1.next.next = new Node(11)
head1.next.next.next = new Node(10)
head1.next.next.next.next = new Node(1)
head1.next.random = head1
head1.next.next.random = head1.next.next.next.next
head1.next.next.next.random = head1.next.next
head1.next.next.next.next.random = head1

// console.log(copyRandomList(head1))

let head2 = new Node(1) // head = [[1,1],[2,1]]
head2.next = new Node(2)
head2.random = head2.next
head2.next.random = head2.next

console.log(copyRandomList(head2))

// 下面是针对笔试的【快速】【map】版
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListUseMap = function (head) {
  if (head == null) return null
  const map = new Map()
  let cur = head
  while (cur) {
    map.set(cur, new Node(cur.val))
    cur = cur.next
  }
  cur = head
  while (cur) {
    map.get(cur).next = cur.next ? map.get(cur.next) : null
    map.get(cur).random = cur.random ? map.get(cur.random) : null
    cur = cur.next
  }
  return map.get(head)
}
