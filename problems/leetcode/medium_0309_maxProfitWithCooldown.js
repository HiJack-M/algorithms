// 309. Best Time to Buy and Sell Stock with Cooldown

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitFailAC = function (prices) {
  if (!prices || prices.length < 2) return 0

  return process(prices, 0, Infinity)
}

const process = (prices, i, lowestPrice) => {
  // base case
  if (i == prices.length - 1) {
    if (prices[i] > lowestPrice) {
      return prices[i] - lowestPrice
    } else {
      return 0
    }
  } else if (i >= prices.length) {
    return 0
  }

  if (prices[i] < lowestPrice) {
    // 更新当前最低价
    return process(prices, i + 1, prices[i])
  } else {
    // 卖
    let sell = prices[i] - lowestPrice + process(prices, i + 2, Infinity)
    // 不卖
    let hold = process(prices, i + 1, lowestPrice)
    return Math.max(sell, hold)
  }
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0

  let N = prices.length
  // buy[i] : 在 0...i 范围上，最后一次操作是 buy 操作，动作可能发生在 i 或 i 之前
  // buy[i] 的含义 : max{ 所有可能性[之前交易获得的最大收益 - buy 动作的收购价格] }
  // 这样一来，当之后以 X 价格做成一笔交易的时候，当前最好的总收益直接就是 buy[i] + X 了（买入价已经减掉过了）
  let buy = new Array(N)
  buy.fill(0)
  // sell[i] : 在 0...i 范围上，最后一次操作是 sell 操作，动作可能发生在 i 或 i 之前
  // sell[i] 的含义 : 0...i 范围上，sell 动作最好的收益
  let sell = new Array(N)
  sell.fill(0)

  buy[0] = -prices[0]
  buy[1] = Math.max(buy[0], 0 - prices[1])
  sell[0] = 0
  sell[1] = Math.max(sell[0], prices[1] - prices[0])

  for (let i = 2; i < N; i++) {
    buy[i] = Math.max(buy[i - 1], sell[i - 2] - prices[i]) // i - 2 是跳过 cooldown
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i])
  }

  return sell[N - 1]
}

// 左神的解法：https://github.com/algorithmzuo/leetcode-top-100-liked-questions/blob/master/src/toplikedquestions/Problem_0309_BestTimeToBuyAndSellStockWithCooldown.java
