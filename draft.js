// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(2)
// root.left.right = new TreeNode(3)
// root.right.right = new TreeNode(3)
root.left = new TreeNode(0)

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return false

  let helpQueue = [] // push shift
  let curSize = 0
  let curNode = null

  let checkArr = [] // 用来验证两边是否对称

  helpQueue.push(root)
  while (helpQueue.length > 0) {
    curSize = helpQueue.length

    while (curSize > 0) {
      curNode = helpQueue.shift()
      checkArr.push(curNode ? curNode.val : null)
      if (curNode) {
        helpQueue.push(curNode.left || null)
        helpQueue.push(curNode.right || null)
      }

      curSize--
    }
    while (checkArr.length > 0) {
      console.log('checkArr: ', checkArr)
      if (checkArr.length == 1) checkArr.pop()
      else {
        let left = checkArr.shift()
        let right = checkArr.pop()
        if (left != right) return false
      }
    }
  }
  return true
}

console.log(isSymmetric(root))
