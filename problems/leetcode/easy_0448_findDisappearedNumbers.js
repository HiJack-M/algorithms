// 448. Find All Numbers Disappeared in an Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let ans = []
  if (!nums || nums.length == 0) return ans

  let help = new Array(nums.length + 1)
  help.fill(false)
  help[0] = true // 长度 n + 1
  for (let i = 0; i < nums.length; i++) {
    help[nums[i]] = true
  }
  for (let i = 1; i < help.length; i++) {
    if (help[i] == false) {
      ans.push(i)
    }
  }
  return ans
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums1))

const nums2 = [1, 1]
console.log(findDisappearedNumbers(nums2))
