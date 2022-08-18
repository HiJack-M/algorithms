class Node {
    constructor(data) {
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

let head = new Node(1);
head.left = new Node(3);
head.right = new Node(2);
head.left.left = new Node(5);
head.left.right = new Node(3);
// head.right.left = new Node(6);
head.right.right = new Node(9);

const buildByPreQueue = (prelist) => {
    if (prelist == null || prelist.length == 0) {
        return null;
    }
    return preB(prelist);
}

const preB = (prelist) => {
    let value = prelist.shift();
    if (value == null) {
        return null;
    }
    let head = new Node(value);
    head.left = preB(prelist);
    head.right = preB(prelist);
    return head;
}

const testArr = [0,0,0,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null]
let treeLee = buildByPreQueue(testArr)

// 662. 二叉树最大宽度

// 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

// 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

// 链接：https://leetcode.cn/problems/maximum-width-of-binary-tree

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
 * @return {number}
 */
const widthOfBinaryTree = function(root) {
  if (!root) return 0
  const rangeArr = []
  const widthArr = []

  const dfs = (node, level, index) => {
    if (!node) return
    if (!rangeArr[level]) {
      rangeArr[level] = [index, index]
    } else if (index < rangeArr[level][0]) {
      rangeArr[level][0] = index
    } else if (index > rangeArr[level][1]) {
      rangeArr[level][1] = index
    }
    widthArr[level] = Number(rangeArr[level][1] - rangeArr[level][0]) + 1

    dfs(node.left, level + 1, index * 2n + 1n)
    dfs(node.right, level + 1, index * 2n + 2n)
  }
  dfs(root, 0, 0n)

  return Math.max(...widthArr)
};

console.log(widthOfBinaryTree(treeLee))
// widthOfBinaryTree(head)
