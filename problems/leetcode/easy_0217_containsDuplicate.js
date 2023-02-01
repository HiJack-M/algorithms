// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (!nums) return false
  let visited = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) {
      return true
    }
    visited.add(nums[i])
  }

  return false
}

const nums1 = [1, 2, 3, 1] // true
console.log(containsDuplicate(nums1))
const nums2 = [1, 2, 3, 4] // false
console.log(containsDuplicate(nums2))
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] // true
console.log(containsDuplicate(nums3))
