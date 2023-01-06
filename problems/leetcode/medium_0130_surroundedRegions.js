// 130. Surrounded Regions

// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || board.length == 0 || board[0].length == 0) return

  let m = board.length
  let n = board[0].length

  const dfs = (x, y) => {
    if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] !== 'O') return

    board[x][y] = 'A'
    dfs(x + 1, y)
    dfs(x - 1, y)
    dfs(x, y + 1)
    dfs(x, y - 1)
  }

  // 第 1 行 和 最后 1 行
  for (let i = 0; i < n; i++) {
    dfs(0, i)
    dfs(m - 1, i)
  }
  // 边界两列
  for (let i = 1; i < m - 1; i++) {
    dfs(i, 0)
    dfs(i, n - 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'A') {
        board[i][j] = 'O'
      } else if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }
    }
  }

  console.log(board)
}

// 思路：找出被边界的 'O' 连接的 'O'，标记，剩下的 'O' 都 flip

const board1 = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
]
const board2 = [['X']]
const board3 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
]
const board4 = [
  ['O', 'X', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'X', 'O'],
  ['X', 'O', 'X', 'O', 'X'],
  ['O', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'X', 'O'],
]
const board5 = [
  ['O', 'O', 'O', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'O'],
]

solve(board1)
solve(board2)
solve(board3)
solve(board4)
solve(board5)
