// 114. Flatten Binary Tree to Linked List

// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root || (!root.left && !root.right)) return

  let dummyHead = new TreeNode(0)
  let p = dummyHead

  let helpQueue = []
  helpQueue.push(root)

  while (helpQueue.length > 0) {
    let node = helpQueue.pop()

    if (node.right) helpQueue.push(node.right)
    if (node.left) helpQueue.push(node.left)

    p.right = node
    node.left = null
    p = node
  }

  dummyHead = dummyHead.right
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten_O1 = function (root) {
  if (!root) return

  let node = root
  while (node) {
    if (node.left) {
      let next = node.left
      let predecessor = next
      while (predecessor.right) {
        predecessor = predecessor.right
      }
      predecessor.right = node.right
      node.left = null
      node.right = next
    }
    node = node.right
  }
}
