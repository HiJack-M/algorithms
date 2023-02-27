// 384. Shuffle an Array

// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.origin = [...nums]
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.origin
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let copy = [...this.origin]
  let ans = []
  let index = this.origin.length
  while (index > 0) {
    let random = Math.floor(Math.random() * index)
    ans.push(copy.splice(random, 1)[0])
    index--
  }
  return ans
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const test = (nums) => {
  let copy = [...nums]
  let ans = []
  let index = copy.length
  while (index > 0) {
    let random = Math.floor(Math.random() * index)
    ans.push(copy.splice(random, 1)[0])
    index--
  }
  return ans
}

console.log(test([1, 2, 3]))
