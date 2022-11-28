// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let ans = []
  if (!nums || nums.length === 0) return ans

  let help = new Array(nums.length + 1).fill(false) // 下标 0 无用

  for (let i = 0; i < nums.length; i++) {
    help[nums[i]] = true
  }

  for (let i = 1; i < help.length; i++) {
    if (help[i] == false) {
      ans.push(i)
    }
  }

  return ans
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums1))
