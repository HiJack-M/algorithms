// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// - Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (!board || board.length == 0 || board[0].length == 0) return false

  let N = board.length
  let help = new Array(10).fill(false)

  // 判断行
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!/[1-9]/.test(parseInt(board[i][j]))) {
        continue
      }

      if (help[board[i][j]]) return false
      help[board[i][j]] = true
    }
    help.fill(false)
  }

  // 判断列
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!/[1-9]/.test(parseInt(board[j][i]))) {
        continue
      }

      if (help[board[j][i]]) return false
      help[board[j][i]] = true
    }
    help.fill(false)
  }

  const checkInner = (i, j) => {
    let n = 3
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (!/[1-9]/.test(parseInt(board[i + x][j + y]))) {
          continue
        }

        if (help[board[i + x][j + y]]) return false
        help[board[i + x][j + y]] = true
      }
    }
    help.fill(false)
    return true
  }

  // 判断 3*3
  let a = 0
  while (a < N) {
    let b = 0
    while (b < N) {
      if (!checkInner(a, b)) return false
      b += 3
    }
    a += 3
  }

  return true
}

const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
] // answer: true

const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
] // answer: false

const board3 = null
const board4 = []
const board5 = [[]]

console.log(isValidSudoku(board1))
console.log(isValidSudoku(board2))
console.log(isValidSudoku(board3))
console.log(isValidSudoku(board4))
console.log(isValidSudoku(board5))
