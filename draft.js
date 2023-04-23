// 66. Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (!digits || digits.length === 0) return

  let carry = 0
  let N = digits.length
  for (let i = N - 1; i >= 0; i--) {
    if (i === N - 1) {
      digits[i] += 1
    }
    digits[i] += carry

    carry = Math.floor(digits[i] / 10)

    if (carry === 0) break // // 再无进位就提前停止
    digits[i] = digits[i] % 10
  }

  if (carry === 1) {
    digits.unshift(1)
  }

  return digits
}

const digits1 = [1, 2, 3]
console.log(plusOne(digits1)) // Output: [1,2,4]

const digits2 = [4, 3, 2, 1]
console.log(plusOne(digits2)) // Output: [4,3,2,2]

const digits3 = [9]
console.log(plusOne(digits3)) // Output: [1,0]
