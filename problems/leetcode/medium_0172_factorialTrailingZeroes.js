// 172. Factorial Trailing Zeroes

// Given an integer n, return the number of trailing zeroes in n!.

// Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n === 0) return 0

  let count = 0
  for (let i = 1; i <= n; i++) {
    let cur = i
    while (cur > 0) {
      if (cur % 5 === 0) {
        count++
        cur /= 5
      } else {
        break
      }
    }
  }

  return count
}

console.log(trailingZeroes(3))
console.log(trailingZeroes(5))
console.log(trailingZeroes(0))

// 思路：
// 首先末尾有多少个 0 ，只需要给当前数乘以一个 10 就可以加一个 0。
// 再具体对于 5!，也就是 5 * 4 * 3 * 2 * 1 = 120，我们发现结果会有一个 0，原因就是 2 和 5 相乘构成了一个 10。而对于 10 的话，其实也只有 2 * 5 可以构成，所以我们只需要找有多少对 2/5。
// 含有 2 的因子每两个出现一次，含有 5 的因子每 5 个出现一次，所有 2 出现的个数远远多于 5，换言之找到一个 5，一定能找到一个 2 与之配对。所以我们只需要找有多少个 5。

// 作者：windliang
// 链接：https://leetcode.cn/problems/factorial-trailing-zeroes/solutions/47030/xiang-xi-tong-su-de-si-lu-fen-xi-by-windliang-3/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroesPref = function (n) {
  if (n === 0) return 0

  let count = 0
  while (n > 0) {
    count += parseInt(n / 5)
    n = parseInt(n / 5)
  }

  return count
}

console.log(trailingZeroesPref(3))
console.log(trailingZeroesPref(5))
console.log(trailingZeroesPref(0))

// 规律就是每隔 5 个数，出现一个 5，每隔 25 个数，出现 2 个 5，每隔 125 个数，出现 3 个 5... 以此类推。

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroesRecursive = function (n) {
  if (n < 5) return 0
  n = parseInt(n / 5)
  return n + trailingZeroesRecursive(n)
}

console.log(trailingZeroesRecursive(3))
console.log(trailingZeroesRecursive(5))
console.log(trailingZeroesRecursive(0))
