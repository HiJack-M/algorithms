// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

import swap from '../../methods/tool_functions/swap.js'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (!nums || nums.length < 2) return nums
  let smallI = -1
  let bigI = nums.length
  let pivot = 0
  while (pivot < bigI) {
    if (nums[pivot] < 1) {
      swap(nums, ++smallI, pivot++)
    } else if (nums[pivot] > 1) {
      swap(nums, --bigI, pivot)
    } else {
      pivot++
    }
  }

  // TODO: do not return
  console.log(nums)
}

const nums1 = [2, 0, 2, 1, 1, 0]
sortColors(nums1)

const nums2 = [2, 0, 1]
sortColors(nums2)
