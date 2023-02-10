/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  if (!nums || nums.length < 2) return null

  let slow = nums[0]
  let fast = nums[nums[0]]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }

  fast = 0
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return fast
}
