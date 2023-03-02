// 454. 4Sum II

// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let Dp = new Array(5)
  for (let i = 0; i < Dp.length; i++) {
    Dp[i] = []
  }

  const process = (prevSum, index, Dp) => {
    if (Dp[index][prevSum] != undefined) return Dp[index][prevSum]

    if (index == 4) {
      return prevSum === 0 ? 1 : 0
    }

    let ans = 0
    let curArr = arguments[index]
    for (let i = 0; i < curArr.length; i++) {
      ans += process(prevSum + curArr[i], index + 1, Dp)
    }
    Dp[index][prevSum] = ans
    return ans
  }

  return process(0, 0, Dp)
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
