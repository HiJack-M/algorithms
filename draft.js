// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function (height) {
  let max = 0
  if (!height || height.length < 2) return max

  let l = 0
  let r = height.length - 1
  let area = 0
  while (l < r) {
    area = (r - l) * Math.min(height[l], height[r])
    if (area > max) {
      max = area
    }
    if (height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }
  return max
}
