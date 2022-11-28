// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (!x) return 0

  let ans = 0
  let remainder = 0
  while (x !== 0) {
    remainder = x % 10

    // 对比最后两位（当位数达到了才开始比较）
    // 最大值 2147483647
    if (ans > 214748364 || (ans == 214748364 && remainder > 7)) {
      return 0
    }
    //判断是否 小于 最小32位整数 -2147483648
    if (ans < -214748364 || (ans == -214748364 && remainder < -8)) {
      return 0
    }
    ans = ans * 10 + remainder
    x = parseInt(x / 10)
  }

  return ans
}

let x1 = 123 // 321
let x2 = -123 // -321
let x3 = 120 // 21

console.log(reverse(x1))
console.log(reverse(x2))
console.log(reverse(x3))
