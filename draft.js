// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0

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

console.log(mySqrt(4)) // Output: 2
console.log(mySqrt(8)) // Output: 2
