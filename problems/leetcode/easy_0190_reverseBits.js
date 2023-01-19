// 190. Reverse Bits

// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  if (!n || n < 0) return 0

  let nBinaryStr = n.toString(2)
  while (nBinaryStr.length < 32) {
    nBinaryStr = '0' + nBinaryStr
  }

  return parseInt(nBinaryStr.split('').reverse().join(''), 2)
}
