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

var countBitsDp = function (n) {
  const bit = new Array(n + 1).fill(0)

  // 对于正整数 x，如果可以知道最大的正整数 y，使得 y ≤ x 且 y 是 2 的整数次幂，则 y 的二进制表示中只有最高位是 1，其余都是 0，此时称 y 为 x 的「最高有效位」。
  // 令 z = x − y，显然 0 ≤ z < x，则 bits[x] = bits[z] + 1。

  let highBit = 0
  for (let i = 1; i <= n; i++) {
    // 如果正整数 y 是 2 的整数次幂，则 y 的二进制表示中只有最高位是 1，其余都是 0，因此 y & (y−1) = 0
    // 随着 i 的变大，在不断试图得出更大的”最高有效位“
    if ((i & (i - 1)) == 0) {
      highBit = i
    }
    bit[i] = bit[i - highBit] + 1
  }

  return bit
}

console.log(countBitsDp(5))
