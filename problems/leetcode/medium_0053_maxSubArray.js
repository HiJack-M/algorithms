// 53. Maximum Subarray

// Given an integer array nums, find the subarray which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums || nums.length == 0) return 0

  let N = nums.length
  let Dp = new Array(N) // 到 Dp[i] 为止的最大和
  Dp[0] = nums[0]
  let max = Dp[0]

  for (let i = 1; i < N; i++) {
    Dp[i] = Math.max(Dp[i - 1] + nums[i], nums[i])
    max = Math.max(max, Dp[i])
  }

  return max
}

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums2 = [1]
const nums3 = [5, 4, -1, 7, 8]
console.log(maxSubArray(nums1))
console.log(maxSubArray(nums2))
console.log(maxSubArray(nums3))

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_20230317 = function (nums) {
  if (!nums || nums.length == 0) return 0
  let ans = nums[0]
  let curMax = nums[0]

  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(curMax + nums[i], nums[i])
    ans = Math.max(ans, curMax)
  }

  return ans
}
