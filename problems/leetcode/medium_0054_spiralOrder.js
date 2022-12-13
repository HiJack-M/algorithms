// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let ans = []
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) return ans

  let m = matrix.length
  let n = matrix[0].length

  let directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ]
  let curPointer = 0
  let updatePointer = () => {
    curPointer = curPointer + 1 == directions.length ? 0 : curPointer + 1
  }

  let inValidRange = (x, y) => {
    if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] != -Infinity) {
      return true
    } else return false
  }

  let i = 0
  let j = -1
  while (ans.length < m * n) {
    let nextI = i + directions[curPointer][0]
    let nextJ = j + directions[curPointer][1]
    if (inValidRange(nextI, nextJ)) {
      i = nextI
      j = nextJ
      ans.push(matrix[i][j])
      matrix[i][j] = -Infinity
    } else {
      updatePointer()
    }
  }

  return ans
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(spiralOrder(matrix1)) // Output: [1,2,3,6,9,8,7,4,5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
console.log(spiralOrder(matrix2)) // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
