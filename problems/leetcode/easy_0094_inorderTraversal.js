// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

//方法一：递归，利用系统栈
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

  inorderProcess(root, ans)
  return ans
}

const inorderProcess = (node, arr) => {
  if (node.left) {
    inorderProcess(node.left, arr)
  }
  arr.push(node.val)
  if (node.right) {
    inorderProcess(node.right, arr)
  }
}

// 方法二：自己压栈遍历
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
var inorderTraversalUseStack = function (root) {
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
