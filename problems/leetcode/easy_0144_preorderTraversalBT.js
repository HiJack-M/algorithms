// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

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
var preorderTraversal = function(root) {
  const result = []
  if (root) {
    const stack = []
    let cur = root
    stack.push(cur)
    while (stack.length > 0) {
      cur = stack.pop()
      result.push(cur.val)
      if (cur.right) {
        stack.push(cur.right)
      }
      if (cur.left) {
        stack.push(cur.left)
      }
    }
  }
  return result
};
