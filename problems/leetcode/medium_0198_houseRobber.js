// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || nums.length === 0) return null

  let N = nums.length
  let Dp = new Array(N + 1).fill(0)
  Dp[N - 1] = nums[N - 1]

  for (let i = N - 2; i >= 0; i--) {
    Dp[i] = Math.max(nums[i] + Dp[i + 2], Dp[i + 1])
  }

  return Dp[0]
}

const nums1 = [1, 2, 3, 1]
console.log(rob(nums1))

const nums2 = [2, 7, 9, 3, 1]
console.log(rob(nums2))

/**
 * @param {number[]} nums
 * @return {number}
 *  Time Limited Exceed
 */
var rob_bruteforce = function (nums) {
  if (!nums || nums.length === 0) return null

  // 当前轮到 index 做决定要不要
  // 返回值是当前及之后做完决定的最大值
  const process = (index) => {
    if (index == nums.length) return 0
    if (index == nums.length - 1) return nums[nums.length - 1]

    let yes = nums[index] + process(index + 2)
    let no = process(index + 1)
    return Math.max(yes, no)
  }

  return process(0, nums)
}
