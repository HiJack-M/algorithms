// 48. Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return

  let n = matrix.length

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      circleSwap(matrix, i, j)
    }
  }
}

const circleSwap = (matrix, x, y) => {
  let n = matrix.length
  let temp = matrix[x][y]
  matrix[x][y] = matrix[n - 1 - y][x]
  matrix[n - 1 - y][x] = matrix[n - 1 - x][n - 1 - y]
  matrix[n - 1 - x][n - 1 - y] = matrix[y][n - 1 - x]
  matrix[y][n - 1 - x] = temp
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(rotate(matrix1))

const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
console.log(rotate(matrix2))

// find the relation and connection within the four point

// [0][0]  [0][3]
// [3][0]  [3][3]

// [1][1]  [1][2]
// [2][1]  [2][2]

// [0][1]  [1][3]
// [2][0]  [3][2]

// [x][y]  [y][n-1-x]
// [n-1-y][x]  [n-1-x][n-1-y]
