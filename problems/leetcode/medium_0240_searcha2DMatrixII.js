// 240. Search a 2D Matrix II

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0 || !target) return false

  let m = matrix.length
  let n = matrix[0].length

  // 从右上角开始搜索
  // 可以使其中一维处于最小【x】，另一维处于最大【y】，方便缩小范围，只能往左或者下方缩小
  // 每次都能排除某个点所在行或者列
  let x = 0
  let y = n - 1
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) return true
    if (matrix[x][y] < target) {
      // 当前值小于目标，由于都是升序，要往更大看，【y】的一维已经是最大了，所以【x】维度加大，x++
      x++
    } else {
      // 当前值大于目标，由于都是升序，要往更小看，【x】的一维已经是最小了，所以【y】维度减小，y--
      y--
    }
  }

  return false
}

const matrix1 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]
let target1 = 5
console.log(searchMatrix(matrix1, target1))

const matrix2 = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]
let target2 = 20
console.log(searchMatrix(matrix2, target2))
