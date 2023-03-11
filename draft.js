// 96. Unique Binary Search Trees

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// 官方题解

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n < 0) return 0

  let G = new Array(n + 1).fill(0)
  G[0] = 1
  G[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j]
    }
  }

  return G[n]
}

console.log(numTrees(3))
console.log(numTrees(4))
