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

  let ans = [] // 先存放每个数的左侧乘积
  ans[0] = 1
  for (let i = 1; i < nums.length; i++) {
    ans[i] = ans[i - 1] * nums[i - 1]
  }

  // R 为右侧所有元素的乘积
  // 刚开始右边没有元素，所以 R = 1
  let R = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * R
    R *= nums[i]
  }

  return ans
}

const arr1 = [1, 2, 3, 4]
console.log(productExceptSelf(arr1))
