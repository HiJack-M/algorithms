// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = []
  if (!root) return ans

  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    let curLevelLen = queue.length
    ans.push([])
    while (curLevelLen > 0) {
      let cur = queue.shift()
      ans[ans.length - 1].push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
      curLevelLen--
    }
  }
  return ans
}
