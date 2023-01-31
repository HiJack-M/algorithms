// 204. Count Primes

// Given an integer n, return the number of prime numbers that are strictly less than n.
// (A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers.)

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1)

  let ans = 0

  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      // 从 2 开始，2 是素数
      ans += 1

      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }

  return ans
}

console.log(countPrimes(6))
console.log(countPrimes(10))
console.log(countPrimes(11))
console.log(countPrimes(20))
console.log(countPrimes(10000))
console.log(countPrimes(499979))

// 该算法由希腊数学家厄拉多塞（Eratosthenes）提出，称为厄拉多塞筛法，简称埃氏筛。
