// 162. Find Peak Element

// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (!nums || nums.length == 0) return null

  let N = nums.length
  if (N == 1) return 0
  if (nums[0] > nums[1]) return 0
  if (nums[N - 1] > nums[N - 2]) return N - 1

  let l = 1
  let r = N - 2
  let m = 0
  while (l < r) {
    m = l + ((r - l) >> 1)
    if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) return m
    else if (nums[m - 1] > nums[m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return l
}
