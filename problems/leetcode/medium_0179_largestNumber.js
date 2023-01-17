// 179. Largest Number

// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (!nums || nums.length === 0) return null

  // 先桶排序
  let baseBucket = {}
  for (let i = 0; i < nums.length; i++) {
    let highestBit = parseInt(nums[i].toString()[0])
    if (baseBucket[highestBit] == undefined) {
      baseBucket[highestBit] = [nums[i].toString()]
    } else {
      baseBucket[highestBit].push(nums[i].toString())
    }
  }

  // 每个子数组内部排序
  for (let key in baseBucket) {
    // 妈呀字典序大法啊你给我记着！！！
    baseBucket[key].sort((a, b) => b + a - (a + b))
  }

  let bucketArr = []
  for (let i of Object.values(baseBucket)) {
    bucketArr.unshift(i)
  }

  if (parseInt(bucketArr[0]) == 0) return '0'

  let res = ''

  for (let subArr of bucketArr) {
    while (subArr.length > 0) {
      res += subArr.shift()
    }
  }

  return res
}

// const nums1 = [10, 2]
// console.log(largestNumber(nums1))

// const nums2 = [3, 30, 34, 5, 9]
// console.log(largestNumber(nums2))

const nums3 = [111311, 1113]
console.log(largestNumber(nums3))

const nums4 = [432, 43243]
console.log(largestNumber(nums4))

const nums5 = [8308, 8308, 830]
console.log(largestNumber(nums5))

const nums6 = [34323, 3432]
console.log(largestNumber(nums6))
