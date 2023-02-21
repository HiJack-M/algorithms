// 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let res = []
  if (!nums1 || !nums2 || nums1.length == 0 || nums2.length == 0) return res

  let arrReference = nums1.length <= nums2.length ? nums1 : nums2
  let arrContrast = nums1.length <= nums2.length ? nums2 : nums1

  for (let i = 0; i < arrContrast.length; i++) {
    let refIndex = arrReference.indexOf(arrContrast[i])
    if (refIndex !== -1) {
      res.push(arrContrast[i])
      arrReference.splice(refIndex, 1)
    }
  }

  return res
}

const nums11 = [1, 2, 2, 1]
const nums12 = [2, 2]
console.log(intersect(nums11, nums12))

const nums21 = [4, 9, 5]
const nums22 = [9, 4, 9, 8, 4]
console.log(intersect(nums21, nums22))
