// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums || nums.length == 0) return 0

  let numsSet = new Set(nums)

  let longest = 0
  for (let num of numsSet) {
    // 找到某串子序列的最小值
    if (!numsSet.has(num - 1)) {
      let curNum = num
      let curLength = 1

      while (numsSet.has(curNum + 1)) {
        curNum = curNum + 1
        curLength++
      }

      longest = Math.max(longest, curLength)
    }
  }

  return longest
}

const nums1 = [100, 4, 200, 1, 3, 2]

console.log(longestConsecutive(nums1))
