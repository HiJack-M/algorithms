// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length == 0) return []
  if (intervals.length == 1) return intervals

  intervals.sort((a, b) => a[0] - b[0])
  let ans = []
  while (intervals.length > 0) {
    let item1 = intervals.shift()
    if (intervals.length > 0) {
      let item2 = intervals.shift()
      if (item1[1] >= item2[0]) {
        intervals.unshift([item1[0], item2[1] > item1[1] ? item2[1] : item1[1]])
      } else {
        ans.push(item1)
        intervals.unshift(item2)
      }
    } else {
      ans.push(item1)
    }
  }
  return ans
}
