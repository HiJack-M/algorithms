// 78. Subsets

// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = []
  if (!nums || nums.length == 0) return ans

  const factory = (index, cur) => {
    if (index == nums.length) {
      ans.push(cur)
      return
    }

    factory(index + 1, [...cur, nums[index]])
    factory(index + 1, [...cur])
  }
  factory(0, [])

  return ans
}

const nums1 = [1, 2, 3]
const nums2 = [0]
console.log(subsets(nums1))
console.log(subsets(nums2))
