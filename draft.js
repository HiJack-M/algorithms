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

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISGreedy = function (nums) {
  if (!nums || nums.length == 0) return 0

  let ends = []
  ends[0] = nums[0]
  let right = 0
  let longest = 1

  let l = 0
  let r = 0
  let m = 0
  for (let i = 1; i < nums.length; i++) {
    l = 0
    r = right
    while (l <= r) {
      m = l + ((r - l) >> 1)
      if (ends[m] < nums[i]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }

    ends[l] = nums[i]
    right = Math.max(right, l)
    longest = Math.max(longest, l + 1)
  }

  return longest
}

console.log(lengthOfLISGreedy(nums1))
console.log(lengthOfLISGreedy(nums2))
console.log(lengthOfLISGreedy(nums3))
