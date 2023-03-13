// 309. Best Time to Buy and Sell Stock with Cooldown

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0

  let N = prices.length
  let buy = new Array(N).fill(0)
  let sell = new Array(N).fill(0)

  buy[0] = -prices[0]
  buy[1] = Math.max(buy[0], -prices[1])
  sell[0] = 0
  sell[1] = Math.max(sell[0], prices[1] - prices[0])

  for (let i = 2; i < N; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i])
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i])
  }

  return sell[N - 1]
}

const prices1 = [1, 2, 3, 0, 2] // answer: 3
console.log(maxProfit(prices1))
