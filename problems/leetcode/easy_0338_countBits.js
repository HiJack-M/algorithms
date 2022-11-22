// 338. Counting Bits

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = []
  if (n == null || n == undefined) return ans

  for (let i = 0; i <= n; i++) {
    let divident = i
    let count = 0
    while (divident / 2 !== 0) {
      if (divident % 2 === 1) {
        count++
      }
      divident = parseInt(divident / 2)
    }
    ans.push(count)
  }

  return ans
}

console.log(countBits(5))
