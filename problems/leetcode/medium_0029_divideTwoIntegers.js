// 29. Divide Two Integers

// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

// Constraints:

// -2 ** 31 <= dividend, divisor <= 2 ** 31 - 1
// divisor != 0

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend == 0) return 0

  const INT_MAX = Math.pow(2, 31) - 1 // 2147483647
  const INT_MIN = -Math.pow(2, 31) // -2147483648

  // 唯一会发生 overflow 的情况（给定参数都不会越界，所以都为正数的话是不会越界的，只有 INT_MIN * -1 才会越界）
  if (dividend == INT_MIN && divisor == -1) return INT_MAX

  // 取符号位，异或来判断是否异号
  let neg_flag = ((dividend >>> 31) ^ (divisor >>> 31)) == 1

  // 其實負數可以表達的範圍反而更大，何不就用負數來進行操作
  dividend = -Math.abs(dividend)
  divisor = -Math.abs(divisor)

  let half_min = INT_MIN >> 1 // 在加倍 divisor 時候，要避免發生 overflow 狀況，當 divisor 已經倍增到大於 INT_MIN 的一半時，就應該停止遞增。
  let result = 0

  while (dividend <= divisor) {
    let big_divisor = divisor
    let power_of_two = -1
    // 先让除数追到被除数的一半左右（在加倍 divisor 時候，要避免發生 overflow 狀況，當 divisor 已經倍增到大於 INT_MIN 的一半時，就應該停止遞增。）
    while (big_divisor > half_min && big_divisor * 2 >= dividend) {
      big_divisor += big_divisor
      power_of_two += power_of_two // 指数级翻倍
    }
    dividend -= big_divisor
    result += power_of_two
  }

  return neg_flag ? result : -result
}

// let dividend1 = 10
// let divisor1 = 3
// let dividend2 = 7
// let divisor2 = -3
// let dividend3 = 1
// let divisor3 = -1
let dividend4 = -2147483648
let divisor4 = 2
// console.log(divide(dividend1, divisor1))
// console.log(divide(dividend2, divisor2))
// console.log(divide(dividend3, divisor3))
console.log(divide(dividend4, divisor4))

// google 出来第一的，勉强能看懂的题解
// https://haogroot.com/2022/06/18/leetcode-29/
// 這個方法有效降低時間複雜度到 O ( log^2 n ) 。
