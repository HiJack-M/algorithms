// 309. Best Time to Buy and Sell Stock with Cooldown

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {}

// 先复习 121 简单版
// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (!prices || prices.length < 2) return 0

  let lowest = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i]
    } else if (prices[i] > lowest) {
      maxProfit = Math.max(maxProfit, prices[i] - lowest)
    }
  }

  return maxProfit
}
