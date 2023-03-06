// 64. Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || grid.length == 0 || grid[0].length == 0) return null

  return stepMinSum(0, 0, grid)
}

// current point so on, return min sum after steps
const stepMinSum = (m, n, grid) => {
  if (m == grid.length - 1 && n == grid[0].length - 1) {
    return grid[m][n]
  }

  let minSumM = Infinity
  if (m < grid.length - 1) {
    minSumM = stepMinSum(m + 1, n, grid) + grid[m][n]
  }
  let minSumN = Infinity
  if (n < grid[0].length - 1) {
    minSumN = stepMinSum(m, n + 1, grid) + grid[m][n]
  }
  return Math.min(minSumM, minSumN)
}

const grid1 = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]
console.log(minPathSum(grid1)) // answer: 7

const grid2 = [
  [1, 2, 3],
  [4, 5, 6],
]
console.log(minPathSum(grid2)) // answer: 12

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSumDp = function (grid) {
  if (!grid || grid.length == 0 || grid[0].length == 0) return null

  let M = grid.length
  let N = grid[0].length
  let Dp = new Array(M)
  for (let i = 0; i < M; i++) {
    Dp[i] = new Array(N)
  }

  Dp[M - 1][N - 1] = grid[M - 1][N - 1]

  for (let i = M - 2; i >= 0; i--) {
    Dp[i][N - 1] = Dp[i + 1][N - 1] + grid[i][N - 1]
  }
  for (let i = N - 2; i >= 0; i--) {
    Dp[M - 1][i] = Dp[M - 1][i + 1] + grid[M - 1][i]
  }
  for (let i = M - 2; i >= 0; i--) {
    for (let j = N - 2; j >= 0; j--) {
      Dp[i][j] = Math.min(Dp[i][j + 1], Dp[i + 1][j]) + grid[i][j]
    }
  }

  return Dp[0][0]
}

console.log(minPathSumDp(grid1)) // answer: 7
console.log(minPathSumDp(grid2)) // answer: 7
