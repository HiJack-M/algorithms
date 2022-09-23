// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let ans = []
  if (!root) return ans

  let stack = [] // push pop
  let p = root
  stack.push(p)
  p = p.left
  while (p || stack.length > 0) {
    if (p) {
      stack.push(p)
      p = p.left
    } else {
      let cur = stack.pop()
      ans.push(cur.val)
      p = cur.right
    }
  }

  return ans
}
