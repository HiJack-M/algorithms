// 289. Game of Life

// According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  if (!board || board.length == 0 || board[0].length == 0) return

  let m = board.length
  let n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = survive(i, j, board)
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === -1) {
        board[i][j] = 0
      } else if (board[i][j] === 2) {
        board[i][j] = 1
      }
    }
  }

  return board
}

const survive = (m, n, board) => {
  let liveNeighbors = 0
  const neighborCoords = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  for (let i = 0; i < neighborCoords.length; i++) {
    let newX = m + neighborCoords[i][0]
    let newY = n + neighborCoords[i][1]
    if (newX >= 0 && newY >= 0 && newX < board.length && newY < board[0].length) {
      if (board[newX][newY] === -1 || board[newX][newY] === 1) {
        liveNeighbors += 1
      }
    }
  }

  // cur 死 next 活 -> 2
  // cur 活 next 死 -> -1
  // rest 不变
  if (board[m][n] === 0) {
    return liveNeighbors === 3 ? 2 : 0
  } else if (board[m][n] === 1) {
    if (liveNeighbors === 2 || liveNeighbors === 3) return 1
    else return -1
  }
}

const board1 = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]
const board2 = [
  [1, 1],
  [1, 0],
]
console.log(gameOfLife(board1))
console.log(gameOfLife(board2))
