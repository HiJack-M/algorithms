// 326. Power of Three

// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3^^x.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false
  if (n == 1) return true

  let digitsSum = [...n.toString()].reduce((prev, cur) => {
    return +prev + +cur
  }, 0)
  if (digitsSum % 3 !== 0) return false

  while (n >= 3) {
    n = n / 3
  }

  return n == 1
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(15))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(-1))

var isPowerOfThreeImproved = function (n) {
  return n > 0 && 1162261467 % n === 0
}

// 在题目给定的 32 位有符号整数的范围内，最大的 3 的幂为 Math.pow(3, 19)=1162261467。我们只需要判断 n 是否是 Math.pow(3, 19) 的约数即可。
