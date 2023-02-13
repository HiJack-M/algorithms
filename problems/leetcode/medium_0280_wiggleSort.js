// 280. Wiggle Sort

// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

import swap from '../../methods/tool_functions/swap.js'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (!nums || nums.length < 2) return

  for (let i = 1; i < nums.length; i++) {
    if ((i % 2 == 1 && nums[i] < nums[i - 1]) || (i % 2 == 0 && nums[i] > nums[i - 1])) {
      swap(nums, i, i - 1)
    }
  }

  // return nums
}

// O(n) 的解法，根据题目要求的 nums[0] <= nums[1] >= nums[2] <= nums[3]....，可以总结出如下规律：

// 当i为奇数时，nums[i] >= nums[i - 1]

// 当i为偶数时，nums[i] <= nums[i - 1]

const nums1 = [3, 5, 2, 1, 6, 4]
console.log(wiggleSort(nums1))

const nums2 = [1, 3, 2, 2, 3, 1]
console.log(wiggleSort(nums2))

const nums3 = [1, 5, 1, 1, 6, 4]
console.log(wiggleSort(nums3))
