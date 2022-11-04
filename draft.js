// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

import { Node, Edge, Graph } from './lecture-code/structure/graph.js'

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  if (!nums || nums.length < 2) return -1

  let haha = new Node(1)
  console.log(haha)

  // 都是下标，变量找下标存起来，所以本该从 0 开始
  // slow 走一步相当于去找 nums[0] 指向的下标，fast 走两步相当于 nums[nums[0]]
  let slow = nums[0]
  let fast = nums[nums[0]]
  while (slow != fast) {
    fast = nums[nums[fast]]
    slow = nums[slow]
  }
  // fast 回到最初的原点
  fast = 0
  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}

findDuplicate([0, 1, 2, 3, 4, 4])
