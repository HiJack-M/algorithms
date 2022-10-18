// 114. Flatten Binary Tree to Linked List

// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return

  let dummyHead = new TreeNode(0)
  let p = dummyHead

  let stack = []
  stack.push(root)
  while (stack.length > 0) {
    let cur = stack.pop()
    if (cur.right) {
      stack.push(cur.right)
      cur.right = null
    }
    if (cur.left) {
      stack.push(cur.left)
      cur.left = null
    }
    p.right = cur
    p = p.right
  }

  dummyHead.right = null
}
