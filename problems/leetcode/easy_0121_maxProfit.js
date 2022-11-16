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
  let max = 0
  if (!prices || prices.length < 2) return max

  // 每天的卖出交易，都看交易日 i 前的最低价，如果在那一天 minPriceDay 买入就是 i 日卖出能获取最大收益的 minPriceDay
  let minPrice = Infinity
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > max) {
      max = prices[i] - minPrice
    }
  }

  return max
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
