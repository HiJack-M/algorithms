// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (!n || n <= 0) return false

  const calculated = new Set()
  calculated.add(n)

  while (n != 1) {
    n = bitSquareSum(n)
    if (calculated.has(n)) {
      return false
    }
    calculated.add(n)
  }

  return true
}

const bitSquareSum = (n) => {
  let sum = 0
  let cur

  while (n > 0) {
    cur = n % 10
    sum += cur * cur
    n = parseInt(n / 10)
  }

  return sum
}

console.log(isHappy(19))
console.log(isHappy(2))

// 快慢指针法
// 把转换过程中的每一个数看作单链表的一个节点，将 1 看作单链表的最后一个元素，如果无法从 n 转换为 1，说明单链表中存在环。

// 1. 初始化两个数 slow 和 fast 为 n
// 2. 在 slow 不等于 fast 的情况下，每次 slow 转换一次，fast 转换两次。
// 3. 当 slow 等于 fast 时，如果 slow == 1 则 true，反之 false。

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappyTwoPoints = function (n) {
  if (!n || n <= 0) return false

  let slow = n
  let fast = n
  do {
    slow = bitSquareSum(slow)
    fast = bitSquareSum(fast)
    fast = bitSquareSum(fast)
  } while (slow !== fast) // 要是无环则会都停在 1

  return slow === 1
}

console.log(isHappyTwoPoints(19))
console.log(isHappyTwoPoints(2))
