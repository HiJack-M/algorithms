// 62. Unique Paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 10^9.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (!m || !n || m <= 0 || n <= 0) return 0

  return step(m, n, 0, 0)
}

// current point, return the possibilities count
const step = (m, n, curM, curN) => {
  if (curM === m - 1 && curN === n - 1) return 1

  let ways = 0

  if (curM < m - 1) {
    ways += step(m, n, curM + 1, curN)
  }
  if (curN < n - 1) {
    ways += step(m, n, curM, curN + 1)
  }

  return ways
}

console.log(uniquePaths(3, 7)) // answer: 28

console.log(uniquePaths(3, 2)) // answer: 3

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsDp = function (m, n) {
  if (!m || !n || m <= 0 || n <= 0) return 0

  let Dp = new Array(m)
  for (let i = 0; i < m; i++) {
    Dp[i] = new Array(n).fill(0)
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let ways = 0
      if (i == m - 1 && j === n - 1) {
        Dp[i][j] = 1
      } else {
        if (i < m - 1) {
          ways += Dp[i + 1][j]
        }
        if (j < n - 1) {
          ways += Dp[i][j + 1]
        }
        Dp[i][j] = ways
      }
    }
  }

  return Dp[0][0]
}
