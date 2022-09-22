// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
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

console.log(climbStairs(40))
