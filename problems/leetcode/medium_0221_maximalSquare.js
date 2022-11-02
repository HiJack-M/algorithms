/*
 * @Author: HiJack hijack.sherlock@live.com
 * @Date: 2022-11-02 19:19:59
 * @LastEditors: HiJack hijack.sherlock@live.com
 * @LastEditTime: 2022-11-02 19:20:03
 * @FilePath: /algorithms/problems/leetcode/medium_0221_maximalSquare.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 221. Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) return 0

  let M = matrix.length
  let N = matrix[0].length
  let Dp = new Array(M)
  for (let i = 0; i < M; i++) {
    Dp[i] = new Array(N)
    Dp[i].fill(0)
  }

  let max = 0

  for (let i = 0; i < M; i++) {
    Dp[i][0] = matrix[i][0] == '1' ? 1 : 0
    if (Dp[i][0] > max) {
      max = Dp[i][0]
    }
  }
  for (let j = 1; j < N; j++) {
    Dp[0][j] = matrix[0][j] == '1' ? 1 : 0
    if (Dp[0][j] > max) {
      max = Dp[0][j]
    }
  }
  for (let i = 1; i < M; i++) {
    for (let j = 1; j < N; j++) {
      if (matrix[i][j] == '0') {
        Dp[i][j] = 0
      } else {
        // Dp[i][j] = 1
        if (matrix[i - 1][j - 1] == '1' && matrix[i - 1][j] == '1' && matrix[i][j - 1] == '1') {
          Dp[i][j] = Math.pow(
            Math.sqrt(Math.min(Dp[i - 1][j - 1], Dp[i - 1][j], Dp[i][j - 1])) + 1,
            2
          )
        } else {
          Dp[i][j] = 1
        }
      }
      if (Dp[i][j] > max) {
        max = Dp[i][j]
      }
    }
  }
  return max
}

const matrix1 = [
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

console.log(maximalSquare(matrix1))
