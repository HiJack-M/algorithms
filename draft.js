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

  let headIndex = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        headIndex.push({ x: i, y: j })
      }
    }
  }
  if (headIndex.length == 0) return false
  console.log(headIndex)

  let visitedGrid = []
  for (let i = 0; i < m; i++) {
    visitedGrid[i] = new Array(n)
    visitedGrid[i].fill(false)
  }

  let exist = false
  for (let i = 0; i < headIndex.length; i++) {
    visitedGrid[headIndex[i].x][headIndex[i].y] = true
    let curExist = process(board, word, 1, headIndex[i].x, headIndex[i].y, visitedGrid)
    visitedGrid[headIndex[i].x][headIndex[i].y] = false
    if (curExist) {
      exist = true
      break
    }
  }
  return exist
}

const process = (board, word, index, x, y, visitedGrid) => {
  if (index == word.length) return true

  console.log('x: ', x, ', y: ', y)
  console.log('visitedGrid: ', visitedGrid)

  let exist = false
  // 向上
  // 上方坐标没用过；上面还有行；上方字母与 word 相应 index 字母相同
  if (x - 1 >= 0 && visitedGrid[x - 1][y] == false && word[index] == board[x - 1][y]) {
    console.log('index: ', index, ', x: ', x, ', y: ', y, ', 1')
    visitedGrid[x - 1][y] = true
    exist = process(board, word, index + 1, x - 1, y, visitedGrid)
    visitedGrid[x - 1][y] = false
  }
  // 向下
  if (
    !exist &&
    x + 1 < board.length &&
    visitedGrid[x + 1][y] == false &&
    word[index] == board[x + 1][y]
  ) {
    console.log('index: ', index, ', x: ', x, ', y: ', y, ', 2')
    visitedGrid[x + 1][y] = true
    exist = process(board, word, index + 1, x + 1, y, visitedGrid)
    visitedGrid[x + 1][y] = false
  }
  // 向左
  if (!exist && y - 1 >= 0 && visitedGrid[x][y - 1] == false && word[index] == board[x][y - 1]) {
    console.log('index: ', index, ', x: ', x, ', y: ', y, ', 3')
    visitedGrid[x][y - 1] = true
    exist = process(board, word, index + 1, x, y - 1, visitedGrid)
    visitedGrid[x][y - 1] = false
  }
  // 向右
  if (
    !exist &&
    y + 1 < board[0].length &&
    visitedGrid[x][y + 1] == false &&
    word[index] == board[x][y + 1]
  ) {
    console.log('index: ', index, ', x: ', x, ', y: ', y, ', 4')
    visitedGrid[x][y + 1] = true
    exist = process(board, word, index + 1, x, y + 1, visitedGrid)
    visitedGrid[x][y + 1] = false
  }

  return exist
}

const board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word1 = 'ABCB'
const word11 = 'ABCCED'

const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word2 = 'SEE'

const board3 = [['a', 'a']]
const word3 = 'aa'

console.log(exist(board1, word11))
// console.log(exist(board2, word2))
// console.log(exist(board3, word3))
