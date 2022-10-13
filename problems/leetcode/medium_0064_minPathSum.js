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
