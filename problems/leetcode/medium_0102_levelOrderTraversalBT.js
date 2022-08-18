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

// 以上为最基础的方法，用 map 记录[层级，节点]键值对

const levelOrderUseSize = (root) => {
  const res = []
  if (!root) return res
  let q = []
  let curSize = 0
  let curNode = null
  q.push(root)
  while (q.length > 0) {
    curSize = q.length // 拿到当前层级的节点数
    res.push([])
    while (curSize > 0) { // 一次循环完取出整一层的节点
      curNode = q.shift()
      res[res.length - 1].push(curNode.val)
      if (curNode.left) q.push(curNode.left)
      if (curNode.right) q.push(curNode.right)
      curSize--
    }
  }
  return res
}
