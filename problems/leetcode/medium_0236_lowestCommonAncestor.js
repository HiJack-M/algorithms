// 236. Lowest Common Ancestor of a Binary Tree

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || !p || !q) return null

  return getInfo(root, p, q).lca
}

const getInfo = (node, p, q) => {
  let info = { hasP: false, hasQ: false, lca: null }
  if (!node) return info

  if (node.val == p.val) info.hasP = true
  else if (node.val == q.val) info.hasQ = true

  let leftInfo = getInfo(node.left, p, q)
  let rightInfo = getInfo(node.right, p, q)

  // if (leftInfo.lca != null) info.lca = leftInfo.lca
  info.lca = leftInfo.lca || rightInfo.lca || null
  if (!info.hasP) {
    info.hasP = leftInfo.hasP || rightInfo.hasP
  }
  if (!info.hasQ) {
    info.hasQ = leftInfo.hasQ || rightInfo.hasQ
  }
  if (!info.lca && info.hasP && info.hasQ) {
    info.lca = node
  }
  return info
}

let head = new TreeNode(1)
head.left = new TreeNode(2)

console.log(lowestCommonAncestor(head, head, head.left))
