// 322. Coin Change

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!coins || coins.length === 0 || amount < 0) return -1

  let N = coins.length
  let Dp = new Array(N + 1)
  for (let i = 0; i < Dp.length; i++) {
    Dp[i] = new Array(amount + 1)
  }

  Dp[N].fill(-1)
  Dp[N][0] = 0

  for (let index = N - 1; index >= 0; index--) {
    for (let rest = 0; rest <= amount; rest++) {
      let count = Infinity
      for (let i = 0; i * coins[index] <= rest; i++) {
        let nextCount = Dp[index + 1][rest - i * coins[index]]
        if (nextCount !== -1) {
          count = Math.min(count, nextCount + i)
        }
      }

      Dp[index][rest] = count == Infinity ? -1 : count
    }
  }

  return Dp[0][amount]
}

const coins1 = [1, 2, 5]
let amount1 = 11
console.log(coinChange(coins1, amount1))

const coins2 = [2]
let amount2 = 3
console.log(coinChange(coins2, amount2))

const coins3 = [1]
let amount3 = 0
console.log(coinChange(coins3, amount3))
