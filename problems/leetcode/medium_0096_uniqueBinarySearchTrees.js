// 96. Unique Binary Search Trees

// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// 官方题解

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

/**
 * @param {number} n
 * @return {number}
 */
var numTreesDp = function (n) {
  if (n <= 0) return 0

  let Dp = new Array(n)
  for (let i = 0; i < n; i++) {
    Dp[i] = new Array(n).fill(0)
  }

  for (let k = 0; k < n; k++) {
    // Dp 表只有左上半部分能用
    for (let j = k; j >= 0; j--) {
      // 斜着往上填
      if (k == j) {
        Dp[j][k] = 1
      } else {
        let nums = 0
        for (let i = j; i <= k; i++) {
          if (i == j) {
            nums += Dp[i + 1][k]
          } else if (i == k) {
            nums += Dp[j][i - 1]
          } else {
            nums += Dp[j][i - 1] * Dp[i + 1][k]
          }
        }
        Dp[j][k] = nums
      }
    }
  }

  return Dp[0][n - 1]
}

/**
 * @param {number} n
 * @return {number}
 */
var numTreesBruteForce = function (n) {
  if (n <= 0) return 0

  return possibilities(1, n)
}

const possibilities = (l, r) => {
  if (l >= r) return 1

  let nums = 0
  for (let i = l; i <= r; i++) {
    if (i == l) {
      nums += possibilities(i + 1, r)
    } else if (i == r) {
      nums += possibilities(l, i - 1)
    } else {
      nums += possibilities(l, i - 1) * possibilities(i + 1, r)
    }
  }

  return nums
}

console.log(numTrees(3))
console.log(numTrees(4))
