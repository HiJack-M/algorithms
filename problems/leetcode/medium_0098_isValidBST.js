class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

let head = new Node(5);
head.left = new Node(1);
head.right = new Node(4);
head.right.left = new Node(3);
head.right.right = new Node(6);

// 98. 验证二叉搜索树

// 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
//
// 有效 二叉搜索树定义如下：
//
// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const getInfo = (node) => {
    if (!node) return false

    let leftInfo = getInfo(node.left)
    let rightInfo = getInfo(node.right)

    let max = node.val
    let min = node.val
    let isValid = true
    if (leftInfo) {
      max = Math.max(leftInfo.max, max)
      min = Math.min(leftInfo.min, min)
      isValid = leftInfo.isValid && node.val > leftInfo.max
    }
    if (rightInfo) {
      max = Math.max(rightInfo.max, max)
      min = Math.min(rightInfo.min, min)
      isValid = isValid && rightInfo.isValid && node.val < rightInfo.min
    }

    return { min, max, isValid }
  }

  return getInfo(root)?.isValid
};

console.log(isValidBST(head))
