// 79. Word Search

// Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!board || board.length == 0 || !word) return false
  let m = board.length
  let n = board[0].length

  let nextCoordinates = [
    [1, 0], // right
    [0, 1], // down
    [-1, 0], // left
    [0, -1], // up
  ]

  let visitedGrid = new Array(m)
  for (let i = 0; i < m; i++) {
    visitedGrid[i] = new Array(n).fill(false)
  }

  const scan = (index, x, y, visitedGrid) => {
    if (board[x][y] != word[index]) return false

    // precondition：board[x][y] == word[index]
    if (index == word.length - 1) return true

    visitedGrid[x][y] = true

    let ans = false
    for (let i = 0; i < nextCoordinates.length; i++) {
      let newX = x + nextCoordinates[i][0]
      let newY = y + nextCoordinates[i][1]

      if (newX >= 0 && newX < m && newY >= 0 && newY < n && !visitedGrid[newX][newY]) {
        let curAns = scan(index + 1, newX, newY, visitedGrid)
        if (curAns === true) {
          ans = true
          break
        }
      }
    }

    visitedGrid[x][y] = false

    return ans
  }

  let ans = false
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curAns = scan(0, i, j, visitedGrid)
      if (curAns === true) {
        ans = true
        break
      }
    }
  }
  return ans
}

const board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
let word1 = 'ABCCED'
console.log(exist(board1, word1))

const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
let word2 = 'SEE'
console.log(exist(board2, word2))

const board3 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
let word3 = 'ABCB'
console.log(exist(board3, word3))
