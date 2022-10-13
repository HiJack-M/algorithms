// 64. Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// 记忆化搜索方法
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length == 0) return 0

  const Dp = new Array(grid.length)
  for (let i = 0; i < Dp.length; i++) {
    Dp[i] = new Array(grid[0].length)
    Dp[i].fill(-1)
  }
  return process(0, 0, grid, Dp)
}

const process = (m, n, grid, Dp) => {
  if (Dp[m][n] != -1) {
    return Dp[m][n]
  }

  if (m == grid.length - 1 && n == grid[0].length - 1) {
    Dp[m][n] = grid[m][n]
    return grid[m][n]
  }

  let min = Infinity
  if (m < grid.length - 1) {
    min = Math.min(min, grid[m][n] + process(m + 1, n, grid, Dp))
  }
  if (n < grid[0].length - 1) {
    min = Math.min(min, grid[m][n] + process(m, n + 1, grid, Dp))
  }
  Dp[m][n] = min
  return min
}

// DP way
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSumDp = function (grid) {
  if (!grid || grid.length == 0) return 0

  let m = grid.length
  let n = grid[0].length
  const Dp = new Array(m)
  for (let i = 0; i < m; i++) {
    Dp[i] = new Array(n)
    Dp[i].fill(-1)
  }

  Dp[m - 1][n - 1] = grid[m - 1][n - 1]
  for (let i = m - 2; i >= 0; i--) {
    Dp[i][n - 1] = grid[i][n - 1] + Dp[i + 1][n - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    Dp[m - 1][i] = grid[m - 1][i] + Dp[m - 1][i + 1]
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      Dp[i][j] = grid[i][j] + Math.min(Dp[i + 1][j], Dp[i][j + 1])
    }
  }

  return Dp[0][0]
}
