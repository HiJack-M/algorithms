// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix || matrix.length == 0) return
  let n = matrix.length
  let circle = parseInt(n / 2)
  for (let i = 0; i < circle; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      circleSwap(matrix, i, j)
    }
  }
}

const circleSwap = (matrix, i, j) => {
  let n = matrix.length - 1
  let temp = matrix[n - j][i]
  matrix[n - j][i] = matrix[n - i][n - j]
  matrix[n - i][n - j] = matrix[j][n - i]
  matrix[j][n - i] = matrix[i][j]
  matrix[i][j] = temp
}
