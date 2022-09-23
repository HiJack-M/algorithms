// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// !!! 下面的方法会 Time Limit Exceeded
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height || height.length < 2) return 0

  let max = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]))
    }
  }

  return max
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(height))
