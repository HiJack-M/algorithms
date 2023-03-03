// 31. Next Permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

import swap from './methods/tool_functions/swap.js'

const reverse = (arr, start, end) => {
  while (start < end) {
    swap(arr, start++, end--)
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (!nums) return

  let N = nums.length
  let smallIndex = N - 2 // 找顺序对当中的小值
  while (smallIndex >= 0 && nums[smallIndex] >= nums[smallIndex + 1]) {
    smallIndex--
  }

  if (smallIndex >= 0) {
    let bigIndex = N - 1 // 后方逆序排列中刚好比小值大的那个值
    while (bigIndex > smallIndex && nums[bigIndex] <= nums[smallIndex]) {
      bigIndex--
    }
    swap(nums, smallIndex, bigIndex)
  }

  reverse(nums, smallIndex + 1, N - 1)
}
