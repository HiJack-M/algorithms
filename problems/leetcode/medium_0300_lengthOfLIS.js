// 300. Longest Increasing Subsequence

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums || nums.length === 0) return 0

  let N = nums.length
  let Dp = new Array(N).fill(1) // LIS initial whit cur num itself

  let ans = 1

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        Dp[i] = Math.max(Dp[i], Dp[j] + 1)
      }
      ans = Math.max(ans, Dp[i])
    }
  }

  return ans
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
var lengthOfLISPerf = function (nums) {
  if (!nums || nums.length == 0) return 0

  let N = nums.length
  const ends = new Array(N) // ends[i] 代表目前所有长度为 i + 1 的递增子序列的最小结尾的值（ends 里的值是递增的）
  ends[0] = nums[0]

  let longest = 1
  let right = 0 // ends 的有效区（永远都在增加，为了确定二分法的右边界）
  // 在 ends 的有效区里找刚刚大于等于 nums[i] 的值
  // 有，该位置替换成 nums[i]（i + 1 长度的 LIS 最小结尾变得更小）
  // 无，扩充有效区，LIS 长度 + 1，以 nums[i] 结尾

  let l = 0
  let r = 0
  let m = 0
  for (let i = 1; i < N; i++) {
    l = 0
    r = right
    while (l <= r) {
      m = l + ((r - l) >> 1)
      if (ends[m] < nums[i]) {
        l = m + 1 // 正是在这一步有可能把 right 突破原有的大小
      } else {
        r = m - 1
      }
    }
    right = Math.max(right, l)
    ends[l] = nums[i] // 要么替换某个最小结尾，要么扩充有效区
    longest = Math.max(longest, l + 1)
  }

  return longest
}

console.log(lengthOfLISPerf(nums1))
console.log(lengthOfLISPerf(nums2))
console.log(lengthOfLISPerf(nums3))
