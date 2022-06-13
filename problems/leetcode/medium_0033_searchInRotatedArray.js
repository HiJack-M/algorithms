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
  if (!nums) return -1

  let k = findRotatePoint(nums)
  if (target <= nums[nums.length - 1]) {
    return binarySearch(nums, k + 1, nums.length - 1, target)
  } else {
    return binarySearch(nums, 0, k, target)
  }
};

// 返回最大值所在的下标
const findRotatePoint = (nums) => {
  if (!nums || nums.length < 2 || nums[0] < nums[nums.length - 1]) return -1

  // 构建左右两侧的淘汰逻辑
  let l = 0
  let r = nums.length - 1
  let mid
  while (l <= r) {
    mid = l + ((r - l) >> 1)
    // l > mid && r > mid   k 在左侧
    if (nums[l] > nums[mid] && nums[r] > nums[mid]) {
      r = mid
    // l < mid && r < mid   k 在右侧
    } else if (nums[l] < nums[mid] && nums[r] < nums[mid]) {
      l = mid
    // k 不在其中，或不成立的情况
    } else {
      break
    }
  }
  return l
}

console.log(findRotatePoint(arr1))
console.log(findRotatePoint(arr2))
console.log(findRotatePoint(arr3))
console.log(findRotatePoint(arr4))
console.log(findRotatePoint(arr5))

const binarySearch = (nums, left, right, target) => {
  if (left > right) return -1
  if (left == right) {
    if (target == nums[left]) return left
    else return -1
  }
  let l = left
  let r = right
  let mid
  while (l < r) {
    mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return nums[l] == target ? l : -1
}

const arr1 = [5,6,7,0,1,2,4]
const arr2 = [4,5,6,7,0,1,2]
const arr3 = [0,1,2,3]
const arr4 = [7,0,1,2,4,5,6]
const arr5 = [1,2,4,5,6,7,0]

console.log('------')

console.log(search(arr1, 0))
console.log(search(arr2, 3))
