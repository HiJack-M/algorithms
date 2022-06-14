// 34. 在排序数组中查找元素的第一个和最后一个位置

// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!nums || nums.length == 0) return [-1, -1]
  if (nums.length == 1) return target == nums[0] ? [0, 0] : [-1, -1]

  let l = 0
  let r = nums.length - 1
  let mid
  let equalL = -1
  let equalR = -1
  while (l <= r) {
    mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      equalL = mid
      equalR = mid
      while (nums[equalL - 1] == target) {
        equalL--
      }
      while (nums[equalR + 1] == target) {
        equalR++
      }
      break
    }
  }
  return [equalL, equalR]
};
