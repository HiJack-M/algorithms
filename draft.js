// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (!x || x === 0) return 0

  let ans = 0
  while (x !== 0) {
    let remainder = x % 10
    if (ans > 214748364 || (ans == 214748364 && remainder > 7)) return 0
    if (ans < -214748364 || (ans == 214748364 && remainder < -8)) return 0

    ans = ans * 10 + remainder
    x = parseInt(x / 10)
  }

  return ans
}

console.log(reverse(123))
console.log(reverse(-321))
console.log(reverse(120))
