// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i]
  }
  return ans
}

const nums1 = [4, 1, 2, 1, 2]
console.log(singleNumber(nums1))
