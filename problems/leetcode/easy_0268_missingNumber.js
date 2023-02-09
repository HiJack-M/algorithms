// 268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let N = nums.length

  let xor = 0

  for (let i = 0; i < N; i++) {
    xor ^= nums[i]
  }

  for (let i = 0; i <= N; i++) {
    xor ^= i
  }

  return xor
}

// 在这 n 个数的后面添加从 0 到 n 的每个整数，则添加了 n+1 个整数，共有 2n+1 个整数。
// 在 2n+1 个整数中，丢失的数字只在后面 n+1 个整数中出现一次，其余的数字在前面 n 个整数中（即数组中）和后面 n+1 个整数中各出现一次，即其余的数字都出现了两次。

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_Gauss = function (nums) {
  const n = nums.length
  let total = Math.floor(((n + 0) * (n + 1)) / 2) // 高斯求和公式：（首项 + 末项）* 项数 / 2
  let arrSum = 0
  for (let i = 0; i < n; i++) {
    arrSum += nums[i]
  }
  return total - arrSum
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_sort = function (nums) {
  let N = nums.length

  nums.sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
    if (nums[i] != i) return i
  }
  return N
}
