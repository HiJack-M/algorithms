// 334. Increasing Triplet Subsequence

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (!nums || nums.length < 3) return false

  let first = nums[0]
  let second = Infinity
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > second) {
      return true
    } else if (nums[i] > first) {
      second = nums[i]
    } else {
      first = nums[i]
    }
  }

  return false
}

// 用人话说就是：
// 赋初始值的时候，已经满足second > first了，现在找第三个数third
// (1) 如果third比second大，那就是找到了，直接返回true
// (2) 如果third比second小，但是比first大，那就把second指向third，然后继续遍历找third
// (3) 如果third比first还小，那就把first指向third，然后继续遍历找third（这样的话first会跑到second的后边，但是不要紧，因为在second的前边，老first还是满足的）

const nums1 = [1, 2, 3, 4, 5]
const nums2 = [5, 4, 3, 2, 1]
const nums3 = [2, 1, 5, 0, 4, 6]
console.log(increasingTriplet(nums1))
console.log(increasingTriplet(nums2))
console.log(increasingTriplet(nums3))
const nums4 = [1, 5, 0, 4, 1, 3]
console.log(increasingTriplet(nums4))

/**
 * @param {number[]} nums
 * @return {boolean}
 * 双向遍历法
 */
var increasingTriplet_twoSidesTraversal = function (nums) {
  if (!nums || nums.length < 3) return false

  let N = nums.length

  let leftMin = new Array(N) // 每位数的左边比它小的最小值
  leftMin[0] = nums[0]
  for (let i = 1; i < N; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], nums[i])
  }

  let rightMax = new Array(N) // 每位数右边比它大的最大值
  rightMax[N - 1] = nums[N - 1]
  for (let i = N - 2; i >= 0; i--) {
    rightMax[i] = Math.max(nums[i], rightMax[i + 1])
  }

  for (let i = 1; i < N; i++) {
    if (nums[i] > leftMin[i] && nums[i] < rightMax[i]) return true
  }

  return false
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet_TimeLimitExceeded = function (nums) {
  if (!nums || nums.length < 3) return false

  let N = nums.length
  let Dp = new Array(N).fill(-1) // 每一项含义： 在这之后的数中有几个比它大
  Dp[N - 1] = 0

  for (let i = N - 2; i >= 0; i--) {
    let curAns = 0
    for (let j = i + 1; j < N; j++) {
      if (nums[j] > nums[i]) {
        curAns++
      }
    }
    Dp[i] = curAns

    if (Dp[i] >= 2) {
      let j = i + 1
      while (j < N) {
        if (nums[j] > nums[i] && Dp[j] >= 1) {
          return true
        }
        j++
      }
    }
  }

  return false
}
