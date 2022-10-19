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
