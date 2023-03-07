// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (!nums) return null
  if (nums.length == 0) return []

  let ans = [] // calc leftProduct first
  ans[0] = 1
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1]
  }

  let R = 1 // rightProduct
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * R
    R = R * nums[i]
  }

  return ans
}

const nums1 = [1, 2, 3, 4]
console.log(productExceptSelf(nums1)) // [24,12,8,6]

const nums2 = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums2)) // [0,0,9,0,0]
