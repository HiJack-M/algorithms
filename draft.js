// 152. Maximum Product Subarray

// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums || nums.length === 0) return 0

  let ans = nums[0]
  let min = nums[0] // 以每个点结尾的最小积（这样后面就可以延续了）
  let max = nums[0] // 以每个点结尾的最大积
  for (let i = 1; i < nums.length; i++) {
    let curMin = Math.min(nums[i], Math.min(min * nums[i], max * nums[i]))
    let curMax = Math.max(nums[i], Math.max(min * nums[i], max * nums[i]))
    min = curMin
    max = curMax
    ans = Math.max(ans, max)
  }

  return ans
}

const nums1 = [2, 3, -2, 4]
console.log(maxProduct(nums1))
