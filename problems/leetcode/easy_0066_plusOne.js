// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (!digits || digits.length == 0) return []

  let carry = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i == digits.length - 1) {
      digits[i] = digits[i] + 1
    }
    digits[i] += carry
    carry = parseInt(digits[i] / 10)
    if (carry == 0) break // 再无进位就提前停止

    digits[i] = digits[i] % 10
  }

  if (carry == 1) {
    digits.unshift(1)
  }

  return digits
}

const digits1 = [1, 2, 3]
const digits2 = [4, 3, 2, 1]
const digits3 = [9]

console.log(plusOne(digits1))
console.log(plusOne(digits2))
console.log(plusOne(digits3))
