// 38. Count and Say

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// Given a positive integer n, return the nth term of the count-and-say sequence.

// Constraints: 1 <= n <= 30

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay_20230425 = function (n) {
  if (n < 1) return ''
  if (n === 1) return '1'

  let string = countAndSay(n - 1)
  let result = ''

  let i = 1
  let current = string[0]
  let count = 1
  while (i < string.length) {
    if (string[i] !== current) {
      result += count + current
      current = string[i]
      count = 1
    } else {
      count++
    }
    i++
  }

  return result + count + current
}

console.log(countAndSay_20230425(1))
console.log(countAndSay_20230425(2))
console.log(countAndSay_20230425(3))
console.log(countAndSay_20230425(4))

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n == 0) return null

  let Dp = new Array(n + 1)
  Dp[0] = 'dummy'
  Dp[1] = '1'

  if (n == 1) return Dp[1]

  let pre
  let k
  let curLetter
  let curCount
  let curAns
  for (let i = 2; i <= n; i++) {
    // say
    pre = Dp[i - 1]
    k = 0
    curAns = ''
    curLetter = null
    curCount = 0
    while (k < pre.length) {
      if (curLetter == null) {
        curLetter = pre[k]
        curCount = 1
      } else if (pre[k] == curLetter) {
        curCount++
      } else {
        curAns = curAns + curCount + curLetter
        curCount = 1
        curLetter = pre[k]
      }
      if (k == pre.length - 1) {
        curAns = curAns + curCount + curLetter
      }
      k++
    }
    Dp[i] = curAns
  }

  return Dp[n]
}

console.log(countAndSay(4)) //'1211'
