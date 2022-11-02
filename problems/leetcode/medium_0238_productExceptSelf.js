// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  if (!nums || nums.length == 0) return []

  let L = [] // 存放每个数的左侧乘积
  L[0] = 1
  for (let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1]
  }

  let R = []
  R[nums.length - 1] = 1
  for (let i = nums.length - 2; i >= 0; i--) {
    R[i] = R[i + 1] * nums[i + 1]
  }

  let ans = []
  for (let i = 0; i < nums.length; i++) {
    ans[i] = L[i] * R[i]
  }

  return ans
}

const arr1 = [1, 2, 3, 4]
console.log(productExceptSelf(arr1))
