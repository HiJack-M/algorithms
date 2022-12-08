// 108. Convert Sorted Array to Binary Search Tree

// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums || nums.length == 0) return null
  return buildTrees(nums, 0, nums.length - 1)
}

const buildTrees = (arr, l, r) => {
  if (l == r) {
    return new TreeNode(arr[l])
  }
  let mid = l + ((r - l) >> 1)
  let node = new TreeNode(arr[mid])
  if (mid - 1 >= l) {
    node.left = buildTrees(arr, l, mid - 1)
  }
  if (mid + 1 <= r) {
    node.right = buildTrees(arr, mid + 1, r)
  }
  return node
}

const nums1 = [-10, -3, 0, 5, 9]
console.log(sortedArrayToBST(nums1))
