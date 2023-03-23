// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  if (!nums || nums.length < 2) return null

  let fast = nums[nums[0]]
  let slow = nums[0]

  while (fast < nums.length) {
    if (fast === slow) break
    fast = nums[nums[fast]]
    slow = nums[slow]
  }

  fast = 0
  while (fast !== slow) {
    fast = nums[fast]
    slow = nums[slow]
  }

  return fast
}
const nums1 = [1, 2, 3, 4, 2]
console.log(findDuplicate(nums1))
