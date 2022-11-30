// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

/**
 * 最简陋版
 * @param {number} x
 * @return {number}
 */
var mySqrtPoor = function (x) {
  if (!x || x < 0) return null

  let sqrt = 0
  while (sqrt * sqrt <= x) {
    sqrt++
  }

  return sqrt - 1
}

let x1 = 4
let x2 = 8
console.log(mySqrt(x1))
console.log(mySqrt(x2))

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (!x || x < 0) return null

  let ans = -1
  let l = 0
  let r = x
  while (l <= r) {
    let mid = l + ((r - l) >> 1)
    if (mid * mid <= x) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans
}
