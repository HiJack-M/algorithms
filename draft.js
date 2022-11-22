// 337. House Robber III

// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

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
var rob = function (root) {
  if (!root) return 0

  return getInfo(root).max
}

function getInfo(node) {
  if (!node) return { yes: 0, no: 0, max: 0 }

  let leftInfo = getInfo(node.left)
  let rightInfo = getInfo(node.right)
  let yes = node.val + leftInfo.no + rightInfo.no
  let no = leftInfo.max + rightInfo.max

  return { yes, no, max: Math.max(yes, no) }
}
