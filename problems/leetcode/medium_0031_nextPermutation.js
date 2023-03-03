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
  if (!nums || nums.length == 0) return

  let N = nums.length

  // 找到第一组顺序对，取到小值 (较小值尽量靠右)
  let smallIndex = N - 2
  while (smallIndex >= 0 && nums[smallIndex] >= nums[smallIndex + 1]) {
    smallIndex--
  }

  // 找到后方逆序中的刚好比较小值大的最小的那个值
  if (smallIndex >= 0) {
    let bigIndex = N - 1
    while (bigIndex > smallIndex && nums[bigIndex] <= nums[smallIndex]) {
      bigIndex--
    }
    swap(nums, smallIndex, bigIndex)
  }

  // 从下标为 small + 1 出开始顺序排序
  reverse(nums, smallIndex + 1, N - 1)
}

const nums1 = [1, 2, 3]
nextPermutation(nums1)
console.log(nums1) // output: [ 1, 3, 2 ]

const nums2 = [3, 2, 5, 4, 1, 0]
nextPermutation(nums2)
console.log(nums2) // output: [ 3, 4, 0, 1, 2, 5 ]

// 思路：

// 前提知道的规律：
// 1. 从右到左的某一部分，降序，代表已经是这部分最大的序列

// 要得到一个方法：
// 1. 得到一个大于当前序列的新序列
// 2. 变大的幅度尽可能小

// 具体一点的原则：
// 1. 将一个左边的「较小数」与一个右边的「较大数」交换，再将交换之后「较大数」位置右边的数字按照升序排列（本是降序）
// 2. 「较小数」尽量靠右，「较大数」尽量较小

// 具体方法：
// 1. 从右至左，找到第一个顺序对 nums[i] 和 nums[i + 1]，得到「较小数」
// 2. 在 nums[i + 1] 到最右中，从右至左，找到第一个比 nums[i] 大的「较大数」
// 3. 交换两数
// 4. 将「较大数」右侧的数升序排列
