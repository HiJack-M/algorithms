// 322. Coin Change

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!coins || coins.length == 0 || amount < 0) return -1
  if (amount == 0) return 0

  let Dp = new Array(coins.length + 1)
  for (let i = 0; i < Dp.length; i++) {
    Dp[i] = new Array(amount + 1)
  }

  return process(coins, 0, amount, Dp)
}

// 返回使用的张数
const process = (coins, index, rest, Dp) => {
  if (Dp[index][rest] != undefined) {
    return Dp[index][rest]
  }

  // base case
  if (index == coins.length) {
    if (rest == 0) {
      Dp[index][0] = 0
      return 0
    } else {
      return -1
    }
  }

  let fewestNeeds = Infinity

  for (let i = 0; coins[index] * i <= rest; i++) {
    let nextNeeds = process(coins, index + 1, rest - coins[index] * i, Dp)

    if (nextNeeds != -1) {
      fewestNeeds = Math.min(fewestNeeds, nextNeeds + i)
    }
  }

  Dp[index][rest] = fewestNeeds == Infinity ? -1 : fewestNeeds
  return Dp[index][rest]
}

const coins1 = [1, 2, 5]
console.log(coinChange(coins1, 11))

var coinChangeDp = (coins, amount) => {
  if (!coins || coins.length == 0 || amount < 0) return -1
  if (amount == 0) return 0

  let N = coins.length
  let Dp = new Array(N + 1)
  for (let i = 0; i < Dp.length; i++) {
    Dp[i] = new Array(amount + 1)
  }
  Dp[N].fill(-1)
  Dp[N][0] = 0

  for (let index = N - 1; index >= 0; index--) {
    for (let rest = 0; rest <= amount; rest++) {
      let fewestNeeds = Infinity

      for (let i = 0; coins[index] * i <= rest; i++) {
        let nextNeeds = Dp[index + 1][rest - coins[index] * i]

        if (nextNeeds != -1) {
          fewestNeeds = Math.min(fewestNeeds, nextNeeds + i)
        }
      }

      Dp[index][rest] = fewestNeeds == Infinity ? -1 : fewestNeeds
    }
  }

  return Dp[0][amount]
}

console.log(coinChangeDp(coins1, 11))
