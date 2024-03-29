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
  if (!candidates || candidates.length == 0) return ans
  process(candidates, target, 0, [], ans)
  return ans
}

const process = (candidates, restAim, index, path, ans) => {
  if (index > candidates.length) return

  if (restAim == 0) {
    ans.push([...path])
    return
  }
  if (restAim < 0) return

  for (let i = 0; i * candidates[index] <= restAim; i++) {
    let ii = i
    while (ii > 0) {
      path.push(candidates[index])
      ii--
    }
    process(candidates, restAim - i * candidates[index], index + 1, path, ans)
    ii = i
    while (ii > 0) {
      path.pop()
      ii--
    }
  }
}

const candidates1 = [2, 3, 6, 7]
let target1 = 7

console.log(combinationSum(candidates1, target1))

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumBackTracking = function (candidates, target) {
  let ans = []
  if (!candidates || candidates.length == 0) return ans
  processBackTracking(candidates, target, 0, [], ans)
  return ans
}

const processBackTracking = (candidates, restAim, index, combine, ans) => {
  if (index > candidates.length) return

  if (restAim == 0) {
    ans.push([...combine])
    return
  }
  if (restAim < 0) return

  processBackTracking(candidates, restAim, index + 1, [...combine], ans)

  if (restAim >= candidates[index]) {
    processBackTracking(
      candidates,
      restAim - candidates[index],
      index,
      [...combine, candidates[index]],
      ans
    )
  }
}

console.log(combinationSumBackTracking(candidates1, target1))

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 2023.02.01
 * 这跟凑钱找补是一样的思路
 */
var combinationSumSelfThinking = function (candidates, target) {
  let ans = []
  if (!candidates || candidates.length === 0 || !target) return ans

  processSelfThinking(candidates, 0, [], target, ans)

  return ans
}

// 现在轮到 index 做决定要不要
const processSelfThinking = (nums, index, used, rest, ans) => {
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
