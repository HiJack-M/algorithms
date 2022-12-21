// 98. Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// 1. The left subtree of a node contains only nodes with keys less than the node's key.
// 2. The right subtree of a node contains only nodes with keys greater than the node's key.
// 3. Both the left and right subtrees must also be binary search trees.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val
//   this.left = left === undefined ? null : left
//   this.right = right === undefined ? null : right
// }

import Node from './structure/binaryTreeNode.js'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return getInfo(root)?.valid
}

const getInfo = (node) => {
  if (!node) return false

  let infoLeft = getInfo(node.left)
  let infoRight = getInfo(node.right)

  let max = node.val
  let min = node.val
  let valid = true

  if (infoLeft) {
    valid = infoLeft.valid && node.val > infoLeft.max
    min = infoLeft.min
  }

  if (infoRight) {
    valid = valid && infoRight.valid && node.val < infoRight.min
    max = infoRight.max
  }

  return { min, max, valid }
}

let head = new Node(5)
head.left = new Node(1)
head.right = new Node(6)
// head.right.left = new Node(3)
// head.right.right = new Node(6)

console.log(isValidBST(head))
