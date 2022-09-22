// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 0 || n == 1) return n

  let Dp = new Array(n + 1)
  Dp.fill(-1)
  Dp[0] = 1
  Dp[1] = 1

  return process(n, Dp)
}

const process = (rest, Dp) => {
  if (Dp[rest] != undefined && Dp[rest] != -1) return Dp[rest]

  // base case
  if (rest == 0) return 1
  if (rest < 0) return 0

  let ways = process(rest - 1, Dp)
  ways += process(rest - 2, Dp)

  Dp[rest] = ways
  return ways
}

console.log(climbStairs(4))

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsDp = function (n) {
  if (n == 0 || n == 1) return n

  let Dp = new Array(n + 1)
  Dp.fill(-1)
  Dp[0] = 1
  Dp[1] = 1

  for (let i = 2; i <= n; i++) {
    Dp[i] = Dp[i - 1] + Dp[i - 2]
  }

  return Dp[n]
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsFibonacci = function (n) {
  if (n == 0 || n == 1) return n

  let first = 1
  let second = 2

  for (let i = 3; i <= n; i++) {
    let third = first + second
    first = second
    second = third
  }

  return second
}
