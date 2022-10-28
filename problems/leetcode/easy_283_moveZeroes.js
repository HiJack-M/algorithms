// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (!nums || nums.length < 2) return

  let firstIndex = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0 && firstIndex == -1) {
      firstIndex = i
    } else if (nums[i] != 0 && firstIndex != -1) {
      swap(nums, i, firstIndex++)
    }
  }
}

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
