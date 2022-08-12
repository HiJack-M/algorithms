// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

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
var postorderTraversal = function(root) {
  const temp = []
  if (root) {
    const stack = []
    let cur = root
    stack.push(cur)
    while (stack.length > 0) {
      cur = stack.pop()
      temp.push(cur.val)
      if (cur.left) {
        stack.push(cur.left)
      }
      if (cur.right) {
        stack.push(cur.right)
      }
    }
  }
  const result = []
  while (temp.length > 0) {
    result.push(temp.pop())
  }
  return result
};
