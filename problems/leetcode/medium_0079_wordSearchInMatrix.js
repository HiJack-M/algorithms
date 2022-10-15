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

  let exist = false
  for (let i = 0; i < headIndex.length; i++) {
    let curExist = process(board, word, 1, headIndex[i].x, headIndex[i].y, [
      [headIndex[i].x, headIndex[i].y].join('-'),
    ])
    if (curExist) {
      exist = true
      break
    }
  }
  return exist
}

const process = (board, word, index, x, y, usedPoint) => {
  if (index == word.length) return true

  let exist = false
  // 向上
  // 上方坐标没用过；上面还有行；上方字母与 word 相应 index 字母相同
  if (
    usedPoint.indexOf([x - 1, y].join('-')) == -1 &&
    x - 1 >= 0 &&
    word[index] == board[x - 1][y]
  ) {
    exist = process(board, word, index + 1, x - 1, y, [...usedPoint, [x - 1, y].join('-')])
  }
  // 向下
  if (
    !exist &&
    usedPoint.indexOf([x + 1, y].join('-')) == -1 &&
    x + 1 < board.length &&
    word[index] == board[x + 1][y]
  ) {
    exist = process(board, word, index + 1, x + 1, y, [...usedPoint, [x + 1, y].join('-')])
  }
  // 向左
  if (
    !exist &&
    usedPoint.indexOf([x, y - 1].join('-')) == -1 &&
    y - 1 >= 0 &&
    word[index] == board[x][y - 1]
  ) {
    exist = process(board, word, index + 1, x, y - 1, [...usedPoint, [x, y - 1].join('-')])
  }
  // 向右
  if (
    !exist &&
    usedPoint.indexOf([x, y + 1].join('-')) == -1 &&
    y + 1 < board[0].length &&
    word[index] == board[x][y + 1]
  ) {
    exist = process(board, word, index + 1, x, y + 1, [...usedPoint, [x, y + 1].join('-')])
  }

  return exist
}

const board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word1 = 'ABCB'

const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
]
const word2 = 'SEE'

const board3 = [['a', 'a']]
const word3 = 'aa'

// console.log(exist(board1, word1))
// console.log(exist(board2, word2))
console.log(exist(board3, word3))
