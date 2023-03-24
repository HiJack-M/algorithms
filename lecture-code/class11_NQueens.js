/* N 皇后问题是指在 N*N 的棋盘上要摆 N 个皇后，
 * 要求任何两个皇后不同行、不同列， 也不在同一条斜线上(不互相攻击)
 * 给定一个整数 n，返回 n 皇后的摆法有多少种
 * n = 1，返回 1
 * n = 2 或 3，2 皇后和 3 皇后问题无论怎么摆都不行，返回 0
 * n = 8，返回 92 */

const NQueensNum1 = (n) => {
  if (n < 1) {
    return 0
  }
  // record[i] -> i行的皇后，放在了第几列
  let record = new Array(n)
  return process1(0, record, n)
}

/**
 * 潜台词：[0..i-1] 的皇后，任何两个皇后都一定不共行、不共列、不共斜线
 * 现在来到了 i
 * record[0..i-1] 表示之前的行放的皇后的位置
 * n，整体有多少行
 * 返回值：摆完所有的皇后，合理的摆法有多少种
 **/
const process1 = (i, record, n) => {
  if (i == n) {
    // 终止行
    return 1
  }
  let res = 0
  for (let j = 0; j < n; j++) {
    if (isValid(record, i, j)) {
      record[i] = j
      res += process1(i + 1, record, n)
    }
  }
  return res
}

// i 行，j 列
const isValid = (record, i, j) => {
  for (let k = 0; k < i; k++) {
    if (record[k] == j || Math.abs(i - k) == Math.abs(record[k] - j)) {
      return false
    }
  }
  return true
}

console.log(NQueensNum1(4))

// 请不要超过32皇后问题
const NQueensNum2 = (n) => {
  if (n < 1 || n > 32) {
    return 0
  }
  let limit = n == 32 ? -1 : (1 << n) - 1 // e.g.: n = 4，要得到1111，1 << 4 为 10000，- 1 => 1111
  return process2(limit, 0, 0, 0)
}

// colLim 列的限制，1的位置不能放皇后，0的位置可以
// leftDiaLim 左斜线的限制，1的位置不能放皇后，0的位置可以
// rightDiaLim 右斜线的限制，1的位置不能放皇后，0的位置可以
const process2 = (limit, colLim, leftDiaLim, rightDiaLim) => {
  // base case
  if (colLim == limit) {
    // 放满了
    return 1
  }
  // 所有候选皇后的位置，都在pos上
  // colLim | leftDiaLim | rightDiaLim    -> 总限制
  // ~ (colLim | leftDiaLim | rightDiaLim)    -> 取反后 1 为可尝试（左侧有干扰）
  // limit & (~(colLim | leftDiaLim | rightDiaLim))  -> 去除左侧干扰
  let pos = limit & ~(colLim | leftDiaLim | rightDiaLim)
  let mostRightOne = 0
  let res = 0
  while (pos != 0) {
    mostRightOne = (~pos + 1) & pos
    pos = pos - mostRightOne
    res += process2(
      limit,
      colLim | mostRightOne,
      (leftDiaLim | mostRightOne) << 1,
      (rightDiaLim | mostRightOne) >> 1
    )
  }
  return res
}

console.log(NQueensNum2(4))
