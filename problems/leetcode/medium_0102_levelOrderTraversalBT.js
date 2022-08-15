// 你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

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
var levelOrder = function(root) {
  let result = []
  if (root) {
    let queue = []
    let cur = root
    let curLevel = 0
    let levelMap = new Map()
    queue.push(cur)
    levelMap.set(cur, curLevel)
    while (queue.length > 0) {
      cur = queue.shift()
      curLevel = levelMap.get(cur)
      if (!result[curLevel]) {
        result[curLevel] = []
      }
      result[curLevel].push(cur.val)

      if (cur.left) {
        queue.push(cur.left)
        levelMap.set(cur.left, curLevel + 1)
      }
      if (cur.right) {
        queue.push(cur.right)
        levelMap.set(cur.right, curLevel + 1)
      }
    }
  }
  return result
};

