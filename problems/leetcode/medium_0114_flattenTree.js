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

// 寻找前驱节点方法
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flattenPredecessor = function (root) {
  if (!root) return

  let node = root
  while (node) {
    if (node.left) {
      let next = node.left
      let p = next
      while (p.right) {
        p = p.right
      }
      p.right = node.right
      node.left = null
      node.right = next
    }
    node = node.right
  }
}

// 如果一个节点的左子节点不为空，则该节点的左子树中的最后一个节点被访问之后，该节点的右子节点被访问。该节点的左子树中最后一个被访问的节点是左子树中的最右边的节点，也是该节点的前驱节点。
