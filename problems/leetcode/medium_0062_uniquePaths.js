// 62. Unique Paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const DP = new Array(m)
  for (let i = 0; i < m; i++) {
    DP[i] = new Array(n)
    DP[i].fill(-1)
  }
  return process(m - 1, n - 1, DP)
}

const process = (leftM, leftN, DP) => {
  if (DP[leftM][leftN] != -1) return DP[leftM][leftN]

  if (leftM == 0 && leftN == 0) {
    DP[0][0] = 1
    return DP[0][0]
  }

  let ways = 0
  if (leftM > 0) {
    ways += process(leftM - 1, leftN, DP)
  }
  if (leftN > 0) {
    ways += process(leftM, leftN - 1, DP)
  }
  DP[leftM][leftN] = ways
  return ways
}

console.log(uniquePaths(3, 7))

// 以上为 记忆化搜索 方法

// 以下为 动态规划 方法
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsDp = function (m, n) {
  const DP = new Array(m)
  for (let i = 0; i < m; i++) {
    DP[i] = new Array(n)
    DP[i].fill(-1)
  }

  DP[0][0] = 1

  for (let i = 1; i < m; i++) {
    DP[i][0] = DP[0][0]
  }
  for (let i = 1; i < n; i++) {
    DP[0][i] = DP[0][0]
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      DP[i][j] = DP[i - 1][j] + DP[i][j - 1]
    }
  }
  return DP[m - 1][n - 1]
}
