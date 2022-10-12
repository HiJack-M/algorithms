// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums || nums.length == 0 || nums.indexOf(target) == -1) return [-1, -1]

  let l = 0
  let r = nums.length - 1
  let start = -1
  let end = -1
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (nums[mid] == target) {
      start = mid
      end = mid
      while (nums[start - 1] == target) {
        start--
      }
      while (nums[end + 1] == target) {
        end++
      }
      break
    } else if (nums[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return [start, end]
}
