// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!nums2 || n == 0) return

  let lp = 0
  let rp = 0

  while (rp < n) {
    if (lp < m) {
      if (nums2[rp] < nums1[lp]) {
        // 在 lp 点插入
        nums1.splice(lp++, 0, nums2[rp++])
        nums1.pop()
        m++
      } else {
        lp++
      }
    } else {
      nums1[lp++] = nums2[rp++]
    }
  }
}

const nums1a = [1, 2, 3, 0, 0, 0]
let m1 = 3
const nums2a = [2, 5, 6]
let n1 = 3

merge(nums1a, m1, nums2a, n1)
console.log(nums1a)

// 关键是判断何时才能插入：nums2[j] < nums1[i] 时才插入
