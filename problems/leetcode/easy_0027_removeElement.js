// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let left = 0 // left 指向下一个将要赋值的位置
  // right 指向当前将要处理的元素
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != val) {
      nums[left++] = nums[right]
    }
  }
  return left
}

const nums1 = [2, 3, 3]
console.log(removeElement(nums1, 3))

const nums2 = [3, 2, 2, 3]
console.log(removeElement(nums2, 3))

const nums3 = [0, 1, 2, 2, 3, 0, 4, 2]
console.log(removeElement(nums3, 2))

const nums4 = [1]
console.log(removeElement(nums4, 1))

const nums5 = [2, 2, 2]
console.log(removeElement(nums5, 2))

var removeElementPref = function(nums, val) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    if (nums[left] == val) {
      nums[left] = nums[right--]
    } else {
      left++
    }
  }
  return left
}

console.log(removeElementPref(nums1, 3))
console.log(removeElementPref(nums2, 3))
console.log(removeElementPref(nums3, 2))
console.log(removeElementPref(nums4, 1))
console.log(removeElementPref(nums5, 2))
