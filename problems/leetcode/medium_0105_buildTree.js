// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder || preorder.length == 0) return null
  return makeTree(preorder, inorder)
}

const makeTree = (preorder, inorder) => {
  let headVal = preorder[0]
  let head = new TreeNode(headVal)
  if (preorder.length > 1) {
    let pivot = inorder.indexOf(headVal) // 分出左右分支

    let leftPreorder = preorder.splice(0, pivot + 1)
    leftPreorder.shift() // 去掉已经用过的头
    // 右分支就是原数组

    let leftInorder = inorder.splice(0, pivot) // 左分支成员集合
    inorder.shift() // 变成右分支成员集合

    if (leftPreorder.length > 0) {
      head.left = makeTree(leftPreorder, leftInorder)
    }
    if (preorder.length > 0) {
      head.right = makeTree(preorder, inorder)
    }
  }

  return head
}
