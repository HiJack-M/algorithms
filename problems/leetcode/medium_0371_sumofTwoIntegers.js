// 371. Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b != 0) {
    const carry = (a & b) << 1 // 先找到进位
    a = a ^ b // 无进位的相加结果
    b = carry // 要是有进位，就循环相加；要是无进位，直接返回 a(无进位的相加结果)
  }

  return a
}

// 将整数 a 和 b 的和，拆分为 a 和 b 的无进位加法结果与进位结果的和

console.log(getSum(1, 2))
console.log(getSum(2, 3))
