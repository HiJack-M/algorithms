// 104. Maximum Depth of Binary Tree

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
 * @return {number}
 */
var maxDepth = function (root) {
  return getDepth(root)
}

const getDepth = (node) => {
  if (!node) return 0
  return Math.max(getDepth(node.left), getDepth(node.right)) + 1
}
