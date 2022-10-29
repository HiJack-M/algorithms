// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || nums.length == 0) return 0
  return process(nums, 0)
}

// 当前轮到 index 做决定要不要
// 返回值是当前及之后做完决定的最大值
const process = (nums, index) => {
  if (index == nums.length - 1) {
    return nums[index]
  }
  if (index == nums.length - 2) {
    return Math.max(nums[index], nums[index + 1])
  }

  let yes = nums[index] + process(nums, index + 2)
  let no = process(nums, index + 1)

  return Math.max(yes, no)
}

/** 上面的方法会 Time Limited Exceed */

var robDp = function (nums) {
  if (!nums || nums.length == 0) return 0

  let N = nums.length
  let Dp = new Array(N)

  Dp[N - 1] = nums[N - 1]
  if (N >= 2) {
    Dp[N - 2] = Math.max(nums[N - 1], nums[N - 2])

    for (let i = N - 3; i >= 0; i--) {
      Dp[i] = Math.max(nums[i] + Dp[i + 2], Dp[i + 1])
    }
  }

  return Dp[0]
}
