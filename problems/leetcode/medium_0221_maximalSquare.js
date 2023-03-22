// 221. Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return 0

  let ans = 0
  let m = matrix.length
  let n = matrix[0].length

  // the area starting from i
  let Dp = new Array(m)
  for (let i = 0; i < m; i++) {
    Dp[i] = new Array(n).fill(0)
  }

  // fill the last row
  for (let i = 0; i < n; i++) {
    Dp[m - 1][i] = matrix[m - 1][i] === '1' ? 1 : 0
    ans = Math.max(ans, Dp[m - 1][i])
  }
  // fill the last colume
  for (let i = 0; i < m; i++) {
    Dp[i][n - 1] = matrix[i][n - 1] === '1' ? 1 : 0
    ans = Math.max(ans, Dp[i][n - 1])
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      // if is '0', continue
      if (matrix[i][j] !== '0') {
        if (matrix[i + 1][j + 1] === '0') {
          Dp[i][j] = 1
        } else {
          let minArea = Math.min(Dp[i][j + 1], Dp[i + 1][j], Dp[i + 1][j + 1])
          Dp[i][j] = Math.pow(Math.sqrt(minArea) + 1, 2)
        }
        ans = Math.max(ans, Dp[i][j])
      }
    }
  }

  return ans
}

const matrix1 = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]
console.log(maximalSquare(matrix1))

const matrix2 = [
  ['1', '0', '1', '0', '0', '1', '1', '1', '0'],
  ['1', '1', '1', '0', '0', '0', '0', '0', '1'],
  ['0', '0', '1', '1', '0', '0', '0', '1', '1'],
  ['0', '1', '1', '0', '0', '1', '0', '0', '1'],
  ['1', '1', '0', '1', '1', '0', '0', '1', '0'],
  ['0', '1', '1', '1', '1', '1', '1', '0', '1'],
  ['1', '0', '1', '1', '1', '0', '0', '1', '0'],
  ['1', '1', '1', '0', '1', '0', '0', '0', '1'],
  ['0', '1', '1', '1', '1', '0', '0', '1', '0'],
  ['1', '0', '0', '1', '1', '1', '0', '0', '0'],
]
console.log(maximalSquare(matrix2))
