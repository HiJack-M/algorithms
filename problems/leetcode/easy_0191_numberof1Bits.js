// 191. Number of 1 Bits

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0

  while (n != 0) {
    let rightOne = n & (~n + 1)
    count++
    n ^= rightOne
  }

  return count
}
