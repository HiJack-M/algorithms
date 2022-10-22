// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (!nums || nums.length == 0) return null

  let winner = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == winner) {
      count++
    } else if (count == 0) {
      winner = nums[i]
      count++
    } else {
      count--
    }
  }
  return winner
}
