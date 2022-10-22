// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null
  reverseSub(root)
  return root
}

const reverseSub = (node) => {
  // base case
  if (!node) return

  reverseSub(node.left)
  reverseSub(node.right)
  let temp = node.left
  node.left = node.right
  node.right = temp
}
