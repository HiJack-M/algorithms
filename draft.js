// 300. Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) return 0

  let N = nums.length
  let ends = new Array(N) // 以 i + 1 长度的 LIS 的最小结尾数
  ends[0] = nums[0]

  let longest = 1
  let right = 0

  for (let i = 1; i < N; i++) {
    let l = 0
    let r = right
    let m = 0

    while (l <= r) {
      m = l + ((r - l) >> 1)
      if (ends[m] < nums[i]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }

    right = Math.max(right, l + 1)
    ends[l] = nums[i]
    longest = Math.max(longest, l + 1)
  }

  return longest
}

const nums1 = [10, 9, 2, 5, 3, 7, 101, 18]
const nums2 = [0, 1, 0, 3, 2, 3]
const nums3 = [7, 7, 7, 7, 7, 7, 7]
console.log(lengthOfLIS(nums1))
console.log(lengthOfLIS(nums2))
console.log(lengthOfLIS(nums3))
