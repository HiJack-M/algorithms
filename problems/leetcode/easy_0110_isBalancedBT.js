// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

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
var isBalanced = function(root) {
  if (!root || root.length == 0) {
    return true
  }

  const getInfo = (node) => {
    if (!node) {
      return { height: 0, isBalanced: true }
    }
    let leftInfo = getInfo(node.left)
    let rightInfo = getInfo(node.right)
    let height = Math.max(leftInfo.height, rightInfo.height) + 1
    let isBalanced = leftInfo.isBalanced && rightInfo.isBalanced
    if (isBalanced) {
      isBalanced = Math.abs(leftInfo.height - rightInfo.height) <= 1 ? true : false
    }
    return { height, isBalanced }
  }

  let info = getInfo(root)
  return info.isBalanced
};
