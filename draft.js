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
  let stack = []
  stack.push(root)
  while (stack.length > 0) {
    let item = stack.shift()
    if (item.left) {
      stack.push(item.left)
    }
    if (item.right) {
      stack.push(item.right)
    }
    switchChildren(item)
  }
  return root
}

const switchChildren = (node) => {
  if (node.left || node.right) {
    let temp = node.left
    node.left = node.right
    node.right = temp
  }
}
