// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let ans = []
  if (!nums || nums.length == 0) return ans
  process(nums, 0, ans)
  return ans
}

const process = (nums, index, ans) => {
  if (index == nums.length) {
    ans.push([...nums]) // 稍后尝试不复制新数组
  }

  for (let i = index; i < nums.length; i++) {
    swap(nums, i, index)
    process(nums, index + 1, ans)
    swap(nums, i, index)
  }
}

console.log(permute([1, 2, 3]))
