// 103. Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

import Node from './structure/binaryTreeNode.js'

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const ans = []
  if (!root || root.length == 0) return ans

  const helpArr = []
  helpArr.push(root)

  let fromLeft = true

  while (helpArr.length > 0) {
    let curLen = helpArr.length
    const tempCurLevel = []

    while (curLen > 0) {
      let curNode = helpArr.shift()
      if (curNode.left) helpArr.push(curNode.left)
      if (curNode.right) helpArr.push(curNode.right)
      tempCurLevel.push(curNode.val)
      curLen--
    }
    if (fromLeft) {
      ans.push(tempCurLevel)
    } else {
      ans.push(tempCurLevel.reverse())
    }
    fromLeft = !fromLeft
  }

  return ans
}

// const root1 = [3, 9, 20, null, null, 15, 7] // [[3],[20,9],[15,7]]
let head1 = new Node(3)
head1.left = new Node(9)
head1.right = new Node(20)
head1.right.left = new Node(15)
head1.right.right = new Node(7)
console.log(zigzagLevelOrder(head1))
