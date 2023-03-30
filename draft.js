// 338. Counting Bits

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [0]
  if (n === 0) return ans

  for (let i = 1; i <= n; i++) {
    let count = 0
    let num = i
    let rightOne
    while (num !== 0) {
      rightOne = num & (~num + 1)
      count++
      num = num ^ rightOne
    }
    ans.push(count)
  }

  return ans
}

console.log(countBits(2))
console.log(countBits(5))
