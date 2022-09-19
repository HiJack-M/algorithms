// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let prevNumsMap = {} // 用对象充当 map，key 为对应数字，value 为对应数字的值（JS 也可直接尝试用 Map 结构）
  for (let i = 0; i < nums.length; i++) {
    let matchNum = target - nums[i]
    if (prevNumsMap[matchNum] != undefined) {
      return [i, prevNumsMap[matchNum]]
    } else {
      prevNumsMap[nums[i]] = i
    }
  }
}

const nums1 = [2, 7, 11, 15]
const target1 = 9
console.log(twoSum(nums1, target1))
