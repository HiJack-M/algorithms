// 324. Wiggle Sort II

// Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

// You may assume the input array always has a valid answer.

import swap from '../../methods/tool_functions/swap.js'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  if (!nums || nums.length < 2) return

  let N = nums.length
  quickSelect(nums, 0, N, parseInt(N / 2)) // 放置中位数
  let mid = nums[parseInt(N / 2)]

  // 3-way-partition (荷兰国旗)
  let p1 = -1 // 小于区的最后一个元素
  let p2 = N // 大于区的第一个元素
  let p3 = 0
  while (p3 < p2) {
    if (nums[p3] < mid) {
      swap(nums, ++p1, p3++)
    } else if (nums[p3] > mid) {
      swap(nums, --p2, p3)
    } else {
      p3++
    }
  }

  // 为了在穿插时不让相等的元素摆在一起，把前半部分逆序
  p1 = 0
  p2 = Math.ceil(N / 2) - 1
  while (p1 < p2) {
    swap(nums, p1++, p2--)
  }

  let i = parseInt(N / 2)
  p3 = 1
  let num
  while (i > 0) {
    num = nums.pop()
    nums.splice(p3, 0, num)
    p3 += 2
    i--
  }
}

// 快速选择，找到第 n 大的数（可方便用于找中位数），放到第 n 个位置
// end: size...
const quickSelect = (arr, start, end, n) => {
  if (start == end) return

  let t = arr[end - 1]
  let i = start // 大于区第一个数
  let j = start

  while (j < end) {
    if (arr[j] <= t) {
      swap(arr, i++, j++)
    } else {
      j++
    }
  }

  if (i - 1 > n) {
    quickSelect(arr, start, i - 1, n)
  } else if (i <= n) {
    quickSelect(arr, i, end, n)
  }
}

const nums1 = [1, 5, 1, 1, 6, 4]
console.log(wiggleSort(nums1))

const nums2 = [1, 3, 2, 2, 3, 1]
console.log(wiggleSort(nums2))

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort_O_nlogn = function (nums) {
  if (!nums || nums.length < 2) return

  nums.sort((a, b) => a - b)

  let mid = Math.ceil(nums.length / 2)

  // 为了在穿插时不让相等的元素摆在一起
  let p1 = 0
  let p2 = mid - 1
  while (p1 < p2) {
    swap(nums, p1++, p2--)
  }

  let i = nums.length - mid
  let p3 = 1
  let num
  while (i > 0) {
    num = nums.pop()
    nums.splice(p3, 0, num)
    p3 += 2
    i--
  }
}
