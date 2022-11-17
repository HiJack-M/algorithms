// 300. Longest Increasing Subsequence

// 复习 贪心 + 二分

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLISPerf = function (nums) {
  if (!nums || nums.length == 0) return 0

  let N = nums.length
  let ends = []
  ends[0] = nums[0] // ends[i]: i + 1 长度的 LIS 结尾的最小值
  let longest = 1
  let right = 0 // ends 的有效区

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
    right = Math.max(right, l)
    ends[l] = nums[i]
    longest = Math.max(longest, l + 1)
  }

  return longest
}
