// 116. Populating Next Right Pointers in Each Node

// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null

  const traversalQueue = []
  traversalQueue.push(root)

  while (traversalQueue.length > 0) {
    let lineLen = traversalQueue.length

    while (lineLen > 0) {
      let curLeft = traversalQueue.shift()
      if (curLeft.left) traversalQueue.push(curLeft.left)
      if (curLeft.right) traversalQueue.push(curLeft.right)
      lineLen--

      if (lineLen > 0) {
        curLeft.next = traversalQueue[0]
      }
    }
  }

  return root
}
