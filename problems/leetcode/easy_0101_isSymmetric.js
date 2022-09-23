// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// 方法一：递归
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return false
  return checkProcess(root.left, root.right)
}

// 传入位置相对镜像的两个节点
const checkProcess = (left, right) => {
  if (!left && !right) return true
  if ((left && !right) || (!left && right)) return false
  if (left.val != right.val) return false
  else {
    let childrenSymmetric =
      checkProcess(left.left, right.right) && checkProcess(left.right, right.left)
    if (childrenSymmetric) return true
    else return false
  }
}
