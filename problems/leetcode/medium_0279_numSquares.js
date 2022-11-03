// 279. Perfect Squares

// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let res = n // res 为结果，最少需要多少个数，先用最坏打算，n 个 1
  let num = 2 //perfect squares 的 根，num * num 则为当前的完全平方数
  while (num * num <= n) {
    // 当前的完全平方数在 n 之内
    let a = parseInt(n / (num * num)) // a 为需要几个当前的完全平方数
    let b = n % (num * num) // 剩余的值再来一遍暴力解，找出最少需要的个数
    res = Math.min(res, a + numSquares(b))
    num++
  }
  return res
}
