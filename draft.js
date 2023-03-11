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
  if (
    !preorder ||
    !inorder ||
    preorder.length === 0 ||
    inorder.length === 0 ||
    preorder.length !== inorder.length
  )
    return null

  let rootVal = preorder.shift()
  let root = new TreeNode(rootVal)
  let inPivot = inorder.indexOf(rootVal)

  let leftPreorder = preorder.splice(0, inPivot) // 取出 preorder 的左部分
  // 右半部分就是原数组

  let leftInorder = inorder.splice(0, inPivot) // 取出 inorder 的左部分
  inorder.shift() // 把已经建立 root 的 pivot 去掉
  // 右半部分就是原数组

  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(preorder, inorder)

  return root
}

const preorder1 = [3, 9, 20, 15, 7]
const inorder1 = [9, 3, 15, 20, 7]
console.log(buildTree(preorder1, inorder1))

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTreeWasteArr = function (preorder, inorder) {
  if (
    !preorder ||
    !inorder ||
    preorder.length === 0 ||
    inorder.length === 0 ||
    preorder.length !== inorder.length
  )
    return null

  let rootVal = preorder.shift()
  let root = new TreeNode(rootVal)
  let inPivot = inorder.indexOf(rootVal)
  let leftInorder = inorder.slice(0, inPivot)
  let rightInorder = inorder.slice(inPivot + 1)

  root.left = buildTree(preorder.slice(0, leftInorder.length), leftInorder)
  root.right = buildTree(preorder.slice(leftInorder.length), rightInorder)

  return root
}
