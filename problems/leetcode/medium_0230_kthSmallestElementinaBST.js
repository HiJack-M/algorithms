// 230. Kth Smallest Element in a BST

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// // Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val
//   this.left = left === undefined ? null : left
//   this.right = right === undefined ? null : right
// }

import Node from './structure/binaryTreeNode.js'

function Info(count, ans) {
  this.count = count || 0
  this.ans = ans || null
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (!root || k <= 0) return null

  return preTraversal(root, k).ans
}

// return {count, ans}
const preTraversal = (node, rest) => {
  let leftInfo = null
  let count = 1
  let ans = null
  if (node.left) {
    leftInfo = preTraversal(node.left, rest)
    count = count + leftInfo.count
    ans = leftInfo.ans || ans
    if (ans !== null) {
      return new Info(count, ans)
    }
  }
  if (count === rest) {
    ans = node.val
    return new Info(count, ans)
  }
  if (node.right) {
    let rightInfo = preTraversal(node.right, rest - count)
    count = count + rightInfo.count
    ans = rightInfo.ans || ans
  }
  return new Info(count, ans)
}

let head1 = new Node(3)
head1.left = new Node(1)
head1.left.right = new Node(2)
head1.right = new Node(4)

console.log(kthSmallest(head1, 1))

let head2 = new Node(1)
head2.right = new Node(2)

console.log(kthSmallest(head2, 2))
