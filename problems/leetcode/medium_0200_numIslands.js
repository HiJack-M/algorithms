// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length == 0 || grid[0].length == 0) return 0

  let m = grid.length
  let n = grid[0].length

  let visited = []
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n)
    visited[i].fill(false)
  }

  let islands = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1' && !visited[i][j]) {
        islands++
        markAndCheck(grid, visited, i, j)
      }
    }
  }

  return islands
}

const markAndCheck = (grid, visited, i, j) => {
  if (visited[i][j]) return 0

  visited[i][j] = true

  let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  for (const [x, y] of direction) {
    let newI = i + x
    let newJ = j + y
    if (
      newI >= 0 &&
      newI < grid.length &&
      newJ >= 0 &&
      newJ < grid[0].length &&
      grid[newI][newJ] == '1' &&
      !visited[newI][newJ]
    ) {
      markAndCheck(grid, visited, newI, newJ)
    }
  }
}

const grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
]

console.log(numIslands(grid1))

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
]

console.log(numIslands(grid2))

const grid3 = [
  ['1', '0', '1', '1', '1'],
  ['1', '0', '1', '0', '1'],
  ['1', '1', '1', '0', '1'],
]

console.log(numIslands(grid3))
