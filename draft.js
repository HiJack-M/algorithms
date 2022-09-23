// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height || height.length < 2) return 0

  let max = 0
  let li = 0
  let ri = height.length - 1

  while (li < ri) {
    max = Math.max(max, (ri - li) * Math.min(height[li], height[ri]))
    if (height[li] > height[ri]) ri--
    else li++
  }

  return max
}

// 双指针方法：
// 面积受限于短边，短边限制了面积变大的可能性，就算另一边无敌大，也没办法

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(height))
