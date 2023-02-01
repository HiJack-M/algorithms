// 39. Combination Sum

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ans = []
  if (!candidates || candidates.length === 0 || !target) return ans

  process(candidates, 0, [], target, ans)

  return ans
}

// 现在轮到 index 做决定要不要
const process = (nums, index, used, rest, ans) => {
  // base case
  if (index == nums.length) {
    if (rest == 0) {
      ans.push(used)
    }
    return
  }

  for (let count = 0; count * nums[index] <= rest; count++) {
    let curUse = new Array(count).fill(nums[index])
    process(nums, index + 1, [...used, ...curUse], rest - count * nums[index], ans)
  }
}

const candidates1 = [2, 3, 6, 7]
let target1 = 7
const candidates2 = [2, 3, 5]
let target2 = 8
const candidates3 = [2]
let target3 = 1
console.log(combinationSum(candidates1, target1))
console.log(combinationSum(candidates2, target2))
console.log(combinationSum(candidates3, target3))
