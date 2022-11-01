// 215. Kth Largest Element in an Array

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// You must solve it in O(n) time complexity.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (!nums || nums.length == 0) return null
  return process(nums, 0, nums.length - 1, nums.length - k)
}

const process = (nums, l, r, index) => {
  let i = partition(nums, l, r)
  if (i == index) {
    return nums[i]
  } else if (i < index) {
    return process(nums, i + 1, r, index)
  } else {
    return process(nums, l, i - 1, index)
  }
}

const partition = (nums, l, r) => {
  let pivot = nums[r] // 是否有必要改成 random
  let smallI = l - 1
  let bigI = r + 1
  let p = l
  while (p < bigI) {
    if (nums[p] < pivot) {
      swap(nums, ++smallI, p++)
    } else if (nums[p] > pivot) {
      swap(nums, --bigI, p)
    } else {
      p++
    }
  }
  return smallI + 1
}

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr1 = [3, 2, 1, 5, 6, 4]

console.log(findKthLargest(arr1, 2))
