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

class Info {
  constructor(yes, no, max) {
    this.yes = yes
    this.no = no
    this.max = max
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  let info = getNodeInfo(root)
  return info === null ? 0 : info.max
}

const getNodeInfo = (node) => {
  if (!node) return null

  let leftInfo = getNodeInfo(node.left)
  let rightInfo = getNodeInfo(node.right)

  let yes = node.val
  let no = 0
  if (leftInfo !== null) {
    yes += leftInfo.no
    no += leftInfo.max
  }
  if (rightInfo !== null) {
    yes += rightInfo.no
    no += rightInfo.max
  }

  return new Info(yes, no, Math.max(yes, no))
}
