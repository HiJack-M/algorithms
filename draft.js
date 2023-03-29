// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 * 【鸽笼原理】，由题意可得，n个笼子，若出现过，相应的“鸽笼”就会被占掉，我们将数字置为负数表示被占掉了。 再遍历一遍，如果“鸽笼”为正数就是没出现的数字。
 */
var findDisappearedNumbers = function (nums) {
  let ans = []
  if (!nums || nums.length == 0) return ans

  for (let n of nums) {
    nums[Math.abs(n) - 1] = -Math.abs(nums[Math.abs(n) - 1])
  }

  for (let [i, num] of nums.entries()) {
    if (num > 0) {
      ans.push(i + 1)
    }
  }

  return ans
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums1))

const nums2 = [1, 1]
console.log(findDisappearedNumbers(nums2))
