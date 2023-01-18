// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k == 0 || !nums || nums.length == 0) return

  let N = nums.length
  // while (k > N) {
  //   k -= N
  // }
  k = k % N

  let temp = nums.splice(N - k, k)
  nums.splice(0, 0, ...temp)

  console.log(nums)
}

const nums1 = [1, 2, 3, 4, 5, 6, 7]
let k1 = 3
rotate(nums1, k1)

const nums2 = [-1, -100, 3, 99]
let k2 = 2
rotate(nums2, k2)

const nums3 = [1, 2]
rotate(nums3, 5)

var rotate_reverse = function (nums, k) {
  if (k == 0 || !nums || nums.length == 0) return

  let N = nums.length
  k = k % N
  _reverse(nums, 0, N - 1)
  _reverse(nums, 0, k - 1)
  _reverse(nums, k, N - 1)
}

const _reverse = (arr, i, j) => {
  // 双指针法
  while (i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
}

// nums = "----->-->"; k =3
// result = "-->----->";

// reverse "----->-->" we can get "<--<-----"
// reverse "<--" we can get "--><-----"
// reverse "<-----" we can get "-->----->"
// this visualization help me figure it out :)
