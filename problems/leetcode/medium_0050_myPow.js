// 50. Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., x^^n).

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    if (x !== 0) return 1
    else return NaN
  }

  let negFlag = n < 0
  n = Math.abs(n)

  let result = powInner(x, n)
  if (negFlag) {
    result = 1 / result
  }
  return result
}

const powInner = (x, n) => {
  // base case
  if (n == 0) return 1
  if (n == 1) return x

  return powInner(x * x, Math.floor(n / 2)) * powInner(x, n % 2)
}

console.log(myPow(2.0, 10))
console.log(myPow(2.0, -2))
