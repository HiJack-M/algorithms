// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  if (!matrix || matrix[0]?.length == 0) return

  let m = matrix.length
  let n = matrix[0].length
  let oriZeros = []

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        oriZeros.push([i, j])
      }
    }
  }

  while (oriZeros.length > 0) {
    let zero = oriZeros.shift()

    matrix[zero[0]].fill(0)
    for (let i = 0; i < m; i++) {
      matrix[i][zero[1]] = 0
    }
  }

  console.log(matrix)
}

const matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]

setZeroes(matrix1)
