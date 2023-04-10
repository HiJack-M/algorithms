// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

// - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// - Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (!board || board.length === 0 || board[0].length === 0) return false

  let N = board.length
  let help = new Array(N)

  // validate row
  for (let i = 0; i < N; i++) {
    help.fill(false)
    for (let j = 0; j < N; j++) {
      if (board[i][j] !== '.') {
        let curNum = parseInt(board[i][j])
        if (help[curNum] === true) {
          return false
        }
        help[curNum] = true
      }
    }
  }

  // validate column
  for (let i = 0; i < N; i++) {
    help.fill(false)
    for (let j = 0; j < N; j++) {
      if (board[j][i] !== '.') {
        let curNum = parseInt(board[j][i])
        if (help[curNum] === true) {
          return false
        }
        help[curNum] = true
      }
    }
  }

  // return boolean
  const validateSub = (x, y) => {
    help.fill(false)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[x + i][y + j] !== '.') {
          let curNum = parseInt(board[x + i][y + j])
          if (help[curNum] === true) {
            return false
          }
          help[curNum] = true
        }
      }
    }
    return true
  }

  // validate sub-boxes
  for (let i = 0; i < N; i = i + 3) {
    for (let j = 0; j < N; j = j + 3) {
      let subValid = validateSub(i, j)
      if (!subValid) return false
    }
  }

  return true
}
