// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums || nums.length === 0) return 0
  if (nums.length === 1) return 1

  let fast = 1
  let slow = 0
  while (fast < nums.length) {
    if (nums[fast] > nums[slow]) {
      nums[++slow] = nums[fast++]
    } else {
      fast++
    }
  }

  return slow + 1
}

const nums1 = [1, 1, 2]
console.log(removeDuplicates(nums1))

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums2))
