// 300. Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || nums.length == 0) return 0

  let N = nums.length
  let Dp = new Array(N)
  Dp[0] = 1

  let longest = 1

  for (let i = 1; i < N; i++) {
    Dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        Dp[i] = Math.max(Dp[i], Dp[j] + 1)
      }
    }
    longest = Math.max(longest, Dp[i])
  }

  return longest
}

const nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
const nums2 = [0, 1, 0, 3, 2, 3]
const nums3 = [7, 7, 7, 7, 7, 7, 7]
console.log(lengthOfLIS(nums1))
console.log(lengthOfLIS(nums2))
console.log(lengthOfLIS(nums3))
