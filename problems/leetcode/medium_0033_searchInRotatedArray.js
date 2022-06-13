// 整数数组 nums 按升序排列，数组中的值 互不相同 。
//
// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
//
// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || !target) return -1

  let k = findRotatePoint(nums)
  if (target < nums[k]) {
    return binarySearch(nums, 0, k, target)
  } else {
    return binarySearch(nums, k + 1, nums.length - 1, target)
  }
};

const findRotatePoint = (nums) => {
  if (!nums || nums.length < 2 || nums[0] < nums[nums.length - 1]) return -1

  let l = 0
  let r = nums.length - 1
  let mid
  while (l <= r) {
    mid = l + ((r - l) >> 1)
    if (nums[l] > nums[mid] && nums[r] > nums[mid]) {
      r = mid
    } else if (nums[l] < nums[mid] && nums[r] < nums[mid]) {
      l = mid
    } else {
      break
    }
  }
  return l
}

const binarySearch = (nums, left, right, target) => {
  let l = left
  let r = right
  let mid
  while (l < r) {
    mid = l + ((r - 1) >> 1)
    if (nums[mid] > target) {
      r = mid
    } else if (nums[mid] < target) {
      l = mid
    } else {
      break
    }
  }
  return l
}

const arr1 = [5,6,7,0.1,2,4]
const arr2 = [4,5,6,7,0,1,2]
const arr3 = [0,1,2,3]
const arr4 = [7,0,1,2,4,5,6]
const arr5 = [1,2,4,5,6,7,0]

console.log(findRotatePoint(arr1))
console.log(findRotatePoint(arr2))
console.log(findRotatePoint(arr3))
console.log(findRotatePoint(arr4))
console.log(findRotatePoint(arr5))

console.log('------')

console.log(search(arr1, 0))
console.log(search(arr2, 3))
