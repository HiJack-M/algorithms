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
