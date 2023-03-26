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
    let quotient = Math.floor(n / (num * num)) // a 为需要几个当前的完全平方数 // need how many cur square number
    let remainder = n % (num * num) // 剩余的值再来一遍暴力解，找出最少需要的个数
    res = Math.min(res, quotient + numSquares(remainder))
    num++
  }
  return res
}

function numSquares(n) {
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }
  return dp[n]
}

/**
 * @param {number} n
 * @return {number}
 */
var numSquares_brute_force = function (n) {
  let map = new Map()
  return process(n, map)
}

const process = (rest, map) => {
  if (map.has(rest)) return map.get(rest)

  if (rest <= 0) return 0
  if (rest === 1) return 1

  let least = Infinity
  for (let i = 1; i * i <= rest; i++) {
    least = Math.min(least, process(rest - i * i, map) + 1)
  }
  map.set(rest, least)
  return least
}

console.log(numSquares(12))
console.log(numSquares(13))
