// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 找到第一个降序对，找到 pivot，分为两部分
  // 确定 target 所在范围处于哪个部分
  // 在锁定的部分使用二分法
  if (!nums || nums.length == 0) return -1
  if (nums.length == 1) return nums[0] == target ? 0 : -1

  let pivot = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      pivot = i + 1
      break
    }
  }

  if (pivot == -1) {
    // 整体升序
    return divideAndFind(nums, 0, nums.length - 1, target)
  } else {
    // 以 pivot 断层
    if (nums[0] > target) {
      return divideAndFind(nums, pivot, nums.length - 1, target)
    } else {
      return divideAndFind(nums, 0, pivot - 1, target)
    }
  }
}

const divideAndFind = (arr, i, j, target) => {
  while (i <= j) {
    let mid = i + ((j - i) >> 1)
    if (arr[mid] == target) {
      return mid
    } else if (arr[mid] > target) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }
  return -1
}

const arr2 = [4, 5, 6, 7, 0, 1, 2]
console.log(search(arr2, 3))
