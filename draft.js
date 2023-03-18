// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

import swap from './methods/tool_functions/swap.js'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums || nums.length < 2) return

  let firstZeroIndex = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && firstZeroIndex !== -1) {
      swap(nums, i, firstZeroIndex)
      firstZeroIndex++
    } else if (nums[i] === 0 && firstZeroIndex === -1) {
      firstZeroIndex = i
    }
  }
}

const nums1 = [0, 1, 0, 3, 12]
moveZeroes(nums1)
console.log(nums1)
