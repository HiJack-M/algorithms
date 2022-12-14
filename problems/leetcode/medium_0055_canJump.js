// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (!nums) return false
  if (nums.length < 2) return true

  let Dp = new Array(nums.length).fill(-1)
  Dp[nums.length - 1] = true

  return takeStep(nums, 0, Dp)
}

const takeStep = (nums, index, Dp) => {
  if (index == nums.length - 1) return true
  if (index < nums.length - 1 && nums[index] == 0) return false
  if (Dp[index] !== -1) return Dp[index]

  for (let i = 1; i <= nums[index]; i++) {
    let curRes = takeStep(nums, index + i, Dp)
    if (curRes) {
      Dp[index + i] = true
      return true
    }
  }

  Dp[index] = false
  return false
}

const nums1 = [2, 3, 1, 1, 4] // true
const nums2 = [3, 2, 1, 0, 4] // false

console.log(canJump(nums1))
console.log(canJump(nums2))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpDp = function (nums) {
  if (!nums) return false
  if (nums.length < 2) return true

  let Dp = new Array(nums.length).fill(-1)
  Dp[nums.length - 1] = true

  for (let index = nums.length - 2; index >= 0; index--) {
    if (nums[index] == 0) {
      Dp[index] = false
    } else {
      for (let i = 1; i <= nums[index]; i++) {
        let curRes = Dp[index + i]
        if (curRes) {
          Dp[index] = true
          break
        } else {
          Dp[index] = false
        }
      }
    }
  }

  return Dp[0]
}

console.log(canJumpDp(nums1))
console.log(canJumpDp(nums2))

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJumpGreedy = function (nums) {
  if (!nums) return false
  if (nums.length < 2) return true

  let mostAway = 0
  for (let i = 0; i < nums.length; i++) {
    if (i <= mostAway) {
      // 首先 i 自己可达
      mostAway = Math.max(i + nums[i], mostAway)
      if (mostAway >= nums.length - 1) return true
    }
  }

  return false
}

console.log(canJumpGreedy(nums1))
console.log(canJumpGreedy(nums2))
