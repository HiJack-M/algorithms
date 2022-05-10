// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。

// 由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。

// 将最终结果插入 nums 的前 k 个位置后返回 k 。

// 不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || nums.length == 0) return 0

  let preI = 0 // 目前为止，最后一个有序的下标
  let curValue = nums[0] // 目前为止，最后一个有序的数值
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > curValue) {
      if (i == preI + 1) {
        curValue = nums[++preI]
      } else {
        curValue = nums[i]
        // swap(i, ++preI)
        nums[++preI] = nums[i]
      }
    }
  }
  return preI + 1
}

const arr1 = [0, 0, 1, 2, 2]
console.log(removeDuplicates(arr1))
const arr2 = [0, 1, 2]
console.log(removeDuplicates(arr2))

var removeDuplicatesPref = function(nums) {
  if (!nums || nums.length == 0) return 0

  let slow = 1
  let fast = 1
  while (fast < nums.length) {
    if (nums[fast] != nums[fast - 1]) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  return slow
}

console.log(removeDuplicatesPref(arr1))
console.log(removeDuplicatesPref(arr2))
