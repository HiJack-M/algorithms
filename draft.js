// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let ans = []
  if (!nums || nums.length === 0) return ans

  let N = nums.length

  let index

  for (let num of nums) {
    index = (num - 1) % N
    if (nums[index] <= N) {
      nums[index] += N
    }
  }

  // 要用 .entries() 是因为前面的解构利用了 iterable 内部结构 [key, value]
  for (let [i, num] of nums.entries()) {
    if (num <= N) {
      ans.push(i + 1)
    }
  }

  return ans
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums1))
