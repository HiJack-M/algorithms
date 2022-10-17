// 96. Unique Binary Search Trees

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const G = new Array(n + 1).fill(0)

  G[0] = 1
  G[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j]
    }
  }

  return G[n]
}

// 题解推导笔记：https://www.notion.so/Hot-100-8efe93595048478ea289453c75ea3540
