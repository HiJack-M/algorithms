// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
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

const prices1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices1))
