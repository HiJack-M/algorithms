// 91. Decode Ways

// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"

// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (!s) return 0

  let Dp = new Array(s.length + 1).fill(-1)
  Dp[s.length] = 1
  return process(s, 0, Dp)
}

// 轮到 index 的点做决定
const process = (s, index, Dp) => {
  if (Dp[index] !== -1) return Dp[index]
  // if (index == s.length) return 1

  // base case
  if (s[index] === '0') {
    Dp[index] = 0
    return 0
  }

  let ways = 0
  ways += process(s, index + 1, Dp)

  if (index + 1 < s.length && parseInt(s.slice(index, index + 2)) <= 26) {
    ways += process(s, index + 2, Dp)
  }

  Dp[index] = ways
  return ways
}

let s1 = '12'
let s2 = '226'
let s3 = '06'
console.log(numDecodings(s1))
console.log(numDecodings(s2))
console.log(numDecodings(s3))

/**
 * @param {string} s
 * @return {number}
 */
var numDecodingsDp = function (s) {
  if (!s) return 0

  let Dp = new Array(s.length + 1).fill(-1)
  Dp[s.length] = 1

  for (let index = s.length - 1; index >= 0; index--) {
    if (s[index] === '0') {
      Dp[index] = 0
      continue
    }

    let ways = 0
    ways += Dp[index + 1]
    if (index + 1 < s.length && parseInt(s.slice(index, index + 2)) <= 26) {
      ways += Dp[index + 2]
    }

    Dp[index] = ways
  }

  return Dp[0]
}

console.log(numDecodingsDp(s1))
console.log(numDecodingsDp(s2))
console.log(numDecodingsDp(s3))
