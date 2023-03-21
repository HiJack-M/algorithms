// 215. Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

import swap from './methods/tool_functions/swap.js'

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (!nums || nums.length === 0 || k < 1) return null

  return process(nums, 0, nums.length - 1, nums.length - k)
}

const process = (nums, l, r, index) => {
  let i = partition(nums, l, r)
  if (i === index) return nums[i]
  if (i < index) return process(nums, i + 1, r, index)
  if (i > index) return process(nums, l, i - 1, index)
}

const partition = (nums, l, r) => {
  if (l === r) return l

  let pivot = nums[r]
  let smallI = l - 1
  let bigI = r + 1
  let p = l

  while (p < bigI) {
    if (nums[p] < pivot) {
      swap(nums, ++smallI, p++)
    } else if (nums[p] === pivot) {
      p++
    } else {
      swap(nums, --bigI, p)
    }
  }

  return smallI + 1
}

const nums1 = [3, 2, 1, 5, 6, 4]
let k1 = 2
console.log(findKthLargest(nums1, k1))

const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]
let k2 = 4
console.log(findKthLargest(nums2, k2))
