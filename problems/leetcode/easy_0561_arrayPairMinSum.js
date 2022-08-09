// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
//
// 返回该 最大总和 。

// 链接：https://leetcode.cn/problems/array-partition

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const quickSort = (arr) => {
  if (!arr || arr.length < 2) return
  sortProcess(arr, 0, arr.length- 1)
}

const sortProcess = (arr, l, r) => {
  if (l >= r) return
  const equalPart = netherlandProcess(arr, l, r, arr[r])
  sortProcess(arr, l, equalPart[0] -1)
  sortProcess(arr, equalPart[1] + 1, r)
}

const netherlandProcess = (arr, l, r, num) => {
  let smallI = l - 1
  let bigI = r + 1
  let index = l
  while (index < bigI) {
    if (arr[index] < num) {
      swap(arr, ++smallI, index++)
    } else if (arr[index] > num) {
      swap(arr, index, --bigI)
    } else {
      index++
    }
  }
  return [smallI + 1, bigI - 1]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
  if (!nums || nums.length == 0) return 0
  quickSort(nums)
  let sum = 0
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }
  return sum
};
