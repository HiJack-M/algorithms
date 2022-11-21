// 300. Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || nums.length == 0) return 0

  let ends = [] // ends[i]: i + 1 长度的 LIS 的最小结尾值
  ends[0] = nums[0]
  let right = 0 // LIS 的有效长度，ends 的有效区
  let longest = 1

  let l = 0
  let r = 0
  let mid = 0
  for (let i = 1; i < nums.length; i++) {
    l = 0
    r = right
    while (l <= r) {
      m = l + ((r - l) >> 1)
      if (nums[i] < ends[m]) {
        r = m - 1
      } else {
        l = m + 1
      }
    }
    right = Math.max(right, l)
    ends[l] = nums[i]
    longest = Math.max(longest, l + 1)
  }

  return longest
}
