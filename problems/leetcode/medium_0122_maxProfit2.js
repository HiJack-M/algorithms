// 122. Best Time to Buy and Sell Stock II

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0

  let lowest = prices[0]
  let profit = 0

  // 记录当前遇到过的最低点，每次遇到高峰（之后一天下跌），就结算一次
  let i = 1
  while (i < prices.length) {
    if (prices[i] < lowest) {
      // 趋势往下
      lowest = prices[i]
      i++
    } else if (prices[i + 1] < prices[i]) {
      // 结算
      profit += prices[i] - lowest
      lowest = prices[i + 1]
      i = i + 2
    } else if (i == prices.length - 1) {
      // 一直涨，最后卖掉
      profit += prices[prices.length - 1] - lowest
      i++
    } else {
      i++
    }
  }

  return profit
}

const prices1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices1))

const prices2 = [1, 2, 3, 4, 5]
console.log(maxProfit(prices2))

/**
 * @param {number[]} prices
 * @return {number}
 */

// 只要 prices[i+1] - prices[i] > 0 则加到 profit 里，有收益的天就交易

var maxProfitPerf = function (prices) {
  if (!prices || prices.length < 2) return 0

  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      profit += prices[i + 1] - prices[i]
    }
  }

  return profit
}
