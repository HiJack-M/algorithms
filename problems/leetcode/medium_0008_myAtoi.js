// 8. String to Integer (atoi)

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (!s) return 0

  s = s.trim()
  let flag = 1 // 默认 1(代表正数)，若出现 ‘-’ 则 flag = -1
  let p = 0
  let oriNum = 0
  let afterDot = 0 // 管理小数点后的数字 (-1 代表还未出现过小数点)

  // 先过滤符号位
  if (s[0] == '-' || s[0] == '+') {
    flag = s[0] == '-' ? -1 : 1
    s = s.substring(1)
  }

  while (s[0] == '0') {
    s = s.substring(1)
  }

  while (p < Math.min(s.length, 11)) {
    if (/[0-9]/.test(s[p])) {
      // 数字
      if (afterDot == 0) {
        oriNum = oriNum * 10 + +s[p]
      } else {
        // 处理小数
        oriNum = oriNum + +s[p] / Math.pow(10, afterDot++)
      }
      p++
    } else if (s[p] == '.' && afterDot == 0) {
      // 首次出现小数点
      afterDot = 1
      p++
    } else {
      break
    }
  }

  if (flag == 1) {
    return Math.min(flag * oriNum, Math.pow(2, 31) - 1)
  } else {
    return Math.max(flag * oriNum, Math.pow(2, 31) * -1)
  }
}

let s1 = '42'
let s2 = '    -42'
let s3 = '4193 with words'
console.log(myAtoi(s1))
console.log(myAtoi(s2))
console.log(myAtoi(s3))
