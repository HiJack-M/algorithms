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
    if (rest < 0) {
      return -1
    }
    if (rest == 0) {
      Dp[index][0] = 0
      return 0
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
