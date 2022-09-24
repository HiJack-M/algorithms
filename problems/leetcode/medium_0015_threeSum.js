// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ans = []
  if (!nums || nums.length < 3) return []
  if (nums.length == 3) {
    if (nums[0] + nums[1] + nums[2] == 0) {
      ans.push(nums)
    }
    return ans
  }

  nums.sort((a, b) => a - b) // 可以自己写 sort

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let res = nums[i] + nums[l] + nums[r]
      if (res == 0) {
        ans.push([nums[i], nums[l], nums[r]])
        while (nums[l] == nums[l + 1]) l++
        while (nums[r] == nums[r - 1]) r--
        l++
        r--
      } else if (res < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return ans
}
