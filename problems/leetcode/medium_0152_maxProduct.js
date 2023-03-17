// 152. Maximum Product Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (!nums || nums.length == 0) return 0

  let ans = nums[0]
  let min = nums[0] // 以每个点结尾的最小积（这样后面就可以延续了）
  let max = nums[0] // 以每个点结尾的最大积

  // 以 i 结尾的最小积、最大积
  for (let i = 1; i < nums.length; i++) {
    let curMin = Math.min(nums[i], Math.min(nums[i] * min, nums[i] * max))
    let curMax = Math.max(nums[i], Math.max(nums[i] * min, nums[i] * max))
    min = curMin // 这里不比较，因为一定要以 i 结尾，不断，所以每个都只能取当下
    max = curMax
    ans = Math.max(max, ans)
  }

  return ans
}

console.log(maxProduct([0, 2]))
