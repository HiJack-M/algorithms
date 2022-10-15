// 79. Word Search

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board || board.length == 0 || !word) return false

  let m = board.length
  let n = board[0].length

  let visitedGrid = []
  for (let i = 0; i < m; i++) {
    visitedGrid[i] = new Array(n)
    visitedGrid[i].fill(false)
  }

  let exist = false
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curExist = check(board, word, 0, i, j, visitedGrid)
      if (curExist) {
        exist = curExist
        break
      }
    }
  }
  return exist
}

const check = (board, word, index, x, y, visitedGrid) => {
  if (word[index] != board[x][y]) {
    return false
  } else if (index == word.length - 1) {
    return true
  }

  visitedGrid[x][y] = true

  let exist = false
  let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  for (const [dx, dy] of direction) {
    let newX = x + dx
    let newY = y + dy
    if (newX >= 0 && newX < board.length && newY >= 0 && newY < board[0].length) {
      if (!visitedGrid[newX][newY]) {
        let curExist = check(board, word, index + 1, newX, newY, visitedGrid)
        if (curExist) {
          exist = curExist
          break
        }
      }
    }
  }

  visitedGrid[x][y] = false
  return exist
}

const board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word1 = 'ABCB' // false
const word11 = 'ABCCED' // true

const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word2 = 'SEE' // true

const board3 = [['a', 'a']]
const word3 = 'aa' // true

console.log(exist(board1, word1))
console.log(exist(board1, word11))
console.log(exist(board2, word2))
console.log(exist(board3, word3))
