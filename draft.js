// 31. Next Permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const reverse = (arr, start, end) => {
  while (start < end) {
    swap(arr, start++, end--)
  }
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (!nums || nums.length == 0) return nums

  // 找到第一组顺序对，取到小值 (较小值尽量靠右)
  let small = -1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      small = i
      break
    }
  }
  // 找到逆序中的刚好比较小值大的最小的那个值
  let big = -1
  for (let i = nums.length - 1; i > small; i--) {
    if (nums[i] > nums[small]) {
      big = i
      break
    }
  }
  if (small != -1 && big != -1) {
    swap(nums, small, big)
  }
  // 从下标为 small + 1 出开始顺序排序
  reverse(nums, small + 1, nums.length - 1)
}
