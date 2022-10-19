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

  // 考虑每次如何获取最大收益？第i天的最大收益只需要知道前i天的最低点就可以算出来了。而第i天以前（包括第i天）的最低点和i-1天的最低点有关，至此动态方程就出来了。
  let Dp = new Array(prices.length)
  Dp[0] = prices[0]
  for (let i = 1; i < prices.length; i++) {
    Dp[i] = Dp[i - 1] < prices[i] ? Dp[i - 1] : prices[i]
    max = prices[i] - Dp[i] > max ? prices[i] - Dp[i] : max
  }

  return max
}

const prices1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices1))
