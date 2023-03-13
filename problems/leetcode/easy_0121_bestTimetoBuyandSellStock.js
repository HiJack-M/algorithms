// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// ⚠️ 暴力解法，ac 失败
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitFailAC = function (prices) {
  let max = 0
  if (!prices || prices.length == 0) return max

  // 找 i 之后比 i 大的最大值，相减得 profit
  for (let i = 0; i < prices.length - 1; i++) {
    let curMaxBiggerThanI = prices[i]
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > curMaxBiggerThanI) {
        curMaxBiggerThanI = prices[j]
      }
    }
    max = Math.max(max, curMaxBiggerThanI - prices[i])
  }

  return max
}

// 贪心算法
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0

  let curMin = prices[0]
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < curMin) {
      curMin = prices[i]
    } else if (prices[i] > curMin) {
      maxProfit = Math.max(maxProfit, prices[i] - curMin)
    } // 当天价格与之前的最低价相同则不动作
  }

  return maxProfit
}

// 动态规划思想
var maxProfitDp = function (prices) {
  let max = 0
  if (!prices || prices.length < 2) return max

  // 考虑每次如何获取最大收益？第i天的最大收益只需要知道前i天的最低点就可以算出来了。而第i天以前（包括第i天）的最低点和i-1天的最低点有关，至此动态方程就出来了。
  let Dp = new Array(prices.length) // Dp 表用来存放每天看到的之前的最低价的点，其实用贪心的一个变量保存就可以了
  Dp[0] = prices[0]
  for (let i = 1; i < prices.length; i++) {
    Dp[i] = Dp[i - 1] < prices[i] ? Dp[i - 1] : prices[i]
    max = prices[i] - Dp[i] > max ? prices[i] - Dp[i] : max
  }

  return max
}

const prices1 = [7, 1, 5, 3, 6, 4] // answer: 5
console.log(maxProfit(prices1))

const prices2 = [7, 6, 4, 3, 1] // answer: 0
console.log(maxProfit(prices2))
