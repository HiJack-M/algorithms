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

  invertProcess(root)
  return root
}

const invertProcess = (node) => {
  let left = node.left
  node.left = node.right
  node.right = left

  if (node.left) invertProcess(node.left)
  if (node.right) invertProcess(node.right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree_iteration = function (root) {
  if (!root) return null

  let help = []
  help.push(root)
  while (help.length > 0) {
    let curNode = help.shift()
    if (curNode.left || curNode.right) {
      let left = curNode.left
      curNode.left = curNode.right
      curNode.right = left
    }

    if (curNode.left) help.push(curNode.left)
    if (curNode.right) help.push(curNode.right)
  }
  return root
}
